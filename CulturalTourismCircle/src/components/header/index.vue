<template>
    <div class="header">
        <div class="l-arrow" @click="goBack"></div>
        <span>设置</span>
        <div class="goHome">
            <img @click="goHome" src="../../assets/images/home.png" alt="">
        </div>
    </div>
</template>
<script>
export default {
    name: 'heaser',
    methods: {
        goBack () {
            window.history.go(-1)
        },
        goHome () {
            this.$router.push('/home')
        }
    }
}
</script>
<style>
.header {
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    margin-bottom: 20px;
}
.l-arrow {
    width: 30px;
    height: 100%;
    position: relative;
}
.l-arrow::after {
    content: '';
    display: block;
    width: 13px;
    height: 13px;
    border-top: 1px solid #333;
    border-left: 1px solid #333;
    transform: rotate(-45deg) translate(65%,20%);
    position: absolute;
    right: 10px;
    top: 50%;
}
.header span {
    flex: 1;
    text-align: center;
    font-weight: normal;
    font-size: 15px;
    font-family: 'MicrosoftYaHei'
}
.goHome {
    width: 30px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
}
.header img{
    width: 25px;
    height: 25px;
}
</style>