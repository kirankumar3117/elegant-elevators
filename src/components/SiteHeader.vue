<template>
  <header class="site-header">
    <div class="container header-inner">
      <div class="logo">
        <img src="https://placehold.co/600x400" alt="logo" class="logo-img" />
        <h1>Elegant Elevators</h1>
      </div>
      <el-menu mode="horizontal" class="nav-menu" :default-active="active">
        <el-menu-item index="/">Home</el-menu-item>
        <el-menu-item index="/about">About Us</el-menu-item>
        <el-menu-item index="/products">Products</el-menu-item>
        <el-menu-item index="/contact">Contact Us</el-menu-item>
      </el-menu>
    </div>
  </header>
</template>

<script>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    const active = ref(router.currentRoute.value.path);
    onMounted(() => {
      router.afterEach((to) => (active.value = to.path));
    });
    return { active };
  },
};
</script>

<style lang="scss" scoped>
.site-header {
  background: #fff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  .header-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 1.25rem;
  }
  .logo {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    .logo-img {
      width: 48px;
      height: 48px;
      object-fit: cover;
      border-radius: 6px;
    }
  }
}
</style>
