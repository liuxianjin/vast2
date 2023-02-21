<template>
  <div class="highcharts-container" :id="id"></div>
</template>

<script>
import Highcharts from 'highcharts/highstock';
import treemap from 'highcharts/modules/treemap'
// import exporting from 'highcharts/modules/exporting.js'
import variwide from 'highcharts/modules/variwide.js'

treemap(Highcharts)
// exporting(Highcharts)
variwide(Highcharts)
export default {
  name: 'ChangeWidthBarChart.vue',
  data() {
    return {
      chart: null,
      id: 'chart_' + Math.random()
    }
  },
  mounted() {
    this.initChart()
  },
  methods: {
    initChart() {
      this.chart = Highcharts.chart(this.id, {
        chart: {
          type: 'variwide' // varwide 依赖 varwide.js
        },
        title: {
          text:'带宽统计',
          align:'left',
          margin:0,
          style:{
            'fontSize': '15px',
            'color': '#999595',
            'fontWeight': 'bold',
          }
        },
        xAxis: {
          type: 'category',
          title: {
            text: '横向是带宽 纵向是数量'
          }
        },
        legend: {
          enabled: false
        },
        series: [{
          name: '人工成本',
          data: [
            ['挪威', 50.2, 335504],
            ['丹麦', 42, 277339],
            ['比利时', 39.2, 421611],
            ['瑞典', 38, 462057],
            ['法国', 35.6, 2228857],
            ['荷兰', 34.3, 702641],
            ['芬兰', 33.2, 215615],
            ['德国', 33.0, 3144050],
            ['奥地利', 32.7, 349344],
            ['爱尔兰', 30.4, 275567],
            ['意大利', 27.8, 1672438],
            ['英国', 26.7, 2366911],
            ['西班牙', 21.3, 1113851],
            ['希腊', 14.2, 175887],
            ['葡萄牙', 13.7, 184933],
            ['捷克共和国', 10.2, 176564],
            ['波兰', 8.6, 424269],
            ['罗马尼亚', 5.5, 169578]
          ],
          dataLabels: {
            enabled: true,
            format: '€{point.y:.0f}'
          },
          tooltip: {
            pointFormat: '人工成本： <b>€ {point.y}/h</b><br>' +
              'GDP: <b>€ {point.z} 百万</b><br>'
          },
          colorByPoint: true,
        }],
        credits: { enabled: false }
      })
    }
  },
}
</script>

<style scoped>
.highcharts-container {
  width: 100%;
}
</style>
