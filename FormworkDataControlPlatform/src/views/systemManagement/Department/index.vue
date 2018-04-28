<template>
<!-- 部门管理 -->
    <div class="Limit">
      <v-title :title = 'childTitle'></v-title>
      <div class="widthSet">
          <div class="searchComponent border">
            <div class="i_title"><i class="el-icon-search"></i> 
              筛选条件 
              <el-button class="searchBtn" type="default" size="mini" @click="search(searchData)">查询结果</el-button>
            </div>
            <div class="input">
                  请输入搜索条件：
                  <el-input class="inputWidth" placeholder="请输入内容" v-model="searchData" clearable @keyup.enter.native="enter(searchData)">
                  </el-input>
            </div>
        </div>
        <div class="table_box border">
            <div class="i_title"><i class="el-icon-document" style="font-size:20px;"></i> 
               部门列表
               <!-- <button class="addLimit" @click="addLimit()">添加</button> -->
               <el-button class="addLimit" @click="addLimit()" size="mini" autofocus>添加部门</el-button>
               <el-button class="treeView" @click="dialogFormVisible2 = true" size="mini" autofocus>树状图显示</el-button>
            </div>
            <div class="table_body">
                <el-table
                :data="tableData"
                border
                style="width: 100%">
                <el-table-column
                fixed
                prop="name"
                label="部门名称"
                width="150">
                </el-table-column>
                <el-table-column
                prop="prveDepartment"
                label="上级部门">
                </el-table-column>
                <el-table-column
                prop="describe"
                label="部门描述"
                width="150">
                </el-table-column>
                <el-table-column
                prop="num"
                label="直属成员数量"
                width="150">
                </el-table-column>
                <el-table-column
                prop="totalNum"
                label="总成员数量"
                width="150">
                </el-table-column>
                <el-table-column
                prop="nextDepartment"
                label="下级部门数量"
                width="150">
                </el-table-column>
                <el-table-column
                prop="addDate"
                label="添加时间"
                width="150">
                </el-table-column>
                <el-table-column
                fixed="right"
                label="操作"
                width="240px"
                >
                <template slot-scope="scope">
                    <el-button @click="roleSet(scope.$index,scope.row)" type="text" size="small">角色设置</el-button>
                    <!-- <el-button @click="editLimit(scope.$index,scope.row)" type="text" size="small">调整人员</el-button> -->
                    <el-button @click="editLimit(scope.$index,scope.row)" type="text" size="small">编辑</el-button>
                    <el-button @click="remove(scope.$index,tableData)" type="text" size="small">删除</el-button>
                </template>
                </el-table-column>
            </el-table>
            </div>
        </div>
        <div>
          <el-dialog :title="dialogTitle" :visible.sync="dialogFormVisible" width="600px">
            <el-form :model="editFormOldData" :rules="rules" ref="editFormOldData">
              <el-form-item label="部门名称" :label-width="formLabelWidth" prop="name">
                <el-input v-model="editFormOldData.name" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item label="部门描述" :label-width="formLabelWidth">
                <el-input v-model="editFormOldData.date" auto-complete="off"></el-input>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisible = false">取 消</el-button>
              <el-button type="primary" @click="submitInfo()">保 存</el-button>
            </div>
          </el-dialog>
        </div><!-- 权限设置 -->
              <div>
                <el-dialog title="部门列表" :visible.sync="dialogFormVisible2" lock-scroll>
                    <el-form :model="editFormOldData" :rules="rules" ref="editFormOldData">
                      <div style="height:600px;overflow-y:scroll;">
                        <div>hahaha</div>
                        <div>hahaha</div>
                        <div>hahaha</div>
                        <div>hahaha</div>
                        <div>hahaha</div>
                        <div>hahaha</div>
                        <div>hahaha</div>
                        <div>hahaha</div>
                        <div>hahaha</div>
                        <div>hahaha</div>
                        <div>hahaha</div>
                        <div>hahaha</div>
                        <div>hahaha</div>
                        <div>hahaha</div>
                        <div>hahaha</div>
                        <div>hahaha</div>
                        <div>hahaha</div>
                        <div>hahaha</div>
                        <div>hahaha</div>
                        <div>hahaha</div><div>hahaha</div>
                        <div>hahaha</div>
                        <div>hahaha</div>
                        <div>hahaha</div>
                        <div>hahaha</div>
                        <div>hahaha</div>
                        <div>hahaha</div>
                        <div>hahaha</div>
                        <div>hahaha</div>
                        <div>hahaha</div>
                        <div>hahaha</div>
                        <div>hahaha</div>
                        <div>hahaha</div>
                        <div>hahaha</div>
                        <div>hahaha</div>
                        <div>hahaha</div>
                        <div>hahaha</div>
                        <div>hahaha</div>
                        <div>hahaha</div>
                        <div>hahaha</div>
                      </div>
                    </el-form>
                    <div slot="footer" class="dialog-footer">
                    </div>
                </el-dialog>
              </div>
        <div class="pageCtrl border">
            <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-sizes="[100, 200, 300, 400]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="400">
            </el-pagination>
        </div>
        <myFooter></myFooter>
      </div>
    </div>
</template>
<script>
import { login } from "@/api/apiList.js";
import title from '@/components/title'
import footer from '@/components/footer'
export default {
  data() {
    return {
      childTitle:'部门管理',
      submitType: 1,
      dialogTitle:'',
      searchData: null, //要查询的值
      currentPage4: 2,
      dialogFormVisible: false, //弹框控制
      dialogFormVisible2: false, //弹框控制
      formLabelWidth: "120px",
      editFormOldData: {
        name: '',
        date: ''
      }, //当前编辑行数据
      editFormRowID: null, //当前编辑行标识
      tableData: [
        {
          addDate: "2016-05-03",
          name: "王小虎",
          prveDepartment: "上海代峻峰按时进来的",
          describe: "上海市普陀区金沙江路",
          num:5,
          totalNum:10,
          nextDepartment: "上海市普陀区金沙江路"
        },
        {
          addDate: "2016-05-02",
          name: "王虎",
          prveDepartment: "上海",
          describe: "上海市普陀区金沙江路",
          num:5,
          totalNum:15,
          nextDepartment: "上海市普陀区金沙江路"
        },
        {
          addDate: "2016-05-04",
          name: "王小二",
          prveDepartment: "上海",
          describe: "上海市普陀区金沙江路",
          num:5,
          totalNum:6,
          nextDepartment: "上海市普陀区金沙江路"
        }
      ],
      rules: {
          name: [
            { required: true, message: '权限名称不能为空', trigger: 'blur' }
          ]
        }
    };
  },
  methods: {
    enter(date){
      this.search(date)
      console.log('aaaa')
    },
    search(val) {
      console.log(val);
      // searchLimit(val).then( function(res){
      //   console.log(res)
      //   this.tableData = res
      // })
    },
    addLimit(){
      this.dialogTitle = '添加部门'
      this.dialogFormVisible = true;
      this.submitType = 1;
    },
    editLimit(index, val) {
      this.dialogTitle = '修改部门信息'
      this.dialogFormVisible = true;
      this.submitType = 2; //判断 add | edit
      this.editFormOldData = val; //当前行值
      this.editFormRowID = index; //行标识
    },
    submitInfo() {
      console.log(typeof this.editFormOldData.name)
      if(this.editFormOldData.name != '' && this.editFormOldData.name != 'undefined' && this.editFormOldData.name != null){
        this.dialogFormVisible = false ;
      }
      var params = {
        name: this.editFormOldData.name,
        date: this.editFormOldData.date
      }

      if(this.submitType == 1){
        let option = params
        this.tableData.push(params)
        // addLimitGroup(option).then(function(res) {
        //   console.log(res);
        // });
        this.editFormOldData = {}
      }else if(this.submitType == 2){
        let option = Object.assign(params,{id:this.editFormRowID})
        console.log(option)
        // editLimit(option).then(function(res) {
        //   console.log(res);
        // });
        this.editFormOldData = {}
      }
    },
    roleSet(index, val) {
      console.log(index);
      // this.$router.push({path:'/limitSet',query:{name:val.name}})
      this.$router.push({name:'roleSet',params:{name:val.name}})
    },
    remove(index, data) {
      console.log(data);
      let option = {
        id: index
      }
      login(option).then(function(res) {
        console.log(res);
        data.splice(index, 1);
      });
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  },
  components:{
    'v-title':title,
    'myFooter':footer
  }
};
</script>
<style>
</style>
