<template>
  <div class="app-container hidden">
    <nav class="nav">
      <div>
        <span class="f-title mr-10">卫星</span>
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <span class="f-title ml-10 mr-10">转发器</span>
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <span class="f-title ml-10 mr-10">属性筛选</span>
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
      <div>
        <span class="l-text">关注的载波会自动推荐</span>
        <el-button class="ml-10" type="success" plain>自动推荐结果</el-button>
        <el-button class="ml-10" type="info" plain>推荐规则配置</el-button>
      </div>
    </nav>
    <section class="mt-10">
      <el-table :data="tableData" class="table" border style="width: 100%">
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="卫星名称">
                <span>{{ props.row.date }}</span>
              </el-form-item>
              <el-form-item label="波束">
                <span>{{ props.row.date }}</span>
              </el-form-item>
              <el-form-item label="转发器">
                <span>{{ props.row.date }}</span>
              </el-form-item>
              <el-form-item label="符号率">
                <span>{{ props.row.date }}</span>
              </el-form-item>
              <el-form-item label="载波频点">
                <span>{{ props.row.date }}</span>
              </el-form-item>
              <el-form-item label="载波极化方式">
                <span>{{ props.row.date }}</span>
              </el-form-item>
              <el-form-item label="编码方式">
                <span>{{ props.row.date }}</span>
              </el-form-item>
              <el-form-item label="载波类型">
                <span>{{ props.row.date }}</span>
              </el-form-item>
              <el-form-item label="多址方式">
                <span>{{ props.row.date }}</span>
              </el-form-item>
              <el-form-item label="编码方式">
                <span>{{ props.row.date }}</span>
              </el-form-item>
              <el-form-item label="重要性">
                <span>{{ props.row.date }}</span>
              </el-form-item>
              <el-form-item label="更新时间">
                <span>{{ props.row.date }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column type="index" label="#"></el-table-column>
        <el-table-column prop="date" label="卫星名称" show-overflow-tooltip min-width="120" sortable></el-table-column>
        <el-table-column prop="date" label="波束" show-overflow-tooltip min-width="180" sortable></el-table-column>
        <el-table-column prop="date" label="转发器" show-overflow-tooltip min-width="120" sortable></el-table-column>
        <el-table-column prop="date" label="符号率" show-overflow-tooltip min-width="120" sortable></el-table-column>
        <el-table-column prop="date" label="载波频点" show-overflow-tooltip min-width="120" sortable></el-table-column>
        <el-table-column prop="date" label="载波极化方式" show-overflow-tooltip min-width="120" sortable></el-table-column>
        <el-table-column prop="date" label="编码方式" show-overflow-tooltip min-width="120" sortable></el-table-column>
        <el-table-column prop="date" label="载波类型" show-overflow-tooltip min-width="120" sortable></el-table-column>
        <el-table-column prop="date" label="多址方式" show-overflow-tooltip min-width="120" sortable></el-table-column>
<!--        <el-table-column prop="date" label="编码方式" show-overflow-tooltip min-width="120" sortable></el-table-column>-->
<!--        <el-table-column prop="date" label="重要性" show-overflow-tooltip min-width="120" sortable></el-table-column>-->
<!--        <el-table-column prop="date" label="更新时间" show-overflow-tooltip min-width="120" sortable></el-table-column>-->
        <el-table-column show-overflow-tooltip label="菜单" min-width="150">
          <template slot-scope="scope">
            <el-button type="primary" plain>推荐</el-button>
            <el-button type="success" plain>关注</el-button>
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
