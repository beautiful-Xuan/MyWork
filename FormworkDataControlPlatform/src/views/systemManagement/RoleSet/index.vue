<template>
  <div class="limitSet">
      <v-title :title = 'childTitle' :isShow = 'isShow'></v-title>
      <div class="widthSet">
          <div class="limit-box border">
              <div class="i_title"> 当前权限分组：{{limitGroupName}}</div>
              <div class="body">
                  <div class="table-title border i_title">
                    <i class="el-icon-document" style="font-size:20px;"></i>
                    角色列表
                    <el-button class="addLimit" @click="addRole()" size="mini" autofocus>添加角色</el-button>
                  </div>
                  <div>
                    <el-table :data="tableData" border style="width: 100%">
                        <el-table-column fixed prop="address" label="角色名称" width="260"></el-table-column>
                        <el-table-column prop="province?province:'暂无描述'" label="角色描述"> </el-table-column>
                        <el-table-column prop="date" label="成员数量"  width="150"> </el-table-column>
                        <el-table-column prop="name" label="添加时间"  width="150"> </el-table-column>
                        <el-table-column fixed="right"  label="操作"  width="240px">
                        <template slot-scope="scope">
                            <el-button @click="dialogFormVisible2 = true" type="text" size="small">权限设置</el-button>
                            <el-button @click="adjustPerson(scope.$index,scope.row)" type="text" size="small">人员调整</el-button>
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
              <!-- 权限设置 -->
              <div>
                <el-dialog title="权限设置" :visible.sync="dialogFormVisible2" lock-scroll>
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
      isShow: true,
      childTitle: "角色设置",
      limitGroupName: "",
      currentPage4: 2,
      dialogFormVisible1: false, //弹框控制
      dialogFormVisible2: false, //弹框控制
      dialogTitle: "",
      formLabelWidth: "120px",
      editFormOldData: {
        name: "",
        date: ""
      }, //当前编辑行数据
      editFormRowID: null, //当前编辑行标识
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海代峻峰按时进来的",
          address: "上海市普陀区金沙江路"
        },
        {
          date: "2016-05-02",
          name: "王虎",
          province: "上海",
          address: "上海市普陀区金沙江路"
        },
        {
          date: "2016-05-04",
          name: "王小二",
          province: "上海",
          address: "上海市普陀区金沙江路"
        },
        {
          date: "2016-05-01",
          name: "王二",
          province: "上海",
          address: "上海市普陀区金沙江路"
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
    this.limitGroupName = this.$route.params.name;
  },
  methods: {
    enter(date) {
      this.search(date);
      console.log("aaaa");
    },
    search(val) {
      console.log(val);
      // searchLimit(val).then( function(res){
      //   console.log(res)
      //   this.tableData = res
      // })
    },
    addRole() {
      this.dialogTitle = "添加角色";
      this.dialogFormVisible1 = true;
      this.submitType = 1;
    },
    editRole(index, val) {
      this.dialogTitle = "修改角色";
      this.dialogFormVisible1 = true;
      this.submitType = 2; //判断 add | edit
      this.editFormOldData = val; //当前行值
      this.editFormRowID = index; //行标识
    },
    adjustPerson(index,val) {
      console.log(val.name);
      this.$router.push({ name: "adjustPerson", params: { nowPath: val.name,prvePath:this.limitGroupName } });
    },
    submitSet(){
        // 权限设置
        this.dialogFormVisible2 = false
    },
    submitInfo() {
      console.log(typeof this.editFormOldData.name);
      if (
        this.editFormOldData.name != "" &&
        this.editFormOldData.name != "undefined" &&
        this.editFormOldData.name != null
      ) {
        this.dialogFormVisible1 = false;
      }
      var params = {
        name: this.editFormOldData.name,
        date: this.editFormOldData.date
      };

      if (this.submitType == 1) {
        let option = params;
        this.tableData.push(params);
        // addRole(option).then(function(res) {
        //   console.log(res);
        // });
        this.editFormOldData = {};
      } else if (this.submitType == 2) {
        let option = Object.assign(params, { id: this.editFormRowID });
        console.log(option);
        // editRole(option).then(function(res) {
        //   console.log(res);
        // });
        this.editFormOldData = {};
      }
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

