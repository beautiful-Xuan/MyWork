<template>
    <div class="systemIndex">
      <v-title :title = 'childTitle'></v-title>
      <div class="widthSet">
        <div class="sysP1">
          <el-row :gutter="20">
            <el-col :span="6">
              <div class="div">
                <div class="p1_img">
                  <img src="../../../assets/i_1.png" alt="">
                </div>
                <div class="p1_right">
                  <p>本周订单总数</p>
                  <p><b>8</b></p>
                </div>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="div">
                <div class="p1_img">
                  <img src="../../../assets/i_1.png" alt="">
                </div>
                <div class="p1_right">
                  <p>本周订单总数</p>
                  <p><b>8</b></p>
                </div>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="div">
                <div class="p1_img">
                  <img src="../../../assets/i_3.png" alt="">
                </div>
                <div class="p1_right">
                  <p>本周订单总数</p>
                  <p><b>8</b></p>
                </div>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="div">
                <div class="p1_img">
                  <img src="../../../assets/i_1.png" alt="">
                </div>
                <div class="p1_right">
                  <p>本周订单总数</p>
                  <p><b>8</b></p>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="sysP2">
          <p class="i_title">待处理事务</p>
          <div>
            <el-row :gutter="20">
              <el-col :span="8">
                <div class="p2_box">
                  <p>
                    <el-row>
                      <el-col :span="20">待付款订单</el-col>
                      <el-col :span="4">(<span class="i_numColor">10</span>)</el-col>
                    </el-row>
                  </p>
                  <p>
                    <el-row>
                      <el-col :span="20">待设计订单</el-col>
                      <el-col :span="4">(<span class="i_numColor">10</span>)</el-col>
                    </el-row>
                  </p>
                  <p>
                    <el-row>
                      <el-col :span="20">待生产订单</el-col>
                      <el-col :span="4">(<span class="i_numColor">10</span>)</el-col>
                    </el-row>
                  </p>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="p2_box">
                  <p>
                    <el-row>
                      <el-col :span="20">待租售订单</el-col>
                      <el-col :span="4">(<span class="i_numColor">10</span>)</el-col>
                    </el-row>
                  </p>
                  <p>
                    <el-row>
                      <el-col :span="20">待发货订单</el-col>
                      <el-col :span="4">(<span class="i_numColor">10</span>)</el-col>
                    </el-row>
                  </p>
                  <p>
                    <el-row>
                      <el-col :span="20">新缺货登记</el-col>
                      <el-col :span="4">(<span class="i_numColor">10</span>)</el-col>
                    </el-row>
                  </p>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="p2_box">
                  <p>
                    <el-row>
                      <el-col :span="20">待处理退货订单</el-col>
                      <el-col :span="4">(<span class="i_numColor">10</span>)</el-col>
                    </el-row>
                  </p>
                  <p>
                    <el-row>
                      <el-col :span="20">未完成订单</el-col>
                      <el-col :span="4">(<span class="i_numColor">10</span>)</el-col>
                    </el-row>
                  </p>
                  <p>
                    <el-row>
                      <el-col :span="20">已完成订单</el-col>
                      <el-col :span="4">(<span class="i_numColor">10</span>)</el-col>
                    </el-row>
                  </p>
                </div>
              </el-col>
            </el-row>
          </div>
        </div>
        <div class="sysP3">
          <p class="i_title">运营快捷入口</p>
          <div>
            <el-row :gutter="20">
              <el-col :span="3">
                <router-link to="#">
                  <div class="p3_href1">
                    <div class="p3_img">
                      <img src="../../../assets/i_1.png" alt="">
                    </div>
                    <p>添加物品</p>
                  </div>
                </router-link>
              </el-col>
              <el-col :span="3">
                <router-link to="#">
                  <div class="p3_href1">
                    <div class="p3_img">
                      <img src="../../../assets/i_3.png" alt="">
                    </div>
                    <p>订单列表</p>
                  </div>
                </router-link>
              </el-col>
              <el-col :span="3">
                <router-link to="#">
                  <div class="p3_href1">
                    <div class="p3_img">
                      <img src="../../../assets/i_1.png" alt="">
                    </div>
                    <p>用户管理</p>
                  </div>
                </router-link>
              </el-col>
              <el-col :span="3">
                <router-link to="#">
                  <div class="p3_href1">
                    <div class="p3_img">
                      <img src="../../../assets/i_1.png" alt="">
                    </div>
                    <p>数据统计</p>
                  </div>
                </router-link>
              </el-col>
              <el-col :span="3">
                <router-link to="#">
                  <div class="p3_href1">
                    <div class="p3_img">
                      <img src="../../../assets/i_1.png" alt="">
                    </div>
                    <p>未读消息</p>
                  </div>
                </router-link>
              </el-col>
              <el-col :span="3">
                <router-link to="#">
                  <div class="p3_href1">
                    <div class="p3_img">
                      <img src="../../../assets/i_1.png" alt="">
                    </div>
                    <p>仓储管理</p>
                  </div>
                </router-link>
              </el-col>
            </el-row>
          </div>
        </div>
        <div class="sysP4">
          <el-row :gutter="20">
            <el-col :span="12">
              <div class="border">
                <p class="i_title">物品近一周总览</p>
                <el-row>
                  <el-col :span="6">
                    <div class="p4_box">
                      <p class="i_numColor">50023</p>
                      <p>出库量</p>
                    </div>
                  </el-col>
                  <el-col :span="6">
                    <div class="p4_box">
                      <p class="i_numColor">36501</p>
                      <p>入库量</p>
                    </div>
                  </el-col>
                  <el-col :span="6">
                    <div class="p4_box">
                      <p class="i_numColor">225</p>
                      <p>库存紧张</p>
                    </div>
                  </el-col>
                  <el-col :span="6">
                    <div class="p4_box">
                      <p class="i_numColor">55003</p>
                      <p>库存总量</p>
                    </div>
                  </el-col>
                </el-row>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="border">
                <p class="i_title">客户总览</p>
                <el-row>
                  <el-col :span="6">
                    <div class="p4_box">
                      <p class="i_numColor">50023</p>
                      <p>今日新增</p>
                    </div>
                  </el-col>
                  <el-col :span="6">
                    <div class="p4_box">
                      <p class="i_numColor">36501</p>
                      <p>昨日新增</p>
                    </div>
                  </el-col>
                  <el-col :span="6">
                    <div class="p4_box">
                      <p class="i_numColor">225</p>
                      <p>本月新增</p>
                    </div>
                  </el-col>
                  <el-col :span="6">
                    <div class="p4_box">
                      <p class="i_numColor">55003</p>
                      <p>客户总数</p>
                    </div>
                  </el-col>
                </el-row>
              </div>
            </el-col>
          </el-row>
        </div>
        
        <div class="sysP5">
          <p class="i_title">订单统计</p>
          <el-row>
            <el-col :span="4">
              <div class="p5_border">
                <div class="top">
                  <p>本月订单总数</p>
                  <p>1000</p>
                  <p>
                    <span class="down" v-if="false">
                      <i class="el-icon-caret-bottom"></i>
                      10% 
                    </span>
                    <span class="up" v-if="true">
                      <i class="el-icon-caret-top"></i>
                      10% 
                    </span>
                    同比上月
                  </p>
                </div>
                <div class="bottom">
                  <p>本周订单总数</p>
                  <p>200</p>
                  <p>
                    <span class="down" v-if="false">
                      <i class="el-icon-caret-bottom"></i>
                      10% 
                    </span>
                    <span class="up" v-if="true">
                      <i class="el-icon-caret-top"></i>
                      10% 
                    </span>
                    同比上周
                  </p>
                </div>
              </div>
            </el-col>
            <el-col :span="20">
              <div class="Order_figure">
                <div class="select_date">
                  dfsdf
                </div>
                <div id="Order_figure"></div>
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="sysP6">
          <p class="i_title">模板统计</p>
          <el-row>
            <el-col :span="4">
              <div class="p5_border">
                <div class="top">
                  <p>本月模板总数</p>
                  <p>1000</p>
                  <p>
                    <span class="down" v-if="false">
                      <i class="el-icon-caret-bottom"></i>
                      10% 
                    </span>
                    <span class="up" v-if="true">
                      <i class="el-icon-caret-top"></i>
                      10% 
                    </span>
                    同比上月
                  </p>
                </div>
                <div class="bottom">
                  <p>本周模板总数</p>
                  <p>200</p>
                  <p>
                    <span class="down" v-if="false">
                      <i class="el-icon-caret-bottom"></i>
                      10% 
                    </span>
                    <span class="up" v-if="true">
                      <i class="el-icon-caret-top"></i>
                      10% 
                    </span>
                    同比上周
                  </p>
                </div>
              </div>
            </el-col>
            <el-col :span="20">
              <div id="formwork_figure"></div>
            </el-col>
          </el-row>
          
        </div>
        <div class="sysP7">
          <myFooter></myFooter>
        </div>
      </div>
  </div>
</template>
<script>
import {order_figure ,formwork_figure} from '@/js/myCharts.js'
import footer from '@/components/footer'
import title from '@/components/title'
import {login} from '@/api/apiList.js'
export default {
  data() {
    return {
      childTitle: '系统首页',
      data:[ 6, 11, 32, 110, 235, 369, 640,
                   1005, 1436, 2063, 3057, 4618, 6444, 9822, 15468, 20434, 24126,
                   27387, 29459, 31056, 31982, 32040, 31233, 29224, 27342, 26662,
                   26956, 27912, 28999, 28965, 27826, 25579, 25722, 24826, 24605,
                   24304, 23464, 23708, 24099, 24357, 24237, 24401, 24344, 23586,
                   22380, 21004, 17287, 14747, 13076, 12555, 12144, 11009, 10950,
                   10871, 10824, 10577, 10527, 10475, 10421, 10358, 10295, 10104]
    };
  },
  mounted(){
    order_figure(this.data)
    formwork_figure(this.data)
    login().then(function(res){
      console.log(res)
    })
  },
  methods:{

  },
  components:{
    'myFooter':footer,
    'v-title': title
  }
};
</script>

<style>
.systemIndex {
  color: #666;
  font-size: 14px;
}
.systemIndex .widthSet>div {
  margin-bottom: 30px;
}
.systemIndex .sysP2,
.sysP3,
.sysP5,
.sysP6 {
  border: 1px solid #e4e4e4;
}
.sysP1 .div {
  border: 1px solid #e4e4e4;
  overflow: hidden;
  padding: 20px;
  box-sizing: border-box;
  position: relative;
  background: #fff;
}
.sysP1 .p1_right {
  box-sizing: border-box;
  height: 50px;
  margin-left: 65px;
}
.sysP1 .p1_right p:first-child {
  font-size: 16px;
}
.sysP1 .p1_right p:last-child {
  font-size: 20px;
  margin-top: 5px;
}
.sysP1 .p1_img {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.sysP2 {
  background: #fff;
}
.systemIndex .i_numColor {
  color: #f04844;
  font-weight: 600;
}
.sysP2 .p2_box {
  padding: 20px 0;
}
.sysP2 .p2_box:first-child {
  padding-left: 20px;
}
.sysP2 .p2_box:last-child {
  padding-right: 20px;
}
.sysP2 .p2_box p {
  line-height: 35px;
  border-bottom: 1px solid #e4e4e4;
  padding-left: 20px;
}
/* .sysP3 */
.sysP3 {
  background: #fff;
  box-sizing: border-box;
}
.sysP3 a {
  display: block;
  color: #666;
  box-sizing: border-box;
  border-right: 1px solid #fff;
  border-left: 1px solid #fff;
}
.sysP3 .p3_href1 {
  height: 150px;
  text-align: center;
  cursor: pointer;
  box-sizing: border-box;
}
.sysP3 a:hover {
  color: lightseagreen;
  background: #f9f9f9;
  border-right-color: #e4e4e4;
  border-left: 1px solid #e4e4e4;
}
.sysP3 .p3_href1 .p3_img {
  width: 100%;
  height: 70%;
  position: relative;
}
.sysP3 .p3_href1 .p3_img img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
/* P4 */
.sysP4 .border{
  border: 1px solid #e4e4e4;
  background: #fff;
}
.sysP4 .p4_box {
  padding: 40px 10px;
}
.sysP4 .p4_box p{
  text-align: center;
  line-height: 40px;
}
.sysP4 .p4_box .i_numColor{
  font-size: 28px;
  font-weight: normal;
}
/* sysP5 */
.sysP5,.sysP6 {
  background: #fff;
}
.p5_border{
  box-sizing: border-box;
  height: 360px;
  border-right: 1px solid #e4e4e4;
  margin-right: 20px;
  padding: 30px 20px;
}
.p5_border p{
  line-height: 25px;
}
.p5_border .top{
  margin-bottom: 20px;
}
.p5_border>div p:nth-of-type(1){
  font-size: 12px;
  color: #888;
}
.p5_border>div p:nth-of-type(2){
  font-size: 28px;
}
.p5_border>div p:nth-of-type(3){
  font-size: 12px;
  color: #cdcdcd;
}
.systemIndex .down{
  display: inline-block;
  color: red;
  margin-right: 5px;
}
.systemIndex .up{
  display: inline-block;
  color: green;
  margin-right: 5px;
}
.Order_figure .select_date{
  height: 60px;
}
</style>
