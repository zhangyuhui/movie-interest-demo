import Ember from 'ember';

export default Ember.Component.extend({
	user: null,
	movies: null,
	trRatings: null,
	mfRatings: null,
	naRatings: null,
	
	loadingClass: Ember.computed('loading', function () {
		let loading = this.get('loading');
		return loading ? 'loading' : '';
	}),

	onmoviesChanged: function() {
		var options = this.get('options');
		this.$('.chart-container').highcharts(options);
	}.observes('movies'),

	options: Ember.computed('user', 'movies', 'trRatings', 'mfRatings', 'naRatings', function () {
		let userName = this.get('user') || '未知';
		let movies = this.get('movies') || [];
		let trRatings = this.get('trRatings') || [];
		let mfRatings = this.get('mfRatings') || [];
		let naRatings = this.get('naRatings') || [];

		return {
			chart: {
	            type: 'column'
	        },
	        title: {
	            text: '电影受欢迎度分布',
	            x: -20 //center
	        },
	        xAxis: {
				categories: movies
	        },
	        yAxis: {
	            title: {
	                text: '评价分数(ranking 1-5)'
	            },
	            plotLines: [{
	                value: 0,
	                width: 1,
	                color: '#808080'
	            }]
	        },
	        tooltip: {
	            valueSuffix: ''
	        },
	        legend: {
	            layout: 'vertical',
	            align: 'right',
	            verticalAlign: 'middle',
	            borderWidth: 0
	        },
	        series: [{
	            name: '统计方法',
	            data: trRatings
	        }, {
	            name: '预测方法',
	            data: mfRatings
	        }, {
	            name: '真实情况',
	            data: naRatings
	        }]
		};
	}),
	didInsertElement: function () {
		this._super(...arguments);
	},
	willDestroyElement: function () {
		this._super(...arguments);
	},
});
