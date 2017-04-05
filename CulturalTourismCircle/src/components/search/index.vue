<template>
    <div class="search-box">
        <div class="search">
            <img src="../../assets/images/search.png" alt="">
            <input type="search" placeholder="请输入您的关键词">
        </div>
    </div>
</template>
<script>
    export default {
        name: 'search'
    }
</script>
<style>
.search-box{
  width: 100%;
  height: 44px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
.search{
  width: 88%;
  background: #D4ebdf;
  border: 1px solid #42b983;
  border-radius: 5px;
  height: 28px;
  text-align: right;
  position: relative;
}
.search img{
  width: 18px;
  height: 18px;
  position: absolute;
  left: 15px;
  top: 3px;
}
.search input{
  background: #D4ebdf;
  border: none;
  height: 26px;
  width: 85%;
  border-radius: 5px;
  padding-left: 10px;
  box-sizing: border-box;
  font-size: 15px;
  color: #666;
}
</style>