<template>
  <el-container class="home">
    <el-aside class="sidebar" style="width: 300px">
      <!-- 导航 -->
      <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
       <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      </el-menu>
    </el-aside>
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