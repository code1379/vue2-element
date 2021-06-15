<template>
  <div class="nav-item" v-if="item">
    <!-- 老师这里 index 使用的是 item.url 并非一定数字 -->
    <el-submenu v-if="item.child" :index="item.url">
      <template slot="title">
        <span>{{ item.name }}</span>
      </template>
      <NavItem v-for="c in item.child" :index="c.url" :item="c" :key="c.name" />
    </el-submenu>
    <el-menu-item v-else :index="item.url">
      <div>{{ item.name }}</div>
    </el-menu-item>
  </div>
</template>

<script>
export default {
  name: "NavItem",
  props: ["index", "item"],
};
</script>

<style lang="scss" scoped>
</style>