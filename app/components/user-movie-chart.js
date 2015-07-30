import Ember from 'ember';

export default Ember.Component.extend({
	options: {
        title: {
            text: '电影受欢迎度分布',
            x: -20 //center
        },
        subtitle: {
            text: '数据来源: Netflix      用户: 李小鹏 男 22岁',
            x: -20
        },
        xAxis: {
			categories: ['《This Means War》(情敌大战)', 
                         '《Avatar 2》(阿凡达2)',
                         '《The Hangover》(宿醉)', 
                         '《The Other End Of Line》(电话情缘)', 
                         '《White Chicks》(小姐好白)', 
                         '《The New Guy》(新丁驾到)',
                         '《War of The Arrows》(弓箭之战)', 
                         '《Don 2》(夺命煞星宝莱坞之国王归来)', 
                         '《The Karate Kid》(功夫梦)',
                         '《Ted 2》(泰迪熊2)']
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
            data: [6.61, 6.91, 9.52, 8.51, 9.25, 9.51, 7.25, 5.54, 4.35, 3.36]
        }, {
            name: '预测方法',
            data: [7.32, 6.25, 9.30, 8.15, 9.50, 9.30, 7.20, 6.01, 4.81, 3.81]
        }, {
            name: '真实情况',
            data: [7.65, 5.70, 9.00, 7.83, 9.51, 9.10, 7.10, 6.10, 5.01, 4.03]
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
