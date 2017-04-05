<template>
    <div class="lists">
        <div class="lists-wrapper">
            <header>
                <search></search>
                <div class="shop-carousel">
                    <mt-swipe :auto="4000">
                        <mt-swipe-item>
                            <img src="../../../assets/images/banner-s1.png" alt="">
                        </mt-swipe-item>
                        <mt-swipe-item>
                            <img src="../../../assets/images/banner-s2.png" alt="">
                        </mt-swipe-item>
                        <mt-swipe-item>
                            <img src="../../../assets/images/banner-s3.png" alt="">
                        </mt-swipe-item>
                        <mt-swipe-item>
                            <img src="../../../assets/images/banner.png" alt="">
                        </mt-swipe-item>
                    </mt-swipe>
                </div>
            </header>
            <div class="lists-body">
                <div class="item-box">
                    <div class="img">
                        <img src="../../../assets/images/lists2.png" alt="">
                    </div>
                    <div class="title">
                        湖南特产
                    </div>
                </div>
                <div class="item-box">
                    <div class="img">
                        <img src="../../../assets/images/banner.png" alt="">
                    </div>
                    <div class="title">
                        湖南特产
                    </div>
                </div>
                <div class="item-box">
                    <div class="img">
                        <img src="../../../assets/images/lists1.png" alt="">
                    </div>
                    <div class="title">
                        湖南特产
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import search from '@/components/search'
    export default {
        name: 'lists',
        components: {
            search
        }
    }
</script>
<style>
.lists,.lists-wrapper {
    height: 100%;
    background: #fff;
}
.lists-wrapper {
    display: flex;
    flex-direction: column;
}
.lists-wrapper header {
  height: 224px;
  padding-bottom: 1.5vw;
  border-bottom: 2px solid #d5d5d5;
}
.lists-body {
    flex: 1;
}
.lists-body .item-box {
    width: 100%;
    height: 43vw;
    position: relative;
    margin-bottom: 1.5vw;
}
.lists-body .item-box .img,.lists-body .item-box img{
    width: 100%;
    height: 100%;
}
.lists-body .item-box .title {
    width: 100%;
    background: rgba(00, 00, 00, 0.4);
    text-align: center;
    position: absolute;
    bottom: 0;
    color: #fff;
}
.lists-body .item-box .title::after,.lists-body .item-box .title::before{
    content: '';
    display: block;
    width: 13vw;
    border-bottom: 1px solid #eeeeee;
    position: absolute;
    top: 50%;
}
.lists-body .item-box .title::after {
    left: calc(50% + 45px);
}
.lists-body .item-box .title::before {
    right: calc(50% + 45px);
}
</style>