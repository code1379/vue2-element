<template>
  <el-menu default-active="2" class="el-menu-vertical-demo">
    <!-- 有子导航，我们使用 el-submenu -->
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>导航一</span>
      </template>

      <el-menu-item index="1-1">选项1</el-menu-item>
      <el-submenu index="1-4">
        <template slot="title"
          ><i class="el-icon-location"></i> <span>选项4</span></template
        >
        <!-- <el-menu-item index="1-4-1">选项4-1</el-menu-item> -->
      </el-submenu>
    </el-submenu>
    <!-- 没有子导航，我们使用 el-menu-item -->
    <el-menu-item index="2">
      <i class="el-icon-menu"></i>
      <span slot="title">导航二</span>
    </el-menu-item>
    <el-menu-item index="4">
      <i class="el-icon-setting"></i>
      <span slot="title">导航四</span>
    </el-menu-item>

    <NavItem
      v-for="(item, index) in items"
      :key="item.name"
      :index="index"
      :name="item.name"
      :url="item.url"
      :child="item.child"
    />
  </el-menu>
</template>

<script>
import NavItem from "./NavItem.vue";
export default {
  name: "Nav",
  components: {
    NavItem,
  },
  data() {
    return {
      items: [],
    };
  },
  mounted() {
    this.$http.get("/nav").then((res) => {
      const data = res.data;
      console.log(data);
      this.items = data.result;
    });
  },
};
</script>

<style scoped>
</style>