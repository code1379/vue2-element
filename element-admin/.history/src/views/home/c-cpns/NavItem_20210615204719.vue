<template>
  <div class="nav-item">
    <el-menu-item>
      <router-link :to="item.url">{{ item.name }}</router-link>
    </el-menu-item>

    <!-- <el-submenu >
      <template slot="title">
        <span>{{name}}</span>
      </template>
      <NavItem />
    </el-submenu> -->
  </div>
</template>

<script>
export default {
  name: "NavItem",
  props: {
    index: String,
    item,
  },
};
</script>

<style lang="scss" scoped>
</style>