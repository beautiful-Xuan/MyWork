<template>
    <div class="login">
        <v-header></v-header>
        <div class="login-body">
            <div class="regist">
                <div class="userName">
                    <img src="../../assets/images/userN.png" alt="">
                    <input v-model="phone" type="text" placeholder="手机号/会员号">
                </div>
                <div class="pwd">
                    <img src="../../assets/images/pwd.png" alt="">
                    <input v-model="pwd" type="text" placeholder="请输入密码">
                </div>
            </div>
            <div class="login-btn">登录</div>
            <div class="login-other">
                <div class="other-hr">
                    <div class="hr"></div>
                    <div>使用合作账户登录</div>
                    <div class="hr"></div>
                </div>
                <div class="otherLoginImg">
                    <img src="../../assets/images/otherLogin.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import header from '@/components/header'
    export default {
        name: 'login',
        data () {
            return {
                phone: null,
                pwd: null
            }
        },
        components: {
            'v-header': header
        }
    }
</script>
<style>
.regist img {
    width: 16px;
    height: 18px;
    margin-left: 10px;
}
.userName,.pwd {
    width: 100%;
    line-height: 32px;
    background: #fff;
    display: flex;
    align-items: center;
    border-top: 1px solid #dfdfdf;
}
.pwd {
    border-bottom: 1px solid #dfdfdf;
    margin-bottom: 30px;
}
input[type=text] {
    flex: 1;
    margin-left: 5px;
    padding-left: 5px;
    line-height: 32px;
    border: none;
    font-size: 13px;
}
.login-btn {
    width: 100%;
    line-height: 32px;
    text-align: center;
    background: #88bd16;
    color: #fff;
    margin-bottom: 99px;
}
.login-other {
    text-align: center;
}
.other-hr {
    font-size: 12px;
    margin-bottom: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.other-hr div:nth-of-type(2){
    flex: 1;
}
.other-hr .hr::after {
    content: '';
    display: block;
    width: 30vw;
    border-bottom: 1px solid #cdcdcd;
    top: 50%;
}
.otherLoginImg img {
    width: 42px;
    height: 42px;
}
</style>