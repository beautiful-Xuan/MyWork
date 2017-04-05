<template>
    <mt-swipe :auto="4000">
        <mt-swipe-item>
            <img src="../../assets/images/banner-s1.png" alt="">
        </mt-swipe-item>
        <mt-swipe-item>
            <img src="../../assets/images/banner-s2.png" alt="">
        </mt-swipe-item>
        <mt-swipe-item>
            <img src="../../assets/images/banner-s3.png" alt="">
        </mt-swipe-item>
        <mt-swipe-item>
            <img src="../../assets/images/banner.png" alt="">
        </mt-swipe-item>
    </mt-swipe>
</template>
<style>
    .mint-swipe {
        width: 100%;
        height: 100%;
    }
    .mint-swipe-items-wrap {
        width: 100%;
        height: 100%;
    }
    .mint-swipe-items-wrap .mint-swipe-item {
        width: 100%;
        height: 100%;
    }
    .mint-swipe-indicators .mint-swipe-indicator {
        background: rgba(0, 134, 67, 0.4);
    }
</style>