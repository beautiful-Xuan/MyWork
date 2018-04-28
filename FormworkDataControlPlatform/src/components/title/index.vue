<template>
  <div class="Big_title">
    <div class="title">
        {{title}}
        <el-button class="refresh" @click="refresh()" size="mini" icon="el-icon-refresh" autofocus>刷新</el-button>
        <el-button class="goback" @click="goBack()" size="mini" icon="el-icon-arrow-left" autofocus v-if="isShow">返回</el-button>
    </div>
  </div>
</template>
<script>
export default {
  props: ["title", "isShow"],
  data() {
    return {
      age: 90
    };
  },
  methods: {
    refresh() {
      console.log("刷新");
    },
    goBack() {
      console.log("返回");
      this.$router.go(-1);
    }
  }
};
</script>
<style>
.Big_title {
  width: 100%;
  background: #f2f2f2;
  border-bottom: 1px solid #e4e4e4;
}
.Big_title > .title {
  width: 80%;
  min-width: 1000px;
  margin: 0 auto;
  box-sizing: border-box;
  line-height: 50px;
  color: gray;
  padding-left: 20px;
  position: relative;
}
.Big_title > .title .refresh {
  position: absolute;
  top: 10px;
  right: 0;
}
.Big_title > .title .goback {
  position: absolute;
  top: 10px;
  right: 100px;
}
.Big_title > .title::before {
  position: absolute;
  content: " ";
  background: lightseagreen;
  width: 5px;
  height: 18px;
  top: 50%;
  left: 0px;
  transform: translateY(-60%);
}
</style>
