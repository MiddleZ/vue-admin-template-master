<template>
  <el-table :data="tableData" stripe style="width: 100%" prop="titleID">
    <el-table-column prop="category" label="类别" width="180"></el-table-column>

    <el-table-column label="标题">
  <template slot-scope="scope">
    <router-link :to="{ name: 'Detail', params: { id: scope.row.id } }">
      {{ scope.row.titleContent }}
    </router-link>
  </template>
</el-table-column>
    <el-table-column prop="postHeat" label="热度" width="130"></el-table-column>
    <el-table-column label="情绪指数" width="100">
      <template slot-scope="scope">
        <div>{{ scope.row.emotionIndex }}</div>
        <div>{{ scope.row.s2 }}</div>
      </template>
    </el-table-column>
    <el-table-column prop="publishTime" label="日期" width="100"></el-table-column>
  </el-table>
</template>

<script>
import dataapi from '@/api/showdata'
  export default {
    data() {
      return {
        total:0,
        searchModel:{
          pageNo:1,
          pageSize:10,
          UniversityID: Math.floor(Math.random() * 4) + 1
        },
        tableData: []
      }
    },
    methods:{
      getShowData(){
        dataapi.getShowData(this.searchModel).then((res) => {
          this.tableData = res.data.rows;
          console.log("数据",this.tableData);
          this.total = res.data.total;
        })
        .catch(error => {
          console.error(error);
        });
      }
    },
    created() {
      this.getShowData();
    },
    mounted() {
      console.log("---")
      console.log(this.searchModel, this.tableData);
    }
  }
</script>