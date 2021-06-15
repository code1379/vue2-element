<template>
  <el-menu default-active="2" class="el-menu-vertical-demo" router>
    <NavItem v-for="item in items" :key="item.name" :item="item" />
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