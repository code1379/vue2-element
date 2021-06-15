<template>
  <div class="nav-item">
    <el-menu-item v-if="child.length === 0" :index="index">
      <router-link :to="url">{{ name }}</router-link>
    </el-menu-item>

    <el-submenu :index="index" v-else > </el-submenu>
  </div>
</template>

<script>
export default {
  name: "NavItem",
  props: {
    index: Number,
    name: String,
    url: String,
    child: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style lang="scss" scoped>
</style>