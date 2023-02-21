/*
 * @Author: lxj
 * @Date: 2022/2/17/20:51
 */
<!--卫星底数-->
<template>
  <div class="app-container hidden">
    <nav class="nav">
      <div>
        <span class="f-title mr-10">卫星</span>
        <el-input v-model="keyword" placeholder="请输入内容" class="input"></el-input>
        <el-button class="ml-10" type="primary" plain>查询</el-button>
        <el-button class="ml-10" type="info" plain>重置</el-button>
      </div>
      <div>
        <el-button class="ml-10" type="primary" plain>自定义列</el-button>
        <el-button class="ml-10" type="success" plain>添加星体</el-button>
      </div>
    </nav>
    <section class="mt-10">
      <el-table :data="tableData" class="table" border style="width: 100%">
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="ID">
                <span>{{ props.row.date }}</span>
              </el-form-item>
              <el-form-item label="卫星编号">
                <span>{{ props.row.date }}</span>
              </el-form-item>
              <el-form-item label="卫星中文名">
                <span>{{ props.row.date }}</span>
              </el-form-item>
              <el-form-item label="卫星英文名">
                <span>{{ props.row.date }}</span>
              </el-form-item>
              <el-form-item label="卫星别名">
                <span>{{ props.row.date }}</span>
              </el-form-item>
              <el-form-item label="卫星状态字">
                <span>{{ props.row.date }}</span>
              </el-form-item>
              <el-form-item label="NORAD卫星国际编码">
                <span>{{ props.row.date }}</span>
              </el-form-item>
              <el-form-item label="发射时间">
                <span>{{ props.row.date }}</span>
              </el-form-item>
              <el-form-item label="频率计划">
                <span>{{ props.row.date }}</span>
              </el-form-item>
              <el-form-item label="频段">
                <span>{{ props.row.date }}</span>
              </el-form-item>
              <el-form-item label="用途分类">
                <span>{{ props.row.date }}</span>
              </el-form-item>
              <el-form-item label="用户分类">
                <span>{{ props.row.date }}</span>
              </el-form-item>
              <el-form-item label="国家代码">
                <span>{{ props.row.date }}</span>
              </el-form-item>
              <el-form-item label="运营商编号">
                <span>{{ props.row.date }}</span>
              </el-form-item>
              <el-form-item label="承包商编号">
                <span>{{ props.row.date }}</span>
              </el-form-item>
              <el-form-item label="轨道分类">
                <span>{{ props.row.date }}</span>
              </el-form-item>
              <el-form-item label="近地点">
                <span>{{ props.row.date }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column prop="date" label="ID" show-overflow-tooltip min-width="120" sortable></el-table-column>
        <el-table-column prop="date" label="卫星编号" show-overflow-tooltip min-width="120" sortable></el-table-column>
        <el-table-column prop="date" label="卫星中文名" show-overflow-tooltip min-width="120" sortable></el-table-column>
        <el-table-column prop="date" label="卫星英文名" show-overflow-tooltip min-width="120" sortable></el-table-column>
        <el-table-column prop="date" label="卫星别名" show-overflow-tooltip min-width="120" sortable></el-table-column>
        <el-table-column prop="date" label="卫星状态字" show-overflow-tooltip min-width="120" sortable></el-table-column>
        <el-table-column prop="date" label="NORAD卫星国际编码" show-overflow-tooltip min-width="180" sortable></el-table-column>
        <el-table-column prop="date" label="频率计划" show-overflow-tooltip min-width="120" sortable></el-table-column>
        <el-table-column prop="date" label="发射时间" show-overflow-tooltip min-width="120" sortable></el-table-column>
<!--        <el-table-column prop="date" label="频段" show-overflow-tooltip min-width="120" sortable></el-table-column>-->
<!--        <el-table-column prop="date" label="用途分类" show-overflow-tooltip min-width="120" sortable></el-table-column>-->
<!--        <el-table-column prop="date" label="用户分类" show-overflow-tooltip min-width="120" sortable></el-table-column>-->
<!--        <el-table-column prop="date" label="国家代码" show-overflow-tooltip min-width="120" sortable></el-table-column>-->
<!--        <el-table-column prop="date" label="运营商编号" show-overflow-tooltip min-width="120" sortable></el-table-column>-->
<!--        <el-table-column prop="date" label="承包商编号" show-overflow-tooltip min-width="120" sortable></el-table-column>-->
<!--        <el-table-column prop="date" label="轨道分类" show-overflow-tooltip min-width="120" sortable></el-table-column>-->
<!--        <el-table-column prop="date" label="近地点" show-overflow-tooltip min-width="120" sortable></el-table-column>-->
        <el-table-column show-overflow-tooltip label="菜单" min-width="150">
          <template slot-scope="scope">
            <el-button type="info" icon="el-icon-document-copy" circle></el-button>
            <el-button type="primary" icon="el-icon-edit" circle></el-button>
            <el-button type="danger" icon="el-icon-delete" circle></el-button>
          </template>
        </el-table-column>
      </el-table>
    </section>
    <footer>
      <Pagination></Pagination>
    </footer>
  </div>
</template>

<script>
import Pagination from '@/components/Pagination'
export default {
  components:{Pagination},
  data() {
    return {
      keyword:'',
      tableData:[
        {date:'111'},
        {date:111},
        {date:111},
        {date:111},
        {date:111},
        {date:111},
      ]
    }
  },
  watch: {

  },

  methods: {

  }
}
</script>

<style scoped lang="scss" >
.nav{
  display: flex;
  justify-content: space-between;
}
.table{
  height: calc(100vh - 150px);
}

</style>

<style>

</style>

