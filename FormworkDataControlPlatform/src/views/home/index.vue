<template>
  <div class="system">
      <el-row>
          <el-col :span="3">
            <div class="second_leve_nav">
                <span class="title">系统首页</span>
                <ul>
                    <li @click="getTitle('系统首页')">
                        <router-link to="/home/index" :active-class="'bgColor'">系统首页</router-link>
                    </li>
                    <li>
                        <router-link to="/a" :active-class="'bgColor'">账户设置</router-link>
                    </li>
                    <li>
                        <router-link to="/b" :active-class="'bgColor'">系统信息</router-link>
                    </li>
                    <li>
                        <router-link to="/c" :active-class="'bgColor'">登录日志</router-link>
                    </li>
                </ul>
            </div>
        </el-col>
        <el-col :span="21">
            <div  class="childViewport">
            <div class="body" ref="viewH">
                <router-view/>
            </div>
        </div>
        </el-col>
    </el-row>
  </div>
</template>
