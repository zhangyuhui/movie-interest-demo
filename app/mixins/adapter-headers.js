import Ember from 'ember';

export default Ember.Mixin.create({
	setupHeaders: Ember.required,

	headers: {
		
	},

	addSetupHeaders: function () {
		var adapter = this;
		this.setupHeaders = function (hash) {
			hash.beforeSend = function (xhr) {
				if (Ember.typeOf(adapter.headers) === 'object') {
					Ember.keys(adapter.headers).forEach(function (key) {
						xhr.setRequestHeader(key, adapter.headers[key]);
					});
				}
			};
			hash.crossDomain = true;
			hash.xhrFields = {withCredentials: true};
			return hash;
		};
	}.on('init')
});
