<template>
    <div class="Limit">
      <v-title :title = 'childTitle'></v-title>
      <div class="widthSet">
        <div class="searchComponent border">
            <div class="i_title"><i class="el-icon-search"></i> 
              筛选条件 
              <el-button class="searchBtn" type="default" size="mini" @click="search()">查询结果</el-button>
            </div>
            <div class="input">
                <div>
                  输入搜索：
                  <el-input class="memberInputWidth" placeholder="请输入用户名" v-model="selectMember" clearable @keyup.enter.native="enter(searchData)">
                  </el-input>
                </div>

                <div>
                  所属部门：
                  <el-select v-model="selectDepartment" clearable placeholder="请选择">
                    <el-option
                        v-for="item in departmentData"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                    </el-option>
                  </el-select>
                </div>
                <div>
                  角色：
                  <el-select v-model="selectRole" clearable placeholder="请选择">
                    <el-option
                        v-for="item in departmentData"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                    </el-option>
                  </el-select>
                </div>

            </div>
        </div>
        <div class="table_box border">
            <div class="i_title"><i class="el-icon-document" style="font-size:20px;"></i> 
               成员列表
               <!-- <button class="addLimit" @click="addLimit()">添加</button> -->
               <el-button class="addLimit" @click="addMember()" size="mini" autofocus>添加成员</el-button>
            </div>
            <div class="table_body">
                <el-table
                  :data="tableData"
                  border
                  style="width: 100%">
                  <el-table-column
                  fixed
                  prop="address"
                  label="成员账号"
                  width="150">
                  </el-table-column>
                  <el-table-column
                  prop="province"
                  label="名称">
                  </el-table-column>
                  <el-table-column
                  prop="date"
                  label="所属部门"
                  width="150">
                  </el-table-column>
                  <el-table-column
                  prop="name"
                  label="角色"
                  width="150">
                  </el-table-column>
                  <el-table-column
                  prop="name"
                  label="添加时间"
                  width="150">
                  </el-table-column>
                  <el-table-column
                  prop="name"
                  label="最后登录时间"
                  width="150">
                  </el-table-column>
                  <el-table-column
                  fixed="right"
                  label="操作"
                  width="240px"
                  >
                  <template slot-scope="scope">
                      <el-button @click="dialogFormVisible = true" type="text" size="small">权限设置</el-button>
                      <el-button @click="editMemberInfo(scope.$index,scope.row)" type="text" size="small">编辑</el-button>
                      <el-button @click="remove(scope.$index,tableData)" type="text" size="small">删除</el-button>
                  </template>
                  </el-table-column>
              </el-table>
            </div>
        </div>
        <div>
          <el-dialog title="权限设置" :visible.sync="dialogFormVisible" width="600px">
            <el-form :model="editFormOldData" :rules="rules" ref="editFormOldData">
              <el-form-item label="权限组名称" :label-width="formLabelWidth" prop="name">
                <el-input v-model="editFormOldData.name" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item label="权限组描述" :label-width="formLabelWidth">
                <el-input v-model="editFormOldData.date" auto-complete="off"></el-input>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisible = false">取 消</el-button>
              <el-button type="primary" @click="submitInfo()">保 存</el-button>
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
      childTitle:'成员管理',
      submitType: 1,
      selectMember: '', //要查询的值
      selectDepartment:'',
      selectRole:'',
      departmentData: [{
          value: '选项1',//标识
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
      currentPage4: 2,
      dialogFormVisible: false, //弹框控制
      formLabelWidth: "120px",
      editFormOldData: {
        name: '',
        date: ''
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
            { required: true, message: '权限组名称不能为空', trigger: 'blur' }
          ]
        }
    };
  },
  methods: {
    enter(date){
      this.search(date)
      console.log('aaaa')
    },
    search() {
      console.log(this.selectMember);
      console.log(this.selectDepartment);
      console.log(this.selectRole);
      // searchLimit(val).then( function(res){
      //   console.log(res)
      //   this.tableData = res
      // })
    },
    addMember(){
    //   添加成员
      this.$router.push({name:'addMember'})
    },
    editMemberInfo(index, val) {
      this.editFormOldData = val; //当前行值
      this.editFormRowID = index; //行标识
      this.$router.push({name:'addMember',params:{name:val.name}})
    },
    setLimit(index, val) {
      console.log(index);
      // this.$router.push({path:'/limitSet',query:{name:val.name}})
      this.$router.push({name:'limitSet',params:{name:val.name}})
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
.input>div{
  display: inline-block;
  margin-right: 30px;
}
.memberInputWidth{
  width: 200px;
}
</style>
