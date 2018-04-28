<template>
    <div class="addMember">
      <v-title :title = 'childTitle' :isShow='true'></v-title>
      <div class="widthSet">
        <div class="searchComponent border">
            <div class="i_title">
              添加成员 
            </div>
        </div>
        <div class="form_box">
            <div>
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" label-position="right" class="demo-ruleForm">
                    <el-form-item label="成员名称：" prop="name">
                        <el-input v-model="ruleForm.name"></el-input>
                    </el-form-item>
                    <el-form-item label="活动名称：" prop="name">
                        <el-input v-model="ruleForm.name"></el-input>
                    </el-form-item>
                    <el-form-item label="邮箱地址：" prop="name">
                        <el-input v-model="ruleForm.name"></el-input>
                    </el-form-item>
                    <el-form-item label="所属部门：" prop="region">
                        <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                    <address>拉三等奖弗拉丁按时砥砺奋进拉时代峻峰阿里斯顿放假啊拉萨的分解机 </address>
                    <el-form-item label="登录密码：" prop="name">
                        <el-input v-model="ruleForm.name"></el-input>
                    </el-form-item>
                    <el-form-item label="确认密码：" prop="name">
                        <el-input v-model="ruleForm.name"></el-input>
                    </el-form-item>
                    <el-form-item label="备注信息：">
                        <el-input type="textarea" v-model="ruleForm.desc" rows="8" placeholder="请输入备注信息"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                        <el-button @click="resetForm('ruleForm')">重置</el-button>
                    </el-form-item>
                </el-form>
            </div>
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
      childTitle:'添加成员',
      ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
          ],
          resource: [
            { required: true, message: '请选择活动资源', trigger: 'change' }
          ]
        }
    };
  },
  created(){
      console.log(this.$route.params.name)
      let tap = this.$route.params.name
      if(tap){
          this.childTitle = '编辑成员'
      }
  },
  methods: {
    submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
  },
  components:{
    'v-title':title,
    'myFooter':footer
  }
};
</script>
<style>
.addMember .form_box{
    border: 1px solid #e4e4e4;
    border-top: none;
    background: #fff;
}
.addMember .form_box>div{
    width: 500px;
    margin: 0px auto;
    padding: 50px 0;
}
.addMember .form_box input {
    width: 200px;
}
.addMember .form_box address {
    font-style: normal;
    color: #999;
    font-size: 12px;
    margin-top: -10px;
    margin-left: 100px;
    margin-bottom: 20px;
}
</style>
