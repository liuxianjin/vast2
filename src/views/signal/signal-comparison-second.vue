<template>
  <div class="app-container hidden">
    <el-row class="mb-10">
      <span class="f-title">相同特征</span>
      <el-checkbox v-model="checked" class="ml-10">符号率</el-checkbox>
      <el-checkbox v-model="checked" class="ml-10">调制方式</el-checkbox>
      <el-checkbox v-model="checked" class="ml-10">编码方式</el-checkbox>
      <el-checkbox v-model="checked" class="ml-10">IP地址</el-checkbox>
      <el-checkbox v-model="checked" class="ml-10">多址方式</el-checkbox>
      <el-checkbox v-model="checked" class="ml-10">极化方式</el-checkbox>
      <el-checkbox v-model="checked" class="ml-10">载波类型</el-checkbox>
      <el-checkbox v-model="checked" class="ml-10">带宽</el-checkbox>
    </el-row>
  <div class="box">
    <div class="left-table">
      <nav class="nav">
        <div>
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
          <span class="f-title ml-10 mr-10 ">时间</span>
          <el-date-picker
            v-model="date"
            type="datetime"
            placeholder="选择日期时间">
          </el-date-picker>
          <span class="l-text ml-10">236条</span>
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
        </el-table>
      </section>
    </div>
    <!--    <div class="center-line"></div>-->
    <div class="right-table">
      <nav class="nav">
        <div>
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
          <span class="f-title ml-10 mr-10 ">时间</span>
          <el-date-picker
            v-model="date"
            type="datetime"
            placeholder="选择日期时间">
          </el-date-picker>
          <span class="l-text ml-10">236条</span>
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
        </el-table>
      </section>
    </div>
  </div>


    <div class="mt-10 mb-10">
      <el-row class="mb-10">
        <span class="f-title">载波变化记录：</span>
        <span class="l-text">5555555</span>
      </el-row>
      <el-table :data="tableData" border style="width: 100%" class="footer-table">
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
        <el-table-column prop="date" label="变化状态" show-overflow-tooltip min-width="120" sortable></el-table-column>
        <el-table-column prop="date" label="变化情况" show-overflow-tooltip min-width="120" sortable></el-table-column>
        <el-table-column prop="date" label="更新时间" show-overflow-tooltip min-width="120" sortable></el-table-column>
      </el-table>
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
.box{
  display: flex;
  justify-content: space-between;
}
.left-table,.right-table{
  width: 50%;
  height: 50%;
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
  height:100%;
}
.footer-table{
  width: 100%;
  height:calc(100vh - 510px);
}
.el-select.el-select--mini.shirt{
  width: 120px;
}
</style>
