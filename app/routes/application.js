import Ember from 'ember';

export default Ember.Route.extend({
	beforeModel(transition) {
		return this.store.find('user', {limit: 100}).then(data => {
			return this.set('users', data.map(user => {
				return {
					id: Ember.get(user, 'id'),
					name: Ember.get(user, 'name')
				};
			}));
		});
	},
	model(params, transition) {
		return [];
	}, 
	setupController(controller, model) {
		this._super(...arguments);
		let users = this.get('users');
		controller.setProperties({
			userId: Ember.get(users, 'firstObject.id'),
			users: users
		});
	}
});
