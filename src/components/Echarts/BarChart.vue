<template>
  <div :id="id" class="container"></div>
</template>
<script>
import * as echarts from 'echarts'
import resize from './mixins/resize'
import event from '@/event'
const animationDuration = 2000
import { formatTime, kbFormat } from '@/utils/methods'
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
    havaLineChart: {
      type: Boolean,
      default: false
    },
    gradient: {
      type: Array,
      default: () => []
    },
    settingColor: {
      type: String,
      default: ''
    },
    dataObject: {
      // type: Object,
      default: () => {}
    },
    haveProgress: {
      type: Boolean,
      default: false
    },
    timeFilter: {
      type: Array,
      default: () => []
    },
    currentTime: {
      type: String,
      default: 'month'
    },
    maxValueSpan: {
      type: Number,
      default: 14
    },
    kbFormat: {
      type: Boolean,
      default: false
    },
    isScale: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      chart: null,
      id: 'echart_' + Math.random(),
      setDataColor: [],
      setLineTooltip: [],
      yArrs: [],
      series: []
    }
  },
  watch: {
    dataObject: {
      deep: true,
      handler: function(val, oldVal) {
        // if (Object.prototype.hasOwnProperty.call(val, 'value') && val.value.length > 0) {
        try {
          this.initChart()
        } catch (e) {
          // console.log(e)
        }
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
        if (Object.prototype.hasOwnProperty.call(this.dataObject, 'value') && this.dataObject.value.length > 0) {
          this.initChart()
        }
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
  created() {},
  methods: {
    handleClickTime(time) {
      this.$emit('update:currentTime', time)
    },
    showLoading() {
      if (this.chart) {
        this.chart.showLoading()
      }
    },
    clearLoading() {
      if (this.chart) {
        this.chart.clearLoading()
      }
    },
    initChart() {
      this.setDataColor = []
      this.setLineTooltip = []
      if (Object.prototype.hasOwnProperty.call(this.dataObject, 'value') && this.dataObject.value.length > 0) {
        this.dataObject.value.forEach((item, index) => {
          const obj = {
            value: item,
            // itemStyle: {
            //   color: this.settingColor
            //     ? this.settingColor
            //     : this.color[index % this.color.length]
            // },
            data: Object.prototype.hasOwnProperty.call(this.dataObject, 'id') ? this.dataObject.id[index] : ''
          }
          this.setDataColor.push(obj) // 自定义颜色
        })
      } else {
        return
      }
      // 普通柱状图
      const o = [
        {
          name: this.titleLeft || this.dataObject.name,
          type: 'bar',
          stack: 'vistors',
          data: this.dataObject.groupColor ? this.dataObject.groupColor : this.setDataColor,
          animationDuration,
          markPoint: {
            // 最大最小值
            data: [
              {
                name: '最小值',
                type: 'min'
              }
            ]
          },
          barGap: 20
        },

        this.havaLineChart
          ? {
            name: '增长趋势',
            type: 'line',
            yAxisIndex: 0, // 索引从0开始
            data: this.setLineTooltip
            // data: this.dataObject.value.map(item =>item + 500),
          }
          : ''
      ]

      // 柱折混用 //趋势图
      if (this.havaLineChart) {
        this.dataObject.value.forEach((item, index) => {
          const obj = {
            value: item + item / 3,
            tooltip: {
              formatter: () => this.titleLeft + '趋势'
            },
            // itemStyle: {
            //   color: this.settingColor
            //     ? this.settingColor
            //     : this.color[index % this.color.length]
            // }
          }
          this.setLineTooltip.push(obj)
        })
      }
      // 堆叠图
      if (this.dataObject.yArrs) {
        const data = []
        if (this.dataObject.lineArr) {
          this.dataObject.lineArr.forEach((item, index) => {
            data.push({
              value: item
            })
          })
        }
        this.dataObject.yArrs.forEach((item, index) => {
          this.series.push({
            name: this.dataObject.legend.data[index],
            type: 'bar',
            stack: 'vistors',
            data: item,
            animationDuration,
            markPoint: {
              // 最大最小值
              data: [
                {
                  name: '最小值',
                  type: 'min'
                }
              ]
            }
          })
          if (data.length) {
            this.series.push({
              name: this.dataObject.relationshipName,
              type: 'line',
              yAxisIndex: 0, // 索引从0开始
              data: data
              // data: this.dataObject.value.map(item =>item + 500),
            })
          }
        })
      }
      if (this.chart) {
        this.chart.setOption({
          // color: this.color,
          tooltip: {
            trigger: 'item',
            axisPointer: {
              type: 'shadow'
            }
          },
          dataZoom: [
            {
              type: 'inside',
              start: 0,
              end: this.dataObject.name.length > 10 ? 50 : 100,
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
                  // color: this.themeColor
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
          barMaxWidth: 50,
          barMinWidth: 20,
          xAxis: [
            {
              // name:"111",
              // nameLocation:"start",
              type: 'category',
              data: this.dataObject.name,
              axisTick: {
                alignWithLabel: true
              },
              axisLine: { // 坐标轴颜色
                show: true,
                lineStyle: {
                  // color: this.themeColor
                }
              },

              axisLabel: this.dataObject.color
                ? {
                  show: true,
                  textStyle: {
                    // color: (value, index) => this.color[index]
                  }
                } : {
                  show: true,
                  // color: this.themeColor
                }
            }
          ],
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
          yAxis: [
            {
              // name:"111",
              // nameLocation:"start",
              type: 'value',
              axisTick: {
                show: false
              },
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
              },
              scale: this.isScale // 是否缩放（从0 开始 变最小最大值）
            }
          ],
          series: this.series.length ? this.series : o
        })

        if (this.kbFormat) {
          this.chart.setOption({
            tooltip: {
              formatter: (args) => {
                if (this.kbFormat) {
                  // //console.log(args)
                  return args.seriesName + '<br/>' + args.name + '：' + kbFormat(args.value)
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
}
</script>
<style scoped lang="scss">
.title {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  //color: #999595;
  font-size: 15px;
}
.time {
  display: flex;
  margin-right: 15px;
  div {
    width: 25px;
    height: 25px;
    line-height: 25px;
    background: #ecf5fe;
    cursor: pointer;
    margin-left: 2px;
    border-radius: 2px;
    border: 1px solid #3f9efe;
    text-align: center;
    font-size: 14px;
    color: #76b9ff;
    font-weight: 550;
  }
  .active {
    background: #149ec7;
    color: #cafff9;
  }
}
.empty-chart{
  width: 100%;
  height: 70%;
  display: flex;
  justify-content:center;
  align-items: center;
}
.container{
  width: 100%;
  height: 100%;
}
</style>

