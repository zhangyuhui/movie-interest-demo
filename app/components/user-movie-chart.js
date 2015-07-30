import Ember from 'ember';

export default Ember.Component.extend({
	options: {
		chart: {
            type: 'column'
        },
        title: {
            text: '电影受欢迎度分布',
            x: -20 //center
        },
        subtitle: {
            text: '用户: 李小鹏 男 22岁',
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
            data: [4.61, 1.91, 4.52, 3.51, 4.25, 2.51, 3.25, 2.54, 4.35, 3.36]
        }, {
            name: '预测方法',
            data: [4.32, 1.25, 4.30, 3.15, 4.50, 2.30, 3.20, 2.01, 4.81, 3.81]
        }, {
            name: '真实情况',
            data: [4.65, 1.70, 4.00, 3.83, 4.51, 2.10, 3.10, 2.10, 5.01, 4.03]
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
