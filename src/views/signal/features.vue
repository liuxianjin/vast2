/*
 * @Author: lxj
 * @Date: 2022/2/17/15:20
 */
<!--特征统计-->
<template>
  <div class="app-container">
    <nav>
      <span class="f-title mr-10">卫星</span>
      <el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <span class="f-title mr-10 ml-10">载波</span>
      <el-select v-model="value" class="long" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-button class="ml-10" type="primary" plain>特征统计</el-button>
    </nav>
    <section class="mt-10">
      <el-table :data="tableData" border style="width: 100%"
                :header-row-style="{ height: '0', padding: '0' }"
                :header-cell-style="{ height: '0', padding: '0' }"
                :row-style="{ height: '0' }"
                :cell-style="{ padding: '0' }">
        <el-table-column prop="date" label="#" show-overflow-tooltip min-width="120" sortable></el-table-column>
        <el-table-column prop="date" label="卫星名称" show-overflow-tooltip min-width="120" sortable></el-table-column>
        <el-table-column prop="date" label="波束" show-overflow-tooltip min-width="120" sortable></el-table-column>
        <el-table-column prop="date" label="转发器" show-overflow-tooltip min-width="120" sortable></el-table-column>
        <el-table-column prop="date" label="符号率" show-overflow-tooltip min-width="120" sortable></el-table-column>
        <el-table-column prop="date" label="载波频点" show-overflow-tooltip min-width="120" sortable></el-table-column>
        <el-table-column prop="date" label="载波极化方式" show-overflow-tooltip min-width="120" sortable></el-table-column>
        <el-table-column prop="date" label="编码方式" show-overflow-tooltip min-width="120" sortable></el-table-column>
        <el-table-column prop="date" label="载波类型" show-overflow-tooltip min-width="120" sortable></el-table-column>
        <el-table-column prop="date" label="多址方式" show-overflow-tooltip min-width="120" sortable></el-table-column>
        <el-table-column prop="date" label="编码方式" show-overflow-tooltip min-width="120" sortable></el-table-column>
        <el-table-column prop="date" label="重要性" show-overflow-tooltip min-width="120" sortable></el-table-column>
        <el-table-column prop="date" label="更新时间" show-overflow-tooltip min-width="120" sortable></el-table-column>
      </el-table>
    </section>

    <section class="second mt-10">
      <RectTree class="second-left" title="业务统计"></RectTree>
      <CalendarPieChart class="second-right"  title="出联消失"></CalendarPieChart>
    </section>

    <section class="second mt-10">
      <ChangeWidthBarChart class="second-left" title="业务统计"></ChangeWidthBarChart>
      <ManyPoints class="second-right"  title="出联消失"></ManyPoints>
    </section>

    <section class="third mt-10">
      <PlainDate></PlainDate>
    </section>
  </div>
</template>

<script>
import CalendarPieChart from '@/components/Echarts/CalendarPieChart'
import RectTree from '@/components/HightCharts/RectTree'
import ChangeWidthBarChart from '@/components/HightCharts/ChangeWidthBarChart'
import ManyPoints from '@/components/HightCharts/ManyPoints'
import PlainDate from '@/components/Echarts/PlainDate'
export default {
  components:{ CalendarPieChart,RectTree, ChangeWidthBarChart,ManyPoints, PlainDate },
  data(){
    return{
      tableData:[],
      options:[],
      value:''
    }
  }
}
</script>

<style scoped lang="scss">
.el-select.el-select--mini.long{
  width: 600px;
}
.second{
  display: flex;
  justify-content: space-between;
  height: 260px;
  &-left{
    width: 70%;
  }
  &-right{
    min-width: 400px;
    width: 30%;
  }
}
.third{
  width: 100%;
  height: 180px;
}

</style>
