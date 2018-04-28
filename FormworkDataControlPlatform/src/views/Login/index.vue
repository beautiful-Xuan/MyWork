<template>
  <div class="login">
      <div class="body">
          <div class="box">
              <div class="center_box">
                  <h1>鈤励云模建筑模架数据管控平台</h1>
                  <address>后台管理系统</address>
                  <div class="login_form">
                    <div>
                        <el-input placeholder="请输入内容" v-model="name" clearable></el-input>
                        <img class="userImg" src="../../assets/user.png" alt="用户头像">
                    </div>
                    <div>
                        <el-input placeholder="请输入内容" v-model="pwd" clearable></el-input>
                        <img class="pwdImg" src="../../assets/pwd.png" alt="密码图片">
                    </div>
                    <el-button type="primary" @click="login">登录</el-button>
                    <div class="message" v-if="isShow" ref="errMessage">
                        <i class="el-icon-info"></i>
                        {{errMessage}}
                    </div>
                  </div>
              </div>
          </div>
            <myFooter></myFooter>
      </div>
  </div>
</template>
<script>
import footer from '@/components/footer'
import { login as loginApi} from '@/api/apiList.js'
export default {
  data() {
    return {
      name: "",
      pwd: "",
      errMessage: 'sss',
      isShow: false
    };
  },
  created(){
      if(sessionStorage.getItem('userName')){
        this.$router.push('/index')
      }
  },
  methods:{
      login(){
          let option = {
              name: this.name,
              pwd: this.pwd
          }
          let _this = this

          if(this.name == '' || this.name == null || this.name == 'undefined'){
              this.errMessage = '请输入用户名'
              console.log(this.errMessage)
              this.isShow = true
          }else if(this.pwd == '' || this.pwd == null || this.pwd == 'undefined'){
              this.errMessage = '请输入密码'
              console.log(this.errMessage)
              this.isShow = true
          }
          else{
            loginApi(option).then( function(res) {
                _this.isShow = false
                console.log(res)
                if(res.status == 500){
                    _this.errMessage = '用户名密码不正确'
                    _this.isShow = true
                }else{
                    sessionStorage.setItem('userName',_this.name)
                    sessionStorage.setItem('pwd',_this.pwd)
                    _this.isShow = false
                    _this.$router.push('/index')
                }
            })

          }
      }
  },
  components:{
    'myFooter':footer
  }
};
</script>
<style>
.login {
  background: #1abc9c;
  height: 100vh;
  width: 100%;
  display: table;
}
.login .body {
  display: table-cell;
  vertical-align: middle;
}
.login .box {
  background: url(../../assets/bg.png) no-repeat;
  background-position: -50px 0;
  height: 800px;
  position: relative;
}
.login .center_box {
  width: 460px;
  height: 400px;
  background: #fff;
  border-radius: 15px;
  box-shadow: 0px 0px 20px 3px #aaa;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.login .center_box h1 {
  text-align: center;
  color: #1abc9c;
  margin: 10px 0;
  margin-top: 40px;
}
.login .center_box address {
  font-style: normal;
  font-size: 24px;
  text-align: center;
  color: #1abc9c;
}
.login .center_box .login_form {
  width: 300px;
  margin: 30px auto;
}
.login .center_box .login_form > div {
  margin-bottom: 20px;
  position: relative;
}
.login .center_box .login_form input {
  padding: 22px 40px;
}
.login .center_box .login_form img {
  position: absolute;
}
.login .center_box .login_form .userImg {
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
}
.login .center_box .login_form .pwdImg {
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
}
.login .center_box .login_form button {
  width: 100%;
  background: #1abc9c;
  font-size: 16px;
}
.login .center_box .login_form button:hover {
  cursor: pointer;
}
.login .center_box .login_form i {
    font-size: 14px;
    margin-right: 5px;
}
.login .center_box .login_form .message {
    margin-top: 10px;
    line-height: 35px;
    border-radius: 5px;
    background: #666;
    color: #fff;
    padding-left: 20px;
    font-size: 12px;
}
</style>

