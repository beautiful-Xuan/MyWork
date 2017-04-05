<template>
    <div class="account">
        <header>账户余额</header>
        <div class="account-body">
            <div class="show-money">
                <span>总余额</span>
                <span class="total-money">￥ 0.00</span>
            </div>
            <div class="title">账户余额收支详情</div>
            <div class="item">
                <span>时间</span>
                <span>充值/提现</span>
                <span>明细</span>
            </div>
            <div class="account-lists">

            </div>
        </div>
    </div>
</template>
<script>

</script>
<style>
.account{
    height: 100%;
}
.account>header {
    background: #fff;
    width: 100%;
    line-height: 44px;
    text-align: center;
    font-size: 15px;
    border-bottom: 1px solid #cdcdcd;
}
.show-money {
   height: 43vw;
   width: 100%;
   background: #ffbe60; 
   color: #fff;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
}
.show-money .total-money {
    font-size: 24px;
}
.account-body {
    display: flex;
    flex-direction: column;
}
.account-body .title {
    line-height: 26px;
    height: 26px;
    padding-left: 10px;
    font-size: 14px;
}
.account-body .item {
   display: flex;
   justify-content: center;
   align-items: center;
   background: #fff;
   line-height: 30px;
   height: 30px;
   font-size: 13px;
   border-top: 1px solid #dfdfdf;
   border-bottom: 1px solid #dfdfdf;
}
.account-body .item span {
    flex: 1;
    text-align: center;
}
.account-lists {
    flex: 1;
}
</style>