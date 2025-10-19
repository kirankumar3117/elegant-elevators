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
    /**
     * Returns an object containing the current year.
     *
     * @returns {Object} - an object containing the current year.
     * @property {Number} year - the current year.
     */
    return { year: new Date().getFullYear() };
  },
};
</script>
<style lang="scss" scoped>
.footer-bar {
  background: #111;
  color: #fff;
  margin-top: auto; /* <-- pushes footer to bottom in the flex column */
  width: 100%;

  .container {
    display: flex;
    justify-content: space-between;
  }
}
</style>
