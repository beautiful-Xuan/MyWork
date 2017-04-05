<template>
  <nav>
    <!-- 主体切换 -->
    <div class="tab border-1px">
    <div class="tab-item" :class="{active: routePath == 'home'}">
        <router-link to="/home">
          <div>
            <span class="img1">
              <img v-if="routePath == 'home'" src="../../assets/images/home-s.png" alt="">
              <img v-else src="../../assets/images/home.png" alt="">
            </span>
            <span>商家</span>
          </div>
        </router-link>
      </div>
      <div class="tab-item":class="{active: routePath == 'cooperation'}">
        <router-link to="/cooperation">
          <div>
            <span class="img2">
              <img v-if="routePath == 'cooperation'" src="../../assets/images/cooperation-s.png" alt="">
              <img v-else src="../../assets/images/cooperation.png" alt="">
            </span>
            <span>合作</span>
          </div>
        </router-link>
      </div>
      <div class="tab-item" :class="{active: routePath == 'shopping'}">
        <router-link to="/shopping/total">
          <div>
            <span class="img3">
              <img v-if="routePath == 'shopping'" src="../../assets/images/car-s.png" alt="">
              <img v-else src="../../assets/images/car.png" alt="">
            </span>
            <span>商城</span>
          </div>
        </router-link>
      </div>
      <div class="tab-item" :class="{active: routePath == 'user'}">
        <router-link to="/user">
          <div>
            <span class="img4">
              <img v-if="routePath == 'user'" src="../../assets/images/user-s.png" alt="">
              <img v-else src="../../assets/images/user.png" alt="">
            </span>
            <span>用户</span>
          </div>
        </router-link>
      </div>
    </div>
  </nav>
</template>
<script>
  export default {
    data() {
      return {
        routePath: ''
      }
    },
    created () {
      console.log(this.$router.currentRoute)
      this.routePath = this.$router.currentRoute.name
    }
  }
</script>
<style scoped>
  .tab {
    display: flex;
    width: 100%;
    border-top: 1px solid rgba(7,17,27,0.1);
    position: fixed;
    background: #ffffff;
    bottom:0;
    z-index:51;
    padding-top: 5px;
  }

  .tab .tab-item {
    flex: 1;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .tab .tab-item a {
    text-decoration: none;
    display: block;
    font-size: 15px;
    /*color: rgb(77, 85, 93);*/
    color: #757575;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    text-align: center;
  }
  .tab .tab-item span{
    display: inline-block;
    width: 25px;
    height: 25px;
    line-height: 25px;
  }
  .tab-item span:nth-of-type(2){
    width: 100%;
    text-align: center;
    height: 20px;
    line-height: 20px;
    font-size: 12px;
    display: block;
  }
/*选中状态下的字体颜色*/
  .tab .tab-item.active a{
    color: #008643;
  }
  .tab-item img{
    width: 100%;
    height: 100%;
  }
</style>
