<template>
  <el-container class="login-container">
    <el-header>Login</el-header>
    <el-container>
      <el-aside>aside</el-aside>
      <el-main>aside</el-main>
    </el-container>
    <el-footer>footer</el-footer>
  </el-container>
</template>

<script>
export default {
  name: "Login",
};
</script>

<style  scoped>
.login-container {
  height: 100vh;
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #409eff;
}
</style>