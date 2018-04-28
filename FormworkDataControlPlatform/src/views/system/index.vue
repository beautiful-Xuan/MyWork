<template>
  <div class="system">
      <el-row>
          <el-col :span="3">
            <div class="second_leve_nav">
                <span class="title">系统管理</span>
                <ul>
                    <li @click="getTitle('部门管理')">
                        <router-link to="/system/department" :active-class="'bgColor'">部门管理</router-link>
                    </li>
                    <li @click="getTitle('角色管理')">
                        <router-link to="/system/role" :active-class="'bgColor'">角色管理</router-link>
                    </li>
                    <li @click="getTitle('成员管理')">
                        <router-link to="/system/member" :active-class="'bgColor'">成员管理</router-link>
                    </li>
                    <li @click="getTitle('权限管理')">
                        <router-link to="/system/limit" :active-class="'bgColor'">权限管理</router-link>
                    </li>
                </ul>
            </div>
        </el-col>
        <el-col :span="21">
            <router-view></router-view>
        </el-col>
    </el-row>
  </div>
</template>
