<template>
  <div class="limitSet">
      <v-title :title = 'childTitle' :isShow = 'isShow'></v-title>
      <div class="widthSet">
        
          <div class="limit-box border">
              <div class="i_title"> 当前权限分组：{{prvePath}} <span style="font-weight: normal">—></span> {{nowPath}}</div>
              <div class="adjustPerson-search">
                <div class="searchComponent border">
                  <div class="i_title"><i class="el-icon-search"></i> 
                    筛选条件 
                    <el-button class="searchBtn" type="default" size="mini" @click="search(searchData)">查询结果</el-button>
                  </div>
                  <div class="input">
                        请输入搜索条件：
                        <el-input class="inputWidth" placeholder="可以搜索过滤其他部门角色成员，并添加进来" v-model="searchData" clearable @keyup.enter.native="enter(searchData)">
                        </el-input>
                  </div>
                </div>
              </div>
              <div class="body table_box">
                  <div class="table-title border i_title">
                    <i class="el-icon-document" style="font-size:20px;"></i>
                    角色列表
                    <el-button class="addLimit" @click="addRole()" size="mini" autofocus>显示其他人员</el-button>
                  </div>
                  <div class="table_body">
                    <el-table :data="tableData" border style="width: 100%">
                        <el-table-column fixed prop="name" label="成员名称" width="260"></el-table-column>
                        <el-table-column prop="headImg" label="头像"> </el-table-column>
                        <el-table-column prop="otherInfo" label="其他信息"  width="150"> </el-table-column>
                        <el-table-column prop="addDate" label="添加时间"  width="150"> </el-table-column>
                        <el-table-column fixed="right"  label="操作"  width="240px">
                        <template slot-scope="scope">
                            <el-button @click="editRole(scope.$index,scope.row)" type="text" size="small">编辑</el-button>
                            <el-button @click="remove(scope.$index,tableData)" type="text" size="small">删除</el-button>
                        </template>
                        </el-table-column>
                    </el-table>
                  </div>
              </div>
              <div>
                <el-dialog :title="dialogTitle" :visible.sync="dialogFormVisible1" width="600px">
                    <el-form :model="editFormOldData" :rules="rules" ref="editFormOldData">
                    <el-form-item label="角色名称" :label-width="formLabelWidth" prop="name">
                        <el-input v-model="editFormOldData.name" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="角色描述" :label-width="formLabelWidth">
                        <el-input v-model="editFormOldData.date" auto-complete="off"></el-input>
                    </el-form-item>
                    </el-form>
                    <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisible1 = false">取 消</el-button>
                    <el-button type="primary" @click="submitInfo()">保 存</el-button>
                    </div>
                </el-dialog>
              </div>
              <div class="pageCtrl">
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
          </div>
        <myFooter></myFooter>
      </div>
  </div>
</template>
<script>
import title from "@/components/title";
import footer from "@/components/footer";

const cityOptions = [
  "上海",
  "北京",
  "广州",
  "深圳",
  "湖南",
  "郑州",
  "山西",
  "杭州"
];
export default {
  data() {
    return {
      isShow: true, //title是否显示返回Btn
      searchData: '',
      childTitle: "人员调整",
      prvePath: "",
      nowPath: "",
      currentPage4: 2,
      dialogFormVisible1: false, //弹框控制
      dialogTitle: "",
      formLabelWidth: "120px",
      editFormOldData: {
        name: "",
        date: ""
      }, //当前编辑行数据
      editFormRowID: null, //当前编辑行标识
      tableData: [
        {
          addDate: "2016-05-03",
          name: "王小虎",
          headImg: "上海代峻峰按时进来的",
          otherInfo: "上海市普陀区金沙江路"
        },
        {
          addDate: "2016-05-02",
          name: "王虎",
          headImg: "上海",
          otherInfo: "上海市普陀区金沙江路"
        },
        {
          addDate: "2016-05-04",
          name: "王小二",
          headImg: "上海",
          otherInfo: "上海市普陀区金沙江路"
        },
        {
          addDate: "2016-05-01",
          name: "王二",
          headImg: "上海",
          otherInfo: "上海市普陀区金沙江路"
        }
      ],
      rules: {
        name: [
          { required: true, message: "权限组名称不能为空", trigger: "blur" }
        ]
      }
    };
  },
  created() {
    console.log(this.$route.params.name);
    // this.limitGroupName = this.$route.query.name
    this.prvePath = this.$route.params.prvePath;
    this.nowPath = this.$route.params.nowPath;
    console.log('adjustPerson')
    console.log(this.prvePath)
  },
  methods: {
    enter(date) {
      this.search(date);
      console.log("人员调动");
    },
    search(val) {
      console.log(val);
      // searchLimit(val).then( function(res){
      //   console.log(res)
      //   this.tableData = res
      // })
    },
    editRole(index, val) {
      this.dialogTitle = "修改角色";
      this.dialogFormVisible1 = true;
      this.submitType = 2; //判断 add | edit
      this.editFormOldData = val; //当前行值
      this.editFormRowID = index; //行标识
    },
    addRole(){},
    submitInfo() {
      console.log(typeof this.editFormOldData.name);
      if (this.editFormOldData.name != "" && this.editFormOldData.name != "undefined" && this.editFormOldData.name != null) {
        this.dialogFormVisible1 = false;
      }
      var params = {
        name: this.editFormOldData.name,
        date: this.editFormOldData.date
      };
        // editRole(option).then(function(res) {
        //   console.log(res);
        // });
      this.editFormOldData = {};
    },
    remove(index, data) {
      console.log(data);
      let option = {
        id: index
      };
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
  components: {
    "v-title": title,
    myFooter: footer
  }
};
</script>
<style>
</style>

