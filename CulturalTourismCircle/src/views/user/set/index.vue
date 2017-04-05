<template>
    <div class="set">
        <v-header></v-header>
        <div class="set-body">
            <div class="user-lists">
                <ul>
                    <li><a href="">账号</a></li>
                    <li><a href="">帮助与反馈</a></li>
                    <li><a href="">关于文旅界</a></li>
                </ul>
            </div>
            <div class="quit" @click="quit">退出登录</div>
        </div>
    </div>
</template>
<script>
import header from '@/components/header'
export default {
    name: 'set',
    methods: {
        quit () {
            console.log('tuichu')
            this.$router.push('/login')
        }
    },
    components: {
        'v-header': header
    }
}
</script>
<style>
.quit {
    line-height: 40px;
    background: #fff;
    margin-top: 30px;
    text-align: center;
}
</style>