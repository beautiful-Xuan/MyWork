<template>
  <div class="home">
    <div class="home-wrapper">
      <header class="home-header">
        <search></search>
        <div class="banner">
          <carousel></carousel>
        </div>
      </header>
      <main class="home-body">
        <div class="tour">
          <div class="menu">
            <a href="#/shopping/tour">
              <img src="../../assets/images/home-tour.png" alt="">
            </a>
          </div>
          <div class="menu-lists">
            <ul>
              <li><a href="#/home/lists/1">时令水果</a></li>
              <li><a href="">休闲零食</a></li>
              <li><a href="">酒水茶饮</a></li>
              <li><a href="">酒水茶饮</a></li>
              <li><a href="">时令水果</a></li>
              <li><a href="">休闲零食</a></li>
            </ul>
          </div>
        </div>
        <div class="food">
          <div class="menu">
            <a href="#/shopping/food">
              <img src="../../assets/images/home-food.png" alt="">
            </a>
          </div>
          <div class="menu-lists">
            <ul>
              <li><a href="">时令水果</a></li>
              <li><a href="">休闲零食</a></li>
              <li><a href="">时令水果</a></li>
              <li><a href="">休闲零食</a></li>
              <li><a href="">时令水果</a></li>
              <li><a href="">休闲零食</a></li>
            </ul>
          </div>
        </div>
        <div class="lodges">
          <div class="menu">
            <a href="#/shopping/lodges">
              <img src="../../assets/images/home-lodges.png" alt="">
            </a>
          </div>
          <div class="menu-lists">
            <ul>
              <li><a href="">时令水果</a></li>
              <li><a href="">休闲零食</a></li>
              <li><a href="">酒水茶饮</a></li>
              <li><a href="">酒水茶饮</a></li>
              <li><a href="">时令水果</a></li>
              <li><a href="">休闲零食</a></li>
              <li><a href="">时令水果</a></li>
              <li><a href="">休闲零食</a></li>
            </ul>
          </div>
        </div>
        <div class="town">
          <div class="menu">
            <a href="#/shopping/town">
              <img src="../../assets/images/home-town.png" alt="">
            </a>
          </div>
          <div class="menu-lists">
            <ul>
              <li><a href="">时令水果</a></li>
              <li><a href="">休闲零食</a></li>
              <li><a href="">时令水果</a></li>
              <li><a href="">休闲零食</a></li>
              <li><a href="">时令水果</a></li>
              <li><a href="">休闲零食</a></li>
            </ul>
          </div>
        </div>
      </main>
      <v-nav></v-nav>
    </div>
  </div>
</template>

<script>
  import nav from '@/components/nav'
  import search from '@/components/search'
  import carousel from '@/components/carousel'
  export default {
    name: 'home',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    components: {
      'v-nav': nav,
      search,
      carousel
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.home{
  height: 100%;
}
a{
  text-decoration: none;
}
ul{
  padding: 0;
  margin: 0;
  list-style: none;
}
.home-wrapper{
  height: 100%;
  display: flex;
  flex-direction: column;
}
.home-header{
  height: 224px;
  padding-bottom: 1.5vw;
  border-bottom: 2px solid #c4c4c4;
}
.banner{
  width: 100%;
  height: 170px;
}
.banner img{
  width: 100%;
  height: 100%;
}
.home-body{
  flex: 1;
  width: 97%;
  margin: 0 auto;
  padding-bottom: 60px;
  border-radius: 5px;
}
.home-body a{
  display: inline-block;
  width: 100%;
  height: 100%;
}
.home-body .menu{
  float: left;
}
.menu-lists{
  width: 59%;
  float: right;
  margin-left: 5px;
}
.menu-lists ul{
  width: 100%;
  height: 100%;
}
.menu-lists ul::after{
  content: '';
  display: block;
  height: 0;
  clear: both;
}
.menu-lists li{
  width: 48.9%;
  margin-bottom: 3px;
  float: left;
  color: #fff;
  text-align: center;
  border-radius: 3px;
}
.menu-lists li:nth-of-type(2n+1){
  margin-right: 3px;
}
.menu-lists li a{
  display: inline-block;
  width: 100%;
  height: 100%;
  color: #fff;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
}
.food::after,.lodges::after,.tour::after,.town::after{
  content: '';
  display: block;
  height: 0;
  clear: both;
}
.tour,.food,.town{
  margin-bottom: 2vw;
  margin-top: 1.5vw;
}
.tour>.menu,.food>.menu,.town>.menu{
  width: 39%;
  height: 39vw;
}
.menu img{
  width: 100%;
  height: 100%;
}
.tour .menu-lists,.food .menu-lists,.town .menu-lists{
  height: 39.2vw;
}
.tour .menu-lists li{
  background: #a7d920;
  height: 31.8%;
}
.food .menu-lists li{
  background: #ffbe60;
  height: 31.8%;
}
.town .menu-lists li {
  background: #FF8880;
  height: 31.8%;
}
.lodges .menu{
  width: 39%;
  height: 50vw;
}
.lodges .menu-lists{
  height: 49.5vw;
}
.lodges .menu-lists li{
  background: #00CFFF;
  height: 24%;
}
</style>