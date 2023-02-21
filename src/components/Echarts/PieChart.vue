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
    roseType: {
      type: String,
      default: ''
    },
    radius: {
      type: Array,
      default: () => [30, 50]
    },
    borderRadius: {
      type: Number,
      default: 5
    },
    dataObject: {
      default: () => []
    },
    center: {
      type: Array,
      default: () => ['50%', '50%']
    }
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
      // 普通的watch监听
    }
  },
  mounted() {
    const _this = this
    this.$nextTick(() => {
      // ////console.log(this.$el)
      if (document.getElementById(this.id)) {
        this.chart = echarts.init(document.getElementById(this.id))
        this.initChart()
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
    initChart() {
      this.chart.setOption({
        dataZoom: [
          // 区域缩放器
          {
            type: 'slider',
            yAxisIndex: 0 // 作用区域
          }
        ],
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
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
        legend: {
          type: 'scroll',
          orient: 'vertical',
          right: 0,
          top: 5,
          bottom: 0,
          itemWidth: 20,
          itemHeight: 15,
          itemGap: 2,
          textStyle: {
            // color: this.themeColor,
            fontSize: '12px'
          },
          // pageIconColor: this.themeColor,
          pageTextStyle: {
            // color: this.themeColor
          },
          formatter: function(name) {
            return echarts.format.truncateText(name, 50, '12px Microsoft Yahei', '…')
          },
          tooltip: {
            show: true
          }
        },
        series: [
          {
            // name: this.titleLeft,
            type: 'pie',
            roseType: this.roseType, // radius area
            radius: this.radius,
            center: this.center,
            data: this.dataObject,
            animationEasing: 'cubicInOut',
            animationDuration: 2600,
            itemStyle: {
              borderRadius: this.borderRadius,
              // borderColor: this.themeColor,
              borderWidth: 0
            },
            label: {
              normal: {
                textStyle: {
                  // color: this.themeColor
                }
              }
            }
          }
        ]
      })
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
