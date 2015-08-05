import DS from 'ember-data';
import Ember from 'ember';

export default Ember.Mixin.create({
	instrumentError: function (jqXHR) {
		let app = this.container.lookup('application:main');
		if (app && !app.initialized) {
			let _ready = app.ready || Ember.K;
			app.ready = function () {
				_ready.apply(this, arguments);
				Ember.run.scheduleOnce('routerTransitions', this, function () {
					Ember.Instrumentation.instrument('xhr.error', jqXHR);
				});
			};
		} else {
			Ember.Instrumentation.instrument('xhr.error', jqXHR);
		}
	},

	ajaxError: function (jqXHR, suppressError) {
		if (!suppressError) {
			this.instrumentError(jqXHR);
		}
		if (jqXHR && jqXHR.status === 422) {
			let response = Ember.$.parseJSON(jqXHR.responseText);
			let errors = {};
			let validationMessages = response.validationMessages;

			if (!Ember.isEmpty(validationMessages)) {
				validationMessages.forEach(function (validation) {
					if (Ember.typeOf(validation) !== 'object') {
						return;
					}
					let propName = validation.propertyName;
					let message = validation.message;
					let objName = validation.objectName;

					if (!Ember.isEmpty(message)) {
						if (!Ember.isEmpty(propName)) {
							let key = Ember.String.camelize(propName);
							if (!Ember.isEmpty(objName)) {
								key = objName + '.' + key;
							}
							errors[key] = errors[key] || [];
							errors[key].push(message);
						} else {
							errors['unknown']= errors['unknown'] || [];
							errors['unknown'].push(message);
						}
					}
				});
			}
			errors._response = response;
			return new DS.InvalidError(errors);
		}
		return this._super(jqXHR);
	}
});
