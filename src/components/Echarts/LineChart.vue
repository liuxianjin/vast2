<template>
  <div :id="id" class="container"></div>
</template>

<script>
import * as echarts from 'echarts'
import resize from './mixins/resize'
import { formatTime, kbFormat } from '@/utils/methods'
import event from '@/event'

const animationDuration = 2000

export default {
  filters: {
    thisTimeFilter(msg) {
      return formatTime(msg)
    }
  },
  mixins: [resize],
  props: {
    title:{
      type:String,
      default:''
    },
    timeFilter: {
      type: Array,
      default: () => []
    },
    currentTime: {
      type: String,
      default: 'month'
    },
    dataObject: {
      default: () => {}
    },
    haveProgress: {
      type: Boolean,
      default: true
    },
    maxValueSpan: {
      type: Number,
      default: 14
    },
    kbFormat: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      chart: null,
      id: 'echart_' + Math.random(),
    }
  },
  watch: {
    dataArr(val, oldVal) {
      // 普通的watch监听
      this.initChart()
    },
    dataObject: {
      deep: true,
      handler: function(val, oldVal) {
        // if (Object.prototype.hasOwnProperty.call(val, 'value')) {
        this.initChart()
        // }
      }
      // 普通的watch监听
    }
  },
  mounted() {
    const _this = this
    this.$nextTick(() => {
      if (document.getElementById(this.id)) {
        this.chart = echarts.init(document.getElementById(this.id))
        this.initChart()
        const that = this
        this.chart.on('datazoom', function(arg) {
          if (arg.end >= 90) {
            that.$emit('loadmore')
          }
        })
      }
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
    handleClickTime(time) {
      console.log(time)
      this.$emit('update:currentTime', time)
    },
    initChart() {
      this.chart.setOption({
        // color: this.color[Math.floor(Math.random() * this.color.length)],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        dataZoom: [
          {
            type: 'inside',
            start: 0,
            end: this.haveProgress ? 50 : 100,
            minValueSpan: 8,
            maxValueSpan: this.maxValueSpan
          },
          this.haveProgress
            ? {
              type: 'slider',
              height: 12,
              xAxisIndex: 0, // 作用区域
              // start: 0,
              // end: 70,
              bottom: 10,
              minValueSpan: 8,
              maxValueSpan: this.maxValueSpan,
              textStyle: {
                color: '#f1fffe'
              }
            }
            : ''
        ],
        grid: {
          top: '40',
          left: '0',
          right: '30',
          bottom: '5%',
          containLabel: true
        },
        title:{
          text: this.title,
          left: '0%',
          textAlign: 'left',
          textStyle:{
            'fontSize':'15px',
            'color': '#999595',
            'fontWeight': 'bold',
          },
          top:3
        },
        xAxis: [
          {
            type: 'category',
            data: this.dataObject.name,
            axisTick: {
              alignWithLabel: true
            },
            inverse: true,
            boundaryGap: false, // 紧挨边缘
            axisLabel: {
              show: true,
              // color: this.themeColor
            },
            axisLine: { // 坐标轴颜色
              show: true,
              lineStyle: {
                // color: this.themeColor
              }
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            axisTick: {
              show: false
            },
            scale: true,
            axisLabel: {
              show: true,
              // color: this.themeColor,
              formatter: value => {
                if (this.kbFormat) {
                  return kbFormat(value)
                } else {
                  return value
                }
              }
            },
            splitLine: { // 刻度线颜色
              show: true,
              lineStyle: {
                // color: [this.gridColor],
                width: 1,
                type: 'solid'
              }
            },
            axisLine: { // 坐标轴颜色
              show: true,
              lineStyle: {
                // color: this.themeColor
              }
            }
          }
        ],
        series: [
          {
            // name: this.titleLeft,
            type: 'line',
            stack: 'vistors',
            barWidth: '60%',
            data: this.dataObject.value,
            animationDuration,
            areaStyle: {},
            smooth: true
          }
        ]
      })
      if (this.kbFormat) {
        this.chart.setOption({
          tooltip: {
            formatter: (args) => {
              if (this.kbFormat) {
                return args[0].seriesName + '<br/>' + args[0].name + '：' + kbFormat(args[0].value)
              } else {
                return {}
              }
            }
          }
        })
      }
    }
  }
}
</script>
<style scoped lang="scss">
.title {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 15px;
}
.time{
  display: flex;
  div{
    width: 25px;
    height: 25px;
    line-height: 25px;
    background: #ECF5FE;
    cursor: pointer;
    margin-left: 2px;
    border-radius: 2px;
    border: 1px solid #3F9EFE;
    text-align: center;
    font-size: 14px;
    color: #76b9ff;
    font-weight: 550;
  }
  .active {
    background: #149EC7;
    color: #cafff9;
  }
}
</style>

