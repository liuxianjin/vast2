<template>
    <div class="highcharts-container" :id="id"></div>
</template>

<script>
import Highcharts from 'highcharts/highstock';
import treemap from 'highcharts/modules/treemap'
// import exporting from 'highcharts/modules/exporting.js'
import heatmap from 'highcharts/modules/heatmap.js'
treemap(Highcharts)
// exporting(Highcharts)
heatmap(Highcharts)
export default {
  name: 'RectTree.vue',
  data(){
    return{
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
        colorAxis: {
          minColor: '#FFFFFF',
          maxColor: Highcharts.getOptions().colors[0]
        },
        series: [{
          type: "treemap",
          layoutAlgorithm: 'squarified',
          data: [{
            name: 'A',
            value: 6,
            colorValue: 1
          }, {
            name: 'B',
            value: 6,
            colorValue: 2
          }, {
            name: 'C',
            value: 4,
            colorValue: 3
          }, {
            name: 'D',
            value: 3,
            colorValue: 4
          }, {
            name: 'E',
            value: 2,
            colorValue: 5
          }, {
            name: 'F',
            value: 2,
            colorValue: 6
          }, {
            name: 'G',
            value: 1,
            colorValue: 7
          },]
        }],
          title:{
            text:'业务统计',
            align:'left',
            margin:0,
            style:{
              'fontSize': '15px',
              'color': '#999595',
              'fontWeight': 'bold',
            }
          },
         credits: { enabled: false }
      });
    }
  },
}
</script>

<style scoped>
.highcharts-container {
  width: 100%;
  height: 100%;
}
</style>
