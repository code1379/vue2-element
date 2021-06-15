<template>
  <el-container class="home">
    <!-- 左侧导航 -->
    <el-aside class="sidebar" style="width: 300px">
      <!-- 导航 -->
      <el-menu default-active="2" class="el-menu-vertical-demo">
        <!-- 有子导航，我们使用 el-submenu -->
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>导航一</span>
          </template>
          <el-submenu index="1-4">
            <template slot="title">选项4</template>
            <!-- <el-menu-item index="1-4-1">选项1</el-menu-item> -->
          </el-submenu>
        </el-submenu>
        <!-- 没有子导航，我们使用 el-menu-item -->
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <!-- 右侧 -->
    <el-container>
      <el-header class="header">
        <!-- 面包屑 -->
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
          <el-breadcrumb-item>活动列表</el-breadcrumb-item>
          <el-breadcrumb-item>活动详情</el-breadcrumb-item>
        </el-breadcrumb>
        <!-- 退出 -->
        <el-button type="primary" class="exit" @click="logout">退出</el-button>
      </el-header>
      <!-- 主题展示区域，路由不同，展示不同 -->
      <el-main>main</el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "Home",
  methods: {
    logout() {
      // TODO 1. 清除存储信息
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("username");
      sessionStorage.removeItem("id");
      // TODO 2. 跳转到登录页面
      this.$router.push("/login");
    },
  },
};
</script>

<style  scoped>
.home {
  height: 100vh;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>