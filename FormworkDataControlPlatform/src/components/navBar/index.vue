<template>
    <div class="navBar_box">
        <nav>
            <div class="left_box">
                <div>
                    <img src="../../assets/logo.png" alt="">
                </div>
                <p>鈤励云模建筑模架数据管控平台 - 后天管理系统</p>
            </div>
            <div class="right_box">
                <ul>
                    <li title="用户信息">
                        <div class="user_box">
                            <div class="user_img">
                                <img src="../../assets/defaultHimg.png" alt="">
                            </div>
                            <span>admin</span>
                        </div>
                        <section>
                            hahah
                        </section>
                    </li>
                    <li @click="goHome" title="主页">
                        <div class="home_box">
                            <div class="home_img">
                                <img src="../../assets/nav_home.png" alt="">
                            </div>
                        </div>
                    </li>
                    <li @click="signOut" title="退出">
                        <div>
                            <div class="signOut_img">
                                <img src="../../assets/sign_out.png" alt="退出">
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>
<script>
import '@/components/navBar/index.css'
export default {
  data() {
    return {
      msg: "test"
    };
  },
  methods: {
      goHome(){
          console.log('zhuye')
      },
      signOut(){
          console.log('退出')
      }
  }
};
</script>
<style scoped>

</style>
