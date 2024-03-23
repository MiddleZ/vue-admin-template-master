<template>
    <el-main>
      <el-table :data="tableData">
        <el-table-column prop="date" label="日期" width="120">
        </el-table-column>
        <el-table-column prop="name" label="标签" width="120">
        </el-table-column>
        <el-table-column prop="address" label="标题">
        </el-table-column>
      </el-table>
    </el-main>
</template>

<script>
  export default {
    data() {
      const item = {
        date: '2016-05-02',
        name: '标签',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        tableData: Array(10).fill(item)
      }
    }
  };
</script>