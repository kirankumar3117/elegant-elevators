<template>
  <div id="app">
    <SiteHeader />
    <main class="main">
      <router-view />
    </main>
    <FooterBar />
  </div>
</template>

<script setup>
import SiteHeader from "./components/SiteHeader.vue";
import FooterBar from "./components/FooterBar.vue";
</script>

<style scoped>
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main {
  flex: 1 0 auto;
}
</style>
