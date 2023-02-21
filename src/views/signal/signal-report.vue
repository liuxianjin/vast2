<template>
  <div class="app-container hidden box">
    <div class="left-table">
      <nav class="nav">
        <div>
          <el-checkbox v-model="checked" class="ml-10">日报</el-checkbox>
          <el-checkbox v-model="checked" class="ml-10">周报</el-checkbox>
          <el-checkbox v-model="checked" class="ml-10">月报</el-checkbox>
          <span class="f-title ml-10 mr-10">时间</span>
          <el-date-picker
            v-model="date"
            type="datetime"
            placeholder="选择日期时间">
          </el-date-picker>
          <el-button class="ml-10" type="primary" plain>查询</el-button>
          <el-button class="ml-10" type="info" plain>重置</el-button>
        </div>
      </nav>
      <section class="mt-10">
        <el-table :data="tableData" class="table" border style="width: 100%">
          <el-table-column type="index" label="#"></el-table-column>
          <el-table-column prop="date" label="报告日期" show-overflow-tooltip min-width="120" sortable></el-table-column>
          <el-table-column prop="date" label="报告周期" show-overflow-tooltip min-width="120" sortable></el-table-column>
          <el-table-column prop="date" label="文件大小" show-overflow-tooltip min-width="120" sortable></el-table-column>
          <el-table-column show-overflow-tooltip label="菜单" min-width="180" fixed="right">
            <template slot-scope="scope">
              <el-button type="primary" plain>查看</el-button>
              <el-button type="success" plain>下载</el-button>
              <el-button type="danger" plain>删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </section>
      <footer>
        <Pagination></Pagination>
      </footer>
    </div>
    <div class="center-line"></div>
    <div class="right-table">
      <nav class="nav">
        <div>
          <span class="l-text">已关注</span>
          <span class="f-title mr-10 ml-10">筛选</span>
          <el-select v-model="value" class="long" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <el-button class="ml-10" type="primary" plain>查询</el-button>
          <el-button class="ml-10" type="info" plain>重置</el-button>
          <el-button class="ml-10" type="success" plain>要素设置</el-button>
        </div>
      </nav>
      <section class="mt-10">
        <el-table :data="tableData" class="table" border style="width: 100%">
          <el-table-column type="index" label="#" show-overflow-tooltip min-width="120" sortable></el-table-column>
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
          <el-table-column show-overflow-tooltip label="关注" min-width="120" fixed="right">
            <template slot-scope="scope">
              <el-button type="primary" plain>关注</el-button>
            </template>
          </el-table-column>
        </el-table>
      </section>
      <footer>
        <Pagination></Pagination>
      </footer>
    </div>
  </div>
</template>

<script>
import Pagination from '@/components/Pagination'
export default {
  components:{Pagination},
  name: 'Signal-comparison',
  data(){
    return{
      keyword:'',
      options:[],
      value:'',
      tableData:[
        {date:'111'},
        {date:111},
        {date:111},
        {date:111},
        {date:111},
        {date:111},
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.box{
  display: flex;
  justify-content: space-between;
}
.left-table,.right-table{
  width: 49.5%;
}
.center-line{
  width: 10px;
}
.nav{
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.table{
  width: 100%;
  height: calc(100vh - 150px);
}
.el-select.el-select--mini.long{
  width: 400px;
}
</style>
