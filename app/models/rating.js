import DS from 'ember-data';

export default DS.Model.extend( {
	userId:          DS.attr('number'),
	userName:        DS.attr('string'),
	movieId:         DS.attr('number'),
	movieName:       DS.attr('string'),
	trueRating:      DS.attr('number'),
	mfRating:        DS.attr('number'),
	naiveRating:     DS.attr('number')
});
