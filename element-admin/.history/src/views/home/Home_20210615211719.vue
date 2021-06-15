<template>
  <el-container class="home">
    <!-- 左侧导航 -->
    <el-aside class="sidebar" style="width: 300px">
      <!-- 导航 -->
      <Nav />
    </el-aside>
    <!-- 右侧 -->
    <el-container>
      <el-header class="header">
        <!-- 面包屑 -->
        <Breadcrumb />
        <!-- 退出 -->
        <el-button type="primary" class="exit" @click="logout">退出</el-button>
      </el-header>
      <!-- 主题展示区域，路由不同，展示不同 -->
      <el-main>
        <router-view>main</router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Nav from "./c-cpns/Nav.vue";
import Breadcrumb from "./c-cpns/Breadcrumb.vue";

export default {
  name: "Home",
  components: {
    Nav,
    Breadcrumb,
  },
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
.el-menu-vertical-demo {
  height: 100%;
}
</style>