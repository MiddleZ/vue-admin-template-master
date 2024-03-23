<template>
    <div class="block1">
        <center>
        <span class="demonstration">单选可搜索</span><br>
        <el-cascader
    placeholder="试试搜索"
    v-model="selectedValue"
    :options="AOptions"
    filterable
    @change="handleSelectionChange"></el-cascader>
        </center>
    <el-table :data="tableData" stripe style="width: 100%" prop="titleID">
    <el-table-column prop="category" label="类别" width="180"></el-table-column>
    <el-table-column label="标题">
  <template slot-scope="scope">
    <a :href="'http://' + scope.row.originalLink" target="_blank">
  {{ scope.row.titleContent }}
</a>
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

  <el-pagination
  @current-change="handleCurrentChange"
  :current-page="searchModel.pageNo"
  background
  layout="prev, pager, next"
  :total="1000">
</el-pagination>
</div>
</template>

<script>
import selecrerAPi from '@/api/showselecter';
import listl from './listl.vue';
import dataapi from '@/api/showdata';

export default {
  components: { listl },
  data() {
    return {
      provinces: [],
      schools: [],
      AOptions: [],
      total:0,
        searchModel:{
          pageNo:1,
          pageSize:15,
          UniversityID: Math.floor(Math.random() * 4) + 1
        },
        tableData: [],
    };
  },
methods: {
  handleCurrentChange(pageNo) {
    this.searchModel.pageNo = pageNo;
    this.getShowData();
  },
  getShowData(){
        dataapi.getShowData(this.searchModel).then((res) => {
          this.tableData = res.data.rows;
          console.log("数据",this.tableData);
          this.total = res.data.total;
        })
        .catch(error => {
          console.error(error);
        });
      },
 handleSelectionChange(value) {
    if (value.length === 2) {
      console.log('Selected university:', value[1]);
      // Execute your method here
      this.searchModel.UniversityID = value[1];
      this.searchModel.pageNo = 1;
      console.log('searchModel:', this.searchModel);
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
  getProvinces() {
    selecrerAPi.getSelecter().then((res) => {
      this.provinces = res.data;
      let promises = this.provinces.map(province => {
        return selecrerAPi.getSelecterByProvince(province.provinceID).then((res) => {
          let universities = res.data.map(university => ({
            value: university.universityID,
            label: university.universityName,
          }));
          return {
            value: province.provinceID,
            label: province.provinceName,
            children: universities,
          };
        });
      });
      Promise.all(promises).then(AOptions => {
        this.AOptions = AOptions;
      });
    })
    .catch(error => {
      console.error(error);
    });
  },

},
created() {
  this.getProvinces();
  this.getShowData();
},
};
</script>