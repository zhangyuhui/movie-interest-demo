import Ember from 'ember';

function movieProperty(property) {
	return Ember.computed('model', function () {
		let model = this.get('model') || [];
		return model.map(rating => {
			return Ember.get(rating, property);
		});
	});
}

export default Ember.Controller.extend({
	loading: false,
	userId: null,
	users: [],
	moviesCounts:[15, 30, 50, 100, 200, 500],
	moviesCount: 15,

	shouldDataUpdate: function() {
		let userId = this.get('userId');
		let moviesCount = this.get('moviesCount');
		this.set('loading', true);
		this.store.find('rating', {user_id: userId, limit: moviesCount}).then(data => {
			this.set('model', data);
		}).finally(() => {
			this.set('loading', false)
		});
  	}.observes('userId', 'moviesCount'),

	user: Ember.computed('userId', function(){ 
		let userId = this.get('userId');
		let users = this.get('users') || [];
		let user = users.findBy('id', userId);
		return user && Ember.get(user, 'name');
	}),
	movies: movieProperty('movieName'),
	trRatings: movieProperty('trueRating'),
	mfRatings: movieProperty('mfRating'),
	naRatings:  movieProperty('naiveRating')
});
