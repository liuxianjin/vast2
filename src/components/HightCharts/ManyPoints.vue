<template>

  <div>
    <div class="menu">
      <el-button class="f-title" plain>信噪比</el-button>
      <el-button class="f-title" plain>载噪比</el-button>
      <el-button class="f-title" plain>报文数量</el-button>
    </div>
    <div class="highcharts-container" :id="id"></div>
  </div>
</template>

<script>
import Highcharts from 'highcharts/highstock';
import boost from 'highcharts/modules/boost.js'
// import exporting from 'highcharts/modules/exporting.js'

boost(Highcharts)
// exporting(Highcharts)
export default {
  name: 'ManyPoints.vue',
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
      function getData(n) {
        var arr = [],
          i,
          a,
          b,
          c,
          spike;
        for (i = 0; i < n; i = i + 1) {
          if (i % 100 === 0) {
            a = 2 * Math.random();
          }
          if (i % 1000 === 0) {
            b = 2 * Math.random();
          }
          if (i % 10000 === 0) {
            c = 2 * Math.random();
          }
          if (i % 50000 === 0) {
            spike = 10;
          } else {
            spike = 0;
          }
          arr.push([
            i,
            2 * Math.sin(i / 100) + a + b + c + spike + Math.random()
          ]);
        }
        return arr;
      }
      var n = 500000,
        data = getData(n);
      console.time('line');
      Highcharts.chart(this.id, {
        chart: {
          zoomType: 'x'
        },
        boost: {
          useGPUTranslations: true
        },
        title: null,
        tooltip: {
          valueDecimals: 2
        },
        series: [{
          data: data,
          lineWidth: 0.5
        }],
        credits: { enabled: false }
      });
    }
  },
}
</script>

<style scoped lang="scss">
.highcharts-container {
  width: 100%;
  height: 287.25px;
}
.menu{
  display: flex;
  //div{
  //  margin-left: 10px;
  //  border: 1px solid #ccc;
  //  border-radius: 2px;
  //  padding: 0 10px;
  //}
}
</style>
