<template>
    <div :id="id" class="container"></div>
</template>

<script>
import * as echarts from 'echarts'
import resize from './mixins/resize'
export default {
  name:'PlainDate',
  mixins: [resize],
  props: {
    title:{
      type:String,
      default:''
    },
    dataObject: {
      default: () => []
    },
  },
  data() {
    return {
      chart: null,
      dataNum: 0,
      id: 'echart_' + Math.random()
    }
  },
  watch: {
    dataObject: {
      deep: true,
      handler: function(val, oldVal) {
        try {
          this.initChart()
        } catch (e) {
          // console.log(e)
        }
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
        this.chart = echarts.init(document.getElementById(this.id))
        this.initChart()
    })
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart() {
      var option;
      function getVirtulData(year) {
        year = year || '2022';
        var date = +echarts.number.parseDate(year + '-01-01');
        var end = +echarts.number.parseDate(year + '-12-31');
        var dayTime = 3600 * 24 * 1000;
        var data = [];
        for (var time = date; time <= end; time += dayTime) {
          data.push([
            echarts.format.formatTime('yyyy-MM-dd', time),
            Math.floor(Math.random() * 10000)
          ]);
        }
        return data;
      }

      option = {
        visualMap: {
          show: false,
          min: 0,
          max: 10000
        },
        calendar: {
          left: 30,
          right: 30,
          cellSize: ['auto', 13],
          range: '2022',
          itemStyle: {
            borderWidth: 0.5
          },
          yearLabel: { show: false }
        },
        title:{
          text: '通联规律',
          left: '0%',
          textAlign: 'left',
          textStyle:{
            'fontSize':'15px',
            'color': '#999595',
            'fontWeight': 'bold',
          },
          top:3
        },
        series: {
          type: 'heatmap',
          coordinateSystem: 'calendar',
          data: getVirtulData('2022')
        },
        grid: {
          left: '2%',
          right: '2%',
          bottom: '3%',
          containLabel: true
        },
      }
      option && this.chart.setOption(option);
    }
  }
}
</script>
<style scoped>
.title {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 15px;
}
.box{
  position: relative;
}
.container{
  width: 100%;
  height: 100%;
}
</style>
