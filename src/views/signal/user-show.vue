<template>
  <div class="app-container hidden">
    <nav class="nav">
      <div>
        <span class="f-title mr-10">国家地区</span>
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <span class="f-title ml-10 mr-10">用户性质</span>
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <span class="f-title ml-10 mr-10">组织机构</span>
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <span class="f-title ml-10 mr-10">用户属性</span>
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <el-input v-model="keyword" class="ml-10 input" placeholder="请输入内容"></el-input>
        <el-checkbox v-model="checked" class="ml-10">仅关注</el-checkbox>
        <el-button class="ml-10" type="primary" plain>查询</el-button>
        <el-button class="ml-10" type="info" plain>重置</el-button>
      </div>
    </nav>
    <section class="mt-10">
      <el-table :data="tableData" class="table" border style="width: 100%">
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
    <footer>
      <Pagination></Pagination>
    </footer>
  </div>
</template>

<script>
import Pagination from '@/components/Pagination'
export default {
  components:{Pagination},
  name: 'similarity-push',
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
.nav{
  display: flex;
  justify-content: space-between;
}
.table{
  height: calc(100vh - 150px);
}

</style>
