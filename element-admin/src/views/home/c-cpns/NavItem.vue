<template>
  <div class="nav-item" v-if="item">
    <!-- 老师这里 index 使用的是 item.url 并非一定数字 -->
    <el-submenu v-if="item.child" :index="index">
      <template slot="title">
        <span>{{ item.name }}</span>
      </template>
      <NavItem
        v-for="(c, indey) in item.child"
        :index="`${index}-${indey}`"
        :item="c"
        :key="c.name"
      />
    </el-submenu>
    <el-menu-item v-else :index="index">
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