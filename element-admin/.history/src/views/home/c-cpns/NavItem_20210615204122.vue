<template>
  <div class="nav-item">
    <el-menu-item v-if="child.length === 0" :index="index">
      <router-link :to="url">{{ name }}</router-link>
    </el-menu-item>

    <el-submenu :index="index" v-else>
      <template slot="title">
        <span>{{name}}</span>
      </template>
      <NavItem />
    </el-submenu>
  </div>
</template>

<script>
export default {
  name: "NavItem",
  props: {
    index: String,
    name: String,
    url: String,

  },
};
</script>

<style lang="scss" scoped>
</style>