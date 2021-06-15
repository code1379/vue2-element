<template>
  <el-container class="home">
    <el-aside> aside </el-aside>
    <el-container>
      <el-header>
        <!-- 退出 -->
        <el-button type="primary" size="default">退出</el-button>
        
        <!-- 面包屑 -->
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
          <el-breadcrumb-item>活动列表</el-breadcrumb-item>
          <el-breadcrumb-item>活动详情</el-breadcrumb-item>
        </el-breadcrumb>
      </el-header>
      <el-main>main</el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style  scoped>
.home {
  height: 100vh;
}
</style>