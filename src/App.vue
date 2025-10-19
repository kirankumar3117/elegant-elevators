<template>
  <div id="app">
    <SiteHeader />
    <main class="main">
      <router-view />
    </main>
    <FooterBar />
  </div>
</template>

<script>
import SiteHeader from "./components/SiteHeader.vue";
import FooterBar from "./components/FooterBar.vue";
export default { components: { SiteHeader, FooterBar } };
</script>

<style scoped>
/* make app fill viewport and arrange children vertically */
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* main content should take the remaining space */
.main {
  flex: 1 0 auto;
  /* optional: ensure content doesn't bleed under footer */
  /* padding-bottom: 0; */
}
</style>
