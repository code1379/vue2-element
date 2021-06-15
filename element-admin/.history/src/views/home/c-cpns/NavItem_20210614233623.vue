<template>
  <div class="nav-item">
    <el-menu-item v-if="child.length === 0">

    </el-menu-item>
  </div>
</template>

<script>
export default {
  name: "NavItem",
  props: {
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