import Ember from 'ember';

export default Ember.Component.extend({
	options: {
        title: {
            text: '用户评价电影分布比较',
            x: -20 //center
        },
        subtitle: {
            text: '数据来源: Netflix      电影: 《White Chicks》(小姐好白)',
            x: -20
        },
        xAxis: {
			categories: ['李小明 (20岁 男)', 
						 '方大同 (25岁 男)',
						 '张赫宣 (28岁 男)', 
						 '史赧省 (30岁 男)',
						 '风萧萧 (32岁 男)',
						 '吴佩孚 (30岁 男)',
						 '封万里 (35岁 男)',
						 '李炜 (38岁 男)',
						 '何强 (40岁 男)',
						 '肖仁中 (45岁 男)',]
        },
        yAxis: {
            title: {
                text: '评价分数(ranking 1-10)'
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
            data: [4.11, 3.91, 5.52, 9.51, 5.25, 3.51, 4.25, 8.54, 6.35, 8.36]
        }, {
            name: '预测方法',
            data: [4.62, 4.15, 6.30, 8.65, 6.50, 4.30, 4.20, 7.01, 6.81, 9.81]
        }, {
            name: '真实情况',
            data: [5.65, 4.60, 7.10, 7.83, 7.51, 4.10, 5.10, 7.50, 6.01, 9.03]
        }]
	},
	didInsertElement: function () {
		this._super(...arguments);
		var options = this.get('options');
		this.$('.chart-container').highcharts(options);
	},
	willDestroyElement: function () {
		this._super(...arguments);
	},
});
