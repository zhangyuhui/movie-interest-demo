import Ember from 'ember';
import DS from 'ember-data';
import AdapterHeaders from '../mixins/adapter-headers';
import AdapterErrorSupport from '../mixins/adapter-error-support';

export default DS.RESTAdapter.extend(AdapterHeaders, AdapterErrorSupport, {
	host: Ember.computed('', function () {
		return 'http://localhost:9000';
	}),
	ajaxOptions: function(url, type, options) {
		var hash = this._super(...arguments);
		hash = this.setupHeaders(hash);
		hash.url = hash.url.toLowerCase();
		return hash;
	}
});
