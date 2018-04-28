<template>
    <div class="mainTemplate">
    <v-nav></v-nav>
        <div class="leftNav">
            <el-row>
                <el-col :span="10">
                    <div class="first_leve_nav" ref='scroll_div1'>
                        <ul>
                            <li @click="openSectionNav(1)">
                                <div>
                                    <img src="../../assets/home.png" alt="">
                                    <span class="l_nav_text">首页</span>
                                    <i v-if="isShowNav == 1" class="el-icon-caret-left"></i>
                                </div>
                            </li>
                            <li @click="openSectionNav(2)">
                                <div>
                                    <img src="../../assets/system.png" alt="">
                                    <span class="l_nav_text">系统</span>
                                    <i v-if="isShowNav == 2" class="el-icon-caret-left"></i>
                                </div>
                            </li>
                        </ul>
                    </div>
                </el-col>
                <el-col :span="14">
                    <div class="second_leve_nav"  ref='scroll_div'>
                        <section v-if="isShowNav == 1">
                            <span class="title">系统首页</span>
                            <ul>
                                <li @click="getTitle('系统首页')">
                                    <router-link to="/index" :active-class="'bgColor'">系统首页</router-link>
                                </li>
                                <li>
                                    <router-link to="/a" :active-class="'bgColor'">账户设置</router-link>
                                </li>
                                <li>
                                    <router-link to="/b" :active-class="'bgColor'">系统信息</router-link>
                                </li>
                                <li>
                                    <router-link to="/c" :active-class="'bgColor'">登录日志</router-link>
                                </li>
                            </ul>
                        </section>
                        <section v-if="isShowNav == 2">
                            <span class="title">系统管理</span>
                            <ul>
                                <li @click="getTitle('部门管理')">
                                    <router-link to="/index/department" :active-class="'bgColor'">部门管理</router-link>
                                </li>
                                <li @click="getTitle('角色管理')">
                                    <router-link to="/index/role" :active-class="'bgColor'">角色管理</router-link>
                                </li>
                                <li @click="getTitle('成员管理')">
                                    <router-link to="/index/member" :active-class="'bgColor'">成员管理</router-link>
                                </li>
                                <li @click="getTitle('权限管理')">
                                    <router-link to="/index/limit" :active-class="'bgColor'">权限管理</router-link>
                                </li>
                            </ul>
                        </section>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div  class="childViewport">
            <!-- <v-title :title = 'childTitle' :go-back = 'goback'></v-title> -->
            <!-- <div class="title">
                {{childTitle}}
                <el-button class="refresh" @click="refresh()" size="mini" icon="el-icon-refresh" autofocus>刷新</el-button>
            </div> -->
            <div class="body" ref="viewH">
                <router-view/>
            </div>
        </div>
    </div>
</template>
<script>
// import title from '@/components/title'
import nav from '@/components/navBar'
export default {
  data() {
    return {
      isShowNav: 1,
    //   childTitle: "系统首页",
      viewHeigh: null,
      goback: false
    };
  },
  mounted() {
    // console.log(this.$refs.viewH.clientHeight)
    // console.log(document.documentElement.clientHeight);
    let scrollDivH = this.$refs.scroll_div.clientHeight;
    let totalH = document.documentElement.clientHeight;
    let viewH = this.$refs.viewH.clientHeight;
    if (scrollDivH < totalH) {
      this.$refs.scroll_div.style.height = totalH + "px";
      this.$refs.scroll_div1.style.height = totalH + "px";
    }
    if (viewH < totalH) {
      this.$refs.viewH.style.height = totalH - 60 + "px";
    }
  },
  methods: {
    openSectionNav(p) {
      if (p == 1) {
        this.isShowNav = 1;
      } else if (p == 2) {
        this.isShowNav = 2;
      } else if (p == 3) {
        this.isShowNav = 3;
      }
    },
    getTitle(t) {
      this.childTitle = t;
    },
    refresh() {
      // this.$router.replace('/')
    }
  },
  components:{
    // 'v-title':title
    'v-nav':nav
  }
};
</script>
<style>
.bgColor{
  background: #fcfcfc;
}
ul {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}
.mainTemplate {
  min-width: 1300px;
  margin-top: 63px;
}
.mainTemplate .leftNav {
  width: 15%;
  min-width: 195px;
  font-size: 14px;
  border-right: 1px solid #efefef;
  box-sizing: border-box;
  position: fixed;
  top: 63px;
}
.mainTemplate .first_leve_nav {
  /* width: 80px; */
  box-sizing: border-box;
  background: #464c5b;
  color: lightgray;
}
.mainTemplate .first_leve_nav li i {
  font-size: 20px;
  color: #e4e4e4;
  position: absolute;
  top: 50%;
  right: -7px;
  transform: translateY(-50%);
}
.mainTemplate .first_leve_nav li {
  line-height: 30px;
  padding: 5px 10px;
  position: relative;
}
.mainTemplate .first_leve_nav li:hover {
  color: #fff;
  cursor: pointer;
}
.mainTemplate .second_leve_nav {
  /* width: 140px; */
  box-sizing: border-box;
  background: #eaedf1;
  height: 100%;
}
.second_leve_nav .title {
  box-sizing: border-box;
  display: block;
  line-height: 50px;
  padding-left: 30px;
  background: #f2f2f2;
  color: gray;
  border-bottom: 1px solid #e4e4e4;
}
.second_leve_nav a {
  display: block;
  text-decoration: none;
  color: #555;
  padding: 10px 10px 10px 30px;
  position: relative;
}

.mainTemplate .second_leve_nav li {
  border-bottom: 1px solid #e4e4e4;
}
.mainTemplate .second_leve_nav li a::before {
  display: inline-block;
  content: " ";
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: #555;
  position: absolute;
  top: 50%;
  left: 22px;
}
.mainTemplate .second_leve_nav li a:hover {
  color: lightseagreen;
  cursor: pointer;
}
.mainTemplate .second_leve_nav li a:hover:before {
  background: lightseagreen;
}
/*右边内容 */
.childViewport {
  width: 85%;
  float: right;
  box-sizing: border-box;
  background: #f9f9f9;
}
.childViewport .body {
  /* padding: 30px 50px; */
  /* width: 80%; */
  /* margin: 0 auto; */
  min-width: 1000px;
  min-height: 900px;
}

</style>
