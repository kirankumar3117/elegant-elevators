<template>
  <div id="app">
    <SiteHeader v-if="!hideLayout" />
    <main class="main">
      <router-view />
    </main>
    <FooterBar v-if="!hideLayout" />
  </div>
</template>

<script setup>
import { computed } from "vue";
import SiteHeader from "./components/SiteHeader.vue";
import FooterBar from "./components/FooterBar.vue";
import { useRoute } from "vue-router";
const route = useRoute();
const hideLayout = computed(() => route.name === "Launch");
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
