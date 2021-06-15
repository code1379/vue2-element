<template>
  <div class="nav-item">
    <el-submenu v-if="item?.child">
      <template slot="title">
        <span>{{item.name}}</span>
      </template>
      <NavItem />
    </el-submenu>
    <el-menu-item v-else>
      <router-link :to="item.url">{{ item.name }}</router-link>
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