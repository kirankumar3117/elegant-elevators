<template>
  <footer class="footer-bar">
    <div class="container">
      <div class="left">© {{ year }} Elegant Elevators</div>
      <div class="right">Contact: 9396671541 | info@elegantembedded.com</div>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return { year: new Date().getFullYear() };
  },
};
</script>
<style lang="scss" scoped>
.footer-bar {
  background: #111;
  color: #fff;
  padding: 0.9rem 0.75rem;
  .container {
    display: flex;
    justify-content: space-between;
  }
}
</style>
