<template>
<div>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">

  <el-form-item label="查询用户">
    <el-input v-model="formInline.userid" placeholder="输入id"></el-input>
  </el-form-item>

  <el-form-item>
    <el-button type="primary" @click="onSubmit">查询</el-button>
  </el-form-item>

    </el-form>
      <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      label="用户id"
      width="180">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.userid }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="用户名"
      width="180">
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          <p>姓名: {{ scope.row.name }}</p>
          <p>权限: {{ scope.row.address }}</p>
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.username }}</el-tag>
          </div>
        </el-popover>
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <!-- <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button> -->
        <el-button
          size="mini"
           @click="drawer = true">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-drawer
  title="编辑用户信息"
  :visible.sync="drawer"
   direction="btt"
    size="50%"
  :with-header="false">
  <!-- <span>编辑用户信息</span> -->
  <update></update>
</el-drawer>
</div>

</template>


<script>
import userapi from '@/api/userManger';
import update from '../sys/update.vue';

  export default {
  components: { update },
    data() {
      return {
        drawer: false,
        tableData: [],
        formInline: {
          userid: '',
        }
      }
    },
    methods: {
     handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
    searchUser(userid){
        console.log(userid);
    },
      onSubmit(formInline) {
        this.tableData.splice(0,this.tableData.length);
        this.$nextTick(() => {
            //console.log('formInline', this.formInline.userid);
            userapi.searchUser(this.formInline.userid).then((res) => {
                if(res.data == null){
                    this.$message({
                        message: '没有找到用户',
                        type: 'warning'
                    });
                    return;
                }
                this.tableData.push(res.data);
            //console.log("数据",this.tableData);
            })
        });
        }
    }
  }
</script>