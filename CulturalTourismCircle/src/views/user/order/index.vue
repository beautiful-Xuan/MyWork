<template>
    <div class="order">
        <header>我的订单</header>
        <div class="order-body">
            <div class="order-select">
                <span @click="changeStyle(1)" :class="{'active': num === 1}">全部</span>
                <span @click="changeStyle(2)" :class="{'active': num === 2}">待付款</span>
                <span @click="changeStyle(3)" :class="{'active': num === 3}">待发货</span>
                <span @click="changeStyle(4)" :class="{'active': num === 4}">待评价</span>
            </div>
            <div class="order-lists">
                <div v-if="status" class="order-empty">
                    <div>暂无记录</div>
                    <img src="../../../assets/images/order-empty.png" alt="">
                </div>
                <div v-else class="order-not-null">
                    <ul>
                        <li class="order-item">
                            <div class="top">
                                <img src="../../../assets/images/goods2.png" alt="">
                                <div class="top-r">
                                    <p class="title">湘莲 誉为中国南方"人参"</p>
                                    <p class="num">
                                        <span>净含量：500g</span>
                                        <span>x1</span>
                                    </p>
                                    <p class="price">￥156</p>
                                </div>
                            </div>
                            <div class="bottom">
                                <p class="total">共1件商品 合计：￥156</p>
                                <div class="status">
                                    <div>去付款</div>
                                    <!--<div>提醒发货</div>
                                    <div>去评价</div>-->
                                </div>
                            </div>
                        </li>
                        <li class="order-item">
                            <div class="top">
                                <img src="../../../assets/images/goods2.png" alt="">
                                <div class="top-r">
                                    <p class="title">湘莲 誉为中国南方"人参"</p>
                                    <p class="num">
                                        <span>净含量：500g</span>
                                        <span>x1</span>
                                    </p>
                                    <p class="price">￥156</p>
                                </div>
                            </div>
                            <div class="bottom">
                                <p class="total">共1件商品 合计：￥156</p>
                                <div class="status">
                                    <!--<div>去付款</div>
                                    <div>提醒发货</div>-->
                                    <div>去评价</div>
                                </div>
                            </div>
                        </li>
                        <li class="order-item">
                            <div class="top">
                                <img src="../../../assets/images/goods2.png" alt="">
                                <div class="top-r">
                                    <p class="title">湘莲 誉为中国南方"人参"</p>
                                    <p class="num">
                                        <span>净含量：500g</span>
                                        <span>x1</span>
                                    </p>
                                    <p class="price">￥156</p>
                                </div>
                            </div>
                            <div class="bottom">
                                <p class="total">共1件商品 合计：￥156</p>
                                <div class="status">
                                    <div>去付款</div>
                                    <!--<div>提醒发货</div>
                                    <div>去评价</div>-->
                                </div>
                            </div>
                        </li>
                        <li class="order-item">
                            <div class="top">
                                <img src="../../../assets/images/goods2.png" alt="">
                                <div class="top-r">
                                    <p class="title">湘莲 誉为中国南方"人参"</p>
                                    <p class="num">
                                        <span>净含量：500g</span>
                                        <span>x1</span>
                                    </p>
                                    <p class="price">￥156</p>
                                </div>
                            </div>
                            <div class="bottom">
                                <p class="total">共1件商品 合计：￥156</p>
                                <div class="status">
                                    <div>去付款</div>
                                    <!--<div>提醒发货</div>
                                    <div>去评价</div>-->
                                </div>
                            </div>
                        </li>
                        <li class="order-item">
                            <div class="top">
                                <img src="../../../assets/images/goods2.png" alt="">
                                <div class="top-r">
                                    <p class="title">湘莲 誉为中国南方"人参"</p>
                                    <p class="num">
                                        <span>净含量：500g</span>
                                        <span>x1</span>
                                    </p>
                                    <p class="price">￥156</p>
                                </div>
                            </div>
                            <div class="bottom">
                                <p class="total">共1件商品 合计：￥156</p>
                                <div class="status">
                                    <!--<div>去付款</div>
                                    <div>提醒发货</div>-->
                                    <div>去评价</div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'order',
    data () {
        return {
            num: 1,
            status: false
        }
    },
    methods: {
        changeStyle(code) {
            if (code == 1) {
                this.num = 1
            }
            if (code == 2) {
                this.num = 2
            }
            if (code == 3) {
                this.num = 3
            }
            if (code == 4) {
                this.num = 4
            }
        }
    }
}
</script>
<style>
.order>header {
    background: #fff;
    width: 100%;
    line-height: 44px;
    text-align: center;
    font-size: 15px;
    border-bottom: 1px solid #cdcdcd;
}
.order {
    height: 100%;
    display: flex;
    flex-direction: column;
}
.order-body {
    flex: 1;
}
.order-select {
    background: #fff;
    line-height: 30px;
    margin: 0 0 1.5vw 0;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    font-size: 14px;
}
.order-select .active {
    color: #000;
    border-bottom: 1px solid #008643;
}
.order-select span {
    flex: 1;
    text-align: center;
    display: block;
    height: 30px;
    font-size: 13px;
    font-family: 'MicrosoftYaHei';
    color: #666;
    box-sizing: border-box;
}
.order-lists {
    margin-bottom: 20px;
}
.order-empty {
    height: 30vh;
    display: flex;
    flex-direction: column-reverse;
    justify-content: bottom;
    align-items: center;
}
.order-empty>div {
    margin-left: 10px;
    color: #757575;
}
.order-empty img {
    width: 70px;
    height: 70px;
    margin-bottom: 10px;
}
/*列表*/
.order-item {
    background: #fff;
    margin: 1.5vw;
}
.order-item .top {
    border-bottom: 1px solid #dfdfdf;
    display: flex;
}
.order-item .top img {
    width: 70px;
    height: 68px;
    margin-right: 10px;
}
.top .top-r {
    flex: 1;
    font-size: 14px;
    padding-top: 5px;
    padding-right: 5px;
}
.top p {
    line-height: 20px;
}
.num {
    color: #757575;
    font-size: 12px;
}
.num span:nth-of-type(2) {
    float: right;
}
.num::after {
    content: '';
    display: block;
    clear: both;
    height: 0;
}
.price {
    color: #f9302f
}
.order-item .bottom {
    text-align: right;
    padding-right: 5px;
}
.total {
    font-size: 13px;
}
.status {
    padding: 5px 0;
}
.status>div {
    float: right;
    margin-left: 10px;
    font-size: 12px;
    color: #f9302f;
    border: 1px solid #f9302f;
    border-radius: 5px;
    padding: 2px 10px;
}
.status::after{
    content: '';
    display: block;
    clear: both;
    height: 0;
}
</style>