<template>
    <div class="strategy">
        <v-header></v-header>
        <div class="strategy-body">
            <div class="strategy-lists">
                <div v-if="status" class="strategy-empty">
                    <div>暂无数据</div>
                    <img src="../../../assets/images/logo.png" alt="">
                </div>
                <div v-else class="strategy-not-null">

                </div>
            </div>
        </div>
    </div>
</template>
<script>
import header from '@/components/header'
export default {
    name: 'strategy',
    data () {
        return {
            status:true
        }
    },
    components: {
        'v-header': header
    }
}
</script>
<style>
.strategy>header {
    background: #fff;
    width: 100%;
    line-height: 44px;
    text-align: center;
    font-size: 15px;
    border-bottom: 1px solid #cdcdcd;
}
.strategy-lists {
    margin-bottom: 20px;
}
.strategy-empty {
    height: 40vh;
    display: flex;
    flex-direction: column-reverse;
    justify-content: bottom;
    align-items: center;
}
.strategy-empty>div {
    margin-left: 10px;
    color: #757575;
}
.strategy-empty img {
    width: 220px;
    height: 70px;
    margin-bottom: 10px;
}
</style>