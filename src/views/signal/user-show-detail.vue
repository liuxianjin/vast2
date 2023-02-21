<template>
  <div class="app-container hidden">
    <nav class="nav">
      <div>
        <span class="f-title mr-10">用户</span>
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <span class="f-title ml-10 mr-10">时间</span>
        <el-date-picker
          v-model="date"
          type="datetime"
          placeholder="选择日期时间">
        </el-date-picker>
        <el-button class="ml-10" type="primary" plain>查询</el-button>
        <el-button class="ml-10" type="info" plain>重置</el-button>
      </div>
      <div>
        <el-button class="ml-10" type="primary" plain>通信记录详情</el-button>
      </div>
    </nav>
    <section class="mt-10">
      <el-table :data="tableData" class="" border style="width: 100%"
                :header-row-style="{ height: '0', padding: '0' }"
                :header-cell-style="{ height: '0', padding: '0' }"
                :row-style="{ height: '0' }"
                :cell-style="{ padding: '0' }">
        <el-table-column type="index" label="#"></el-table-column>
        <el-table-column prop="date" label="ID" show-overflow-tooltip min-width="120" sortable></el-table-column>
        <el-table-column prop="date" label="用户名称" show-overflow-tooltip min-width="180" sortable></el-table-column>
        <el-table-column prop="date" label="用户性质" show-overflow-tooltip min-width="120" sortable></el-table-column>
        <el-table-column prop="date" label="重要程度" show-overflow-tooltip min-width="120" sortable></el-table-column>
        <el-table-column prop="date" label="是否军事基地" show-overflow-tooltip min-width="120" sortable></el-table-column>
        <el-table-column prop="date" label="用户属性" show-overflow-tooltip min-width="120" sortable></el-table-column>
        <el-table-column prop="date" label="组织机构" show-overflow-tooltip min-width="120" sortable></el-table-column>
        <el-table-column prop="date" label="国家地区" show-overflow-tooltip min-width="120" sortable></el-table-column>
        <el-table-column prop="date" label="用户特征" show-overflow-tooltip min-width="120" sortable></el-table-column>
        <el-table-column prop="date" label="运动属性" show-overflow-tooltip min-width="120" sortable></el-table-column>
        <el-table-column prop="date" label="关联主站ID" show-overflow-tooltip min-width="120" sortable></el-table-column>
        <el-table-column prop="date" label="经度" show-overflow-tooltip min-width="120" sortable></el-table-column>
        <el-table-column prop="date" label="纬度" show-overflow-tooltip min-width="120" sortable></el-table-column>
        <el-table-column prop="date" label="注释" show-overflow-tooltip min-width="120" sortable></el-table-column>
        <el-table-column prop="date" label="更新时间" show-overflow-tooltip min-width="120" sortable></el-table-column>
        <el-table-column show-overflow-tooltip label="菜单" min-width="220" fixed="right">
          <template slot-scope="scope">
            <el-button type="primary" plain>详情展示</el-button>
            <el-button type="info" icon="el-icon-document-copy" circle></el-button>
            <el-button type="primary" icon="el-icon-edit" circle></el-button>
            <el-button type="danger" icon="el-icon-delete" circle></el-button>
          </template>
        </el-table-column>
      </el-table>
    </section>
    <section class="mt-10">
      <el-row >
        <div class="f-title mb-10">载波特征</div>
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
    <section>
      <LineChart class="lineCharts"  :data-object="myData.txw" :have-progress="false" title="通联时间规律"></LineChart>
    </section>
    <section>
      <LineChart class="lineCharts" :data-object="myData.txw" :have-progress="false" title="通信流量"></LineChart>
    </section>
  </div>
</template>

<script>
import Pagination from '@/components/Pagination'
import LineChart from '@/components/Echarts/LineChart'
export default {
  components:{Pagination, LineChart},
  name: 'similarity-push',
  data(){
    return{
      keyword:'',
      options:[],
      value:'',
      date:'',
      tableData:[
        {date:'111'},
      ]
    }
  },
  created() {

  }
}
</script>

<style scoped lang="scss">
.nav{
  display: flex;
  justify-content: space-between;
}
.table{
  height: calc(100vh - 680px);
}
.lineCharts{
  width: 100%;
  height: 220px;
}
</style>
