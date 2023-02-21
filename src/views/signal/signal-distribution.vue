<template>
  <div class="app-container">
    <nav>
      <span class="f-title mr-10 ml-10">卫星</span>
      <el-select v-model="value" class="shirt" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <span class="f-title mr-10 ml-10">转发器</span>
      <el-select v-model="value" class="shirt" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </nav>
    <section class="top">
      <div class="top-left">
        <el-row class="mt-10 mb-10">
          <div class="f-title">
            关联转发器
          </div>
        </el-row>
        <el-table :data="tableData" border style="width: 100%" class="table">
          <el-table-column prop="date" label="#" show-overflow-tooltip min-width="120" sortable></el-table-column>
          <el-table-column prop="date" label="频段开始值" show-overflow-tooltip min-width="120" sortable></el-table-column>
          <el-table-column prop="date" label="频段结束值" show-overflow-tooltip min-width="120" sortable></el-table-column>
          <el-table-column prop="date" label="极化方式" show-overflow-tooltip min-width="120" sortable></el-table-column>
          <el-table-column prop="date" label="转发器名称" show-overflow-tooltip min-width="120" sortable></el-table-column>
          <el-table-column prop="date" label="转发器类型" show-overflow-tooltip min-width="120" sortable></el-table-column>
          <el-table-column prop="date" label="上行或下行" show-overflow-tooltip min-width="120" sortable></el-table-column>
        </el-table>
      </div>
      <div class="top-right">
        <el-row class="mt-10 mb-10">
          <div class="f-title">
            频谱统计
          </div>
        </el-row>
        <div class="pieChart">
          <PieChart :data-object="myData.zb_ts" title="带宽"/>
        </div>
      </div>
    </section>
    <section class="center">
      <div class="mt-10 mb-10">
        <el-button type="primary" plain>JS</el-button>
        <el-button type="primary" plain>政府</el-button>
        <el-button type="primary" plain>外交</el-button>
        <el-button type="primary" plain>商业</el-button>
        <el-button type="primary" plain>未知</el-button>
      </div>
      <div class="center-chart">
        <LineChart class="lineCharts" title="分布情况"></LineChart>
      </div>
    </section>

    <section class="mt-10">
      <el-row >
        <div class="f-title mb-10">当前载波</div>
      </el-row>
      <el-table :data="tableData" class="table" border style="width: 100%">
        <el-table-column type="index" label="#"></el-table-column>
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
        <el-table-column width="150" label="查看">
          <template slot-scope="scope">
            <el-button type="info" icon="el-icon-document-copy" circle></el-button>
            <el-button type="primary" icon="el-icon-edit" circle></el-button>
            <el-button type="danger" icon="el-icon-delete" circle></el-button>
          </template>
        </el-table-column>
      </el-table>
    </section>
  </div>
</template>

<script>
import PieChart from '@/components/Echarts/PieChart'
import LineChart from '@/components/Echarts/LineChart'
export default {
  components:{PieChart, LineChart},
  name: 'signal-distribution'
}
</script>

<style scoped lang="scss">
.top{
  width: 100%;
  height: 40%;
  display: flex;
  &-left{
    width: 70%;
    height: 100%;
    .table{
      height: 100%;
    }
  }
  &-right{
    width: 30%;
    .pieChart{
      width: 100%;
      height: calc(100% - 37.25px);
    }
  }
}
.center{
  width: 100%;
  height: 30%;
  &-chart{
    width: 100%;
    height: 300px;
    .lineCharts{
      width: 100%;
      height: 300px;
    }

  }
}
</style>
