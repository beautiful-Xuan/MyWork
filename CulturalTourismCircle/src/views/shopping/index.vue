<template>
    <div class="shopping">
        <div class="shop-wrapper">
            <header>
                <search></search>
                <div class="shop-carousel">
                    <carousel></carousel>
                </div>
            </header>
            <div class="shop-body">
                <div class="shop-nav">
                    <div @click="changeStyle(4)" :class="{'color': type === 'tour'}">
                        <img src="../../assets/images/shop-nav-tour.png" alt="">
                        特色旅游
                    </div>
                    <div @click="changeStyle(5)" :class="{'color': type === 'food'}">
                        <img src="../../assets/images/shop-nav-food.png" alt="">
                        特色美食
                    </div>
                    <div @click="changeStyle(6)" :class="{'color': type === 'house'}">
                        <img src="../../assets/images/shop-nav-house.png" alt="">
                        房车出租
                    </div>
                    <div @click="changeStyle(7)" :class="{'color': type === 'town'}">
                        <img src="../../assets/images/shop-nav-town.png" alt="">
                        农家小镇
                    </div>
                </div>
                <div class="shop-sort">
                    <span @click="changeStyle(1)" :class="{'active': num === 1}">综合</span>
                    <span @click="changeStyle(2)" :class="{'active': num === 2}">销量</span>
                    <span @click="changeStyle(3)" :class="{'active': num === 3}">价格</span>
                </div>
                <div class="shop-lists">
                    <ul>
                        <li>
                            <div class="img">
                                <img src="../../assets/images/goods1.png" alt="">
                            </div>
                            <div class="shop-infos">
                                <h2>湘莲 誉为中国南方"人参"</h2>
                                <span class="price">￥ 156</span>
                            </div>
                        </li>
                        <li>
                            <div class="img">
                                <img src="../../assets/images/goods2.png" alt="">
                            </div>
                            <div class="shop-infos">
                                <h2>湘莲 誉为中国南方"人参"</h2>
                                <span class="price">￥ 156</span>
                            </div>
                        </li>
                        <li>
                            <div class="img">
                                <img src="../../assets/images/goods3.png" alt="">
                            </div>
                            <div class="shop-infos">
                                <h2>湘莲 誉为中国南方"人参"</h2>
                                <span class="price">￥ 156</span>
                            </div>
                        </li>
                        <li>
                            <div class="img">
                                <img src="../../assets/images/goods4.png" alt="">
                            </div>
                            <div class="shop-infos">
                                <h2>湘莲 誉为中国南方"人参"</h2>
                                <span class="price">￥ 156</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <v-nav></v-nav>
    </div>
</template>
<script>
    import search from '@/components/search'
    import nav from '@/components/nav'
    import carousel from '@/components/carousel'
    export default {
        name: 'shopping',
        data() {
            return {
                num: 1,
                type: 'tour'
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
                    this.type = 'tour'
                }
                if (code == 5) {
                    this.type = 'food'
                }
                if (code == 6) {
                    this.type = 'house'
                }
                if (code == 7) {
                    this.type = 'town'
                }
            }
        },
        components: {
            'v-nav': nav,
            search,
            carousel
        }
    }
</script>
<style>
/*轮播*/
.mint-swipe {
    width: 100%;
    height: 100%;
}
.mint-swipe-items-wrap {
    width: 100%;
    height: 100%;
}
.mint-swipe-items-wrap .mint-swipe-item,.mint-swipe-items-wrap .mint-swipe-item img {
    width: 100%;
    height: 100%;
}
.mint-swipe-indicators .mint-swipe-indicator {
    background: rgba(0, 134, 67, 0.4);
    opacity: 1;
}
/*shop-nav*/
.shop-nav {
    height: 80px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
}
.shop-nav div{
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 12px;
}
.shop-nav>div>img{
    height: 40px;
    width: 40px;
    margin-bottom: 5px;
}
.color{
    color: #008643;
}

body {
    background: #efefef;
}
.shopping,.shop-wrapper {
    height: 100%;
}
.shop-wrapper {
    display: flex;
    flex-direction: column;
}
.shop header {
    width: 100%;
    height: 214px;
    margin-bottom: 1.5vw;
}
.shop-carousel {
    width: 100%;
    height: 170px;
}
.shop-body {
    flex: 1;
    flex-direction: column;
    padding-bottom: 50px;
}
.shop-sort {
    background: #fff;
    line-height: 26px;
    margin: 0 0 1.5vw 0;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
}
.shop-sort .active {
    color: #000;
    border-bottom: 1px solid #008643;
}
.shop-sort span {
    flex: 1;
    text-align: center;
    display: block;
    line-height: 26px;
    height: 26px;
    font-size: 13px;
    font-family: 'MicrosoftYaHei';
    color: #666;
    box-sizing: border-box;
}
.shop-lists {
    margin: 1vw;
}
.shop-lists ul::after {
    content: '';
    display: block;
    clear: both;
    height: 0;
}
.shop-lists li {
    float: left;
    width: 49%;
    height: 44vw;
    margin-bottom: 1.5vw;
    background: #fff;
}
.shop-lists li:nth-of-type(2n+1){
    margin-right: 1.5vw;
}
.shop-lists .img {
    width: 100%;
    height: 31vw;
}
.shop-lists .img img{
    width: 100%;
    height: 100%;
}
.shop-infos {
    padding: 0 1vw;
}
.shop-infos h2 {
    font-size: 13px;
    font-weight: normal;
    margin: 0;
    padding: 0.5vw 0;
}
.shop-lists .shop-infos span {
    font-size: 14px;
    display: block;
    color: #f9302f;
}
.el-carousel {
    width: 100%;
    height: 100%;
}
.el-carousel__container {
    height: 100%;
}
</style>