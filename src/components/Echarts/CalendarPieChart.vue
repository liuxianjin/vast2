<template>
    <div :id="id" class="container"></div>
</template>

<script>
import * as echarts from 'echarts'
import resize from './mixins/resize'

export default {
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
      let that = this
      var option;
      const cellSize = [60, 40];//日历方格半径
      const pieRadius = 15;//圆圈半径
      function getVirtulData() {
        let date = +echarts.number.parseDate('2017-02-01');
        let end = +echarts.number.parseDate('2017-03-01');
        let dayTime = 3600 * 24 * 1000;
        let data = [];
        for (let time = date; time < end; time += dayTime) {
          data.push([
            echarts.format.formatTime('yyyy-MM-dd', time),
            Math.floor(Math.random() * 10000)
          ]);
        }
        return data;
      }
      function getPieSeries(scatterData, chart) {
        return scatterData.map(function (item, index) {
          var center = chart.convertToPixel('calendar', item);
          return {
            id: index + 'pie',
            type: 'pie',
            center: center,
            label: {
              formatter: '{c}',
              position: 'inside'
            },
            radius: pieRadius,
            data: [
              { name: '工作', value: Math.round(Math.random() * 24) },
              { name: '娱乐', value: Math.round(Math.random() * 24) },
              { name: '睡觉', value: Math.round(Math.random() * 24) }
            ]
          };
        });
      }
      function getPieSeriesUpdate(scatterData, chart) {
        return scatterData.map(function (item, index) {
          var center = chart.convertToPixel('calendar', item);
          return {
            id: index + 'pie',
            center: center
          };
        });
      }
      var scatterData = getVirtulData();
      option = {
        tooltip: {},
        legend: {
          // data: ['工作', '娱乐', '睡觉'],
          bottom: 5
        },
        title:{
          text: '消失出联',
          left: '0%',
          textAlign: 'left',
          textStyle:{
            fontSize:'15px',
            'color': '#999595',
            'fontWeight': 'bold',
          },
          top:3
        },
        calendar: {
          top: 'middle',
          left: 'center',
          orient: 'vertical',
          cellSize: cellSize,
          yearLabel: {
            show: false,
            fontSize: 10
          },
          dayLabel: {
            margin: 5,
            firstDay: 1,
            nameMap: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          monthLabel: {
            show: false
          },
          range: ['2017-02']
        },
        series: [
          {
            id: 'label',
            type: 'scatter',
            coordinateSystem: 'calendar',
            symbolSize: 1,
            label: {
              show: true,
              formatter: function (params) {
                return echarts.format.formatTime('dd', params.value[0]);
              },
              offset: [-cellSize[0] / 2 + 10, -cellSize[1] / 2 + 10],
              fontSize: 12
            },
            data: scatterData
          }
        ]
      };

      let pieInitialized;
      setTimeout(function () {
        pieInitialized = true;
        that.chart.setOption({
          series: getPieSeries(scatterData, that.chart)
        });
      }, 10);
      // window.onresize = function () {
      //   if (pieInitialized) {
      //     myChart.setOption({
      //       series: getPieSeriesUpdate(scatterData, myChart)
      //     });
      //   }
      // };
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
