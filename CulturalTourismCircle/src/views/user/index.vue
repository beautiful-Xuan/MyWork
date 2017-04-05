<template>
    <div class="user">
        <div class="user-wrapper">
            <header>
                <div class="avatar">
                    <img src="../../assets/images/avatar.png" alt="">
                </div>
                <div class="user-infos">
                    <h2>文旅界</h2>
                    <p>
                        会员ID：55555555
                    </p>
                    <p>
                        级别： 一等
                    </p>
                </div>
            </header>
            <div class="user-body">
                <div class="select">
                    <div>
                        <img src="../../assets/images/obligation.png" alt="">
                        待付款
                    </div>
                    <div>
                        <img src="../../assets/images/sendOut.png" alt="">
                        待发货
                    </div>
                    <div>
                        <img src="../../assets/images/receipt.png" alt="">
                        待收货
                    </div>
                    <div>
                        <img src="../../assets/images/evaluate.png" alt="">
                        待评价
                    </div>
                </div>
                <div class="user-lists">
                    <ul>
                        <li><a href="">申请经销商</a></li>
                        <li><a href="">我的推广海报</a></li>
                        <li><a href="#/user/account">账户余额</a></li>
                        <li><a href="#/user/order">订单列表</a></li>
                        <li><a href="#/user/strategy">我的战略</a></li>
                        <li><a href="#/user/set">设置</a></li>
                    </ul>
                </div>
            </div>
            <v-nav></v-nav>
        </div>
    </div>
</template>
<script>
import nav from '@/components/nav'
    export default {
        name: 'user',
        components: {
            'v-nav': nav
        }
    }
</script>
<style>
.user,.user-wrapper {
    height: 100%;
}
.user header {
    width: 100%;
    height: 40vw;
    background: #008844;
    position: relative;
}
.user header::after {
    content: '';
    display: block;
    clear: both;
    height: 0;
}
.user header div {
    position: absolute;
}
.user .avatar {
    width: 18vw;
    height: 18vw;
    border-radius: 50%;
    left: 10px;
    top: calc(50% - 9vw);
}
.user .avatar img {
    width: 100%;
    height: 100%;
}
.user .user-infos {
    left: calc(18vw + 40px);
    top: calc(50% - 9vw);
}
.user-infos h2{
    color: #fff;
    font-weight: normal;
    font-size: 20px;
}
.user-infos p {
    line-height: 30px;
    padding-left: 25px;
    position: relative;
    color: #fff;
}
.user-infos p:nth-of-type(1)::before{
    content: '';
    display: block;
    width: 15px;
    height: 15px;
    position: absolute;
    background: url(../../assets/images/vip.png) no-repeat;
    background-size: cover;
    left: 0;
    top: calc(50% - 8px);
}
.user-infos p:nth-of-type(2)::before{
    content: '';
    display: block;
    width: 15px;
    height: 15px;
    position: absolute;
    background: url(../../assets/images/vipLevel.png) no-repeat;
    background-size: cover;
    left: 0;
    top: calc(50% - 8px);
}
.user-body .select {
    height: 69px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 10px;
    margin-bottom: 10px;
}
.user-body .select div{
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 12px;
}
.user-body .select>div>img{
    height: 22px;
    width: 22.5px;
    margin: 10px 0;
}
.user-lists ul{
    width: 100%;
    background: #fff;
    line-height: 40px;
}
.user-lists ul>li>a {
    display: block;
    height: 100%;
    width: 100%;
    font-size: 13px;
    padding-left: 15px;
    color: #022222;
    position: relative;
}
.user-lists ul>li>a::after{
    content: '';
    display: block;
    width: 10px;
    height: 10px;
    border-top: 1px solid #757575;
    border-right: 1px solid #757575;
    transform: rotate(45deg) translate(-50%,-20%);
    position: absolute;
    right: 10px;
    top: 50%;
}
.user-lists>ul>li:nth-of-type(2n){
    border-top: 1px solid #efefef;
    border-bottom: 1px solid #efefef;
}

</style>