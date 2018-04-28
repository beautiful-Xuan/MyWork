<template>
  <div class="parentNav">
      <v-nav></v-nav>
        <div class="leftNav">
         <el-row>
            <el-col :span="2">
                <div class="first_leve_nav" ref='scroll_div1'>
                    <ul>
                        <li @click="openSectionNav(1)">
                            <div>
                                <img src="../../assets/home.png" alt="">
                                <router-link :active-class="'parentNavColor'"  to="/home" class="l_nav_text">首页</router-link>
                                <i v-if="isShowNav == 1" class="el-icon-caret-left"></i>
                            </div>
                        </li>
                        <li @click="openSectionNav(2)">
                            <div>
                                <img src="../../assets/system.png" alt="">
                                <router-link :active-class="'parentNavColor'" to="/system" class="l_nav_text">系统</router-link>
                                <i v-if="isShowNav == 2" class="el-icon-caret-left"></i>
                            </div>
                        </li>
                    </ul>
                </div>
            </el-col>
            <el-col :span="22">
                <div class="firstView"  ref='scroll_div'>
                    <router-view></router-view>
                </div>
            </el-col>
        </el-row>
        </div>
    </div>
</template>
<script>
// import title from '@/components/title'
import nav from "@/components/navBar";
export default {
  data() {
    return {
      isShowNav: 1,
      //   childTitle: "系统首页",
      goback: false
    };
  },
  mounted() {},
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
  components: {
    // 'v-title':title
    "v-nav": nav
  }
};
</script>
<style>
.parentNavColor {
  color: #fff;
}
.bgColor {
  background: #fcfcfc;
}
ul {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}
.parentNav {
  min-width: 1300px;
  margin-top: 63px;
}
.parentNav .leftNav {
  font-size: 14px;
  border-right: 1px solid #efefef;
  box-sizing: border-box;
}
.parentNav .first_leve_nav {
  width: 80px;
  position: fixed;
  min-height: 1000px;
  box-sizing: border-box;
  background: #464c5b;
  color: lightgray;
}
.first_leve_nav a {
  display: inline-block;
  text-decoration: none;
  color: #e4e4e4;
}
.parentNav .first_leve_nav li i {
  font-size: 20px;
  color: #e4e4e4;
  position: absolute;
  top: 50%;
  right: -7px;
  transform: translateY(-50%);
}
.parentNav .first_leve_nav li {
  line-height: 30px;
  padding: 5px 10px;
  position: relative;
}
.parentNav .first_leve_nav li:hover {
  color: #fff;
  cursor: pointer;
}

.firstView {
    margin-left: 80px;
}
</style>