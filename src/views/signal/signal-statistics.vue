<template>
  <div class="app-container">
    <nav class="nav">
      <div>
        <span class="f-title mr-10 ml-10">卫星</span>
        <el-select v-model="value" class="" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <span class="f-title mr-10 ml-10">波束</span>
        <el-select v-model="value" class="" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <span class="f-title mr-10 ml-10">波段</span>
        <el-select v-model="value" class="" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <span class="f-title mr-10 ml-10">极化</span>
        <el-select v-model="value" class="" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <span class="f-title mr-10 ml-10">转发器</span>
        <el-select v-model="value" class="" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <el-button class="ml-10" type="primary" plain>统计</el-button>
        <el-button class="ml-10" type="info" plain>重置</el-button>
      </div>
      <div>
        <el-button class="ml-10" type="primary" plain>统计自定义要素</el-button>
      </div>
    </nav>
    <section class="charts">
      <div class="charts-item">
        <PieChart :data-object="myData.zb_ts" title="载波类型"></PieChart>
      </div>
      <div class="charts-item">
        <PieChart :data-object="myData.zb_ts" title="调制方式"></PieChart>
      </div>
      <div class="charts-item">
        <PieChart :data-object="myData.zb_ts" title="多址方式"></PieChart>
      </div>
      <div class="charts-item">
        <PieChart :data-object="myData.zb_ts" title="编码方式"></PieChart>
      </div>
      <div class="charts-item">
        <PieChart :data-object="myData.zb_ts" title="信号分类"></PieChart>
      </div>
      <div class="charts-item">
        <PieChart :data-object="myData.zb_ts" title="澄清情况"></PieChart>
      </div>
      <div class="charts-item">
        <PieChart :data-object="myData.zb_ts" title="不清原因"></PieChart>
      </div>
      <div class="charts-item">
        <BarChart :data-object="myData.lx_type" title="重要性"></BarChart>
      </div>
    </section>
    <footer class="footer">
      <BarChart :data-object="myData.lx_type" title="在控载波数量" :hava-line-chart="true"></BarChart>
    </footer>
  </div>
</template>

<script>
import PieChart from '@/components/Echarts/PieChart'
import BarChart from '@/components/Echarts/BarChart'
export default {
  components:{PieChart, BarChart},
  name: 'signal-statistics',
  data(){
    return {
      options:[],
      value:''
    }
  }
}
</script>

<style scoped lang="scss">
.nav{
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.charts{
  width: 100%;
  height: 500px;
  display: flex;
  flex-wrap: wrap;
  &-item{
    width: 24.5%;
    height: 50%;
   }
}
.footer{
  width: 100%;
  height: 350px;
}
</style>
