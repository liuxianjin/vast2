<template>
  <el-pagination
    :current-page="currentPage"
    :page-sizes="[30, 50, 80,100, total>200?200:total]"
    :page-size="30"
    layout="total, sizes, prev, pager, next, jumper"
    :total="total"
    :background="true"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
  />
</template>

<script>
export default {
  name: 'index',
  data(){
    return{
      pageSize:20,
      currentPage:1,
      total:100
    }
  },
  methods:{
    handleSizeChange(val) {
      this.pageSize = val
    },
    handleCurrentChange(val) {
      this.currentPage = val
    }
  }
}
</script>

<style scoped>

</style>
