<template>
  <section class="product-details container" data-aos="fade-up">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item to="/">Home</el-breadcrumb-item>
      <el-breadcrumb-item to="/products">Products</el-breadcrumb-item>
      <el-breadcrumb-item>{{ product.title }}</el-breadcrumb-item>
    </el-breadcrumb>

    <div class="content">
      <img :src="product.image" alt="product" class="big-img" />
      <div class="info">
        <h2>{{ product.title }}</h2>
        <p>{{ product.short }}</p>
        <el-button type="primary">Enquire</el-button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["id"],
  data() {
    const map = {
      commercial: {
        title: "Commercial Lift controller Panels",
        short: "Robust & modular panels",
        image: "/src/assets/placeholder.jpg",
      },
      residential: {
        title: "Residential Lift controller Panels",
        short: "Compact & quiet",
        image: "/src/assets/placeholder.jpg",
      },
      hydraulic: {
        title: "Hydraulic Lift controller Panels",
        short: "Powerful hydraulic controls",
        image: "/src/assets/placeholder.jpg",
      },
      service: {
        title: "Service Lift controller Panels",
        short: "Utility-grade service panels",
        image: "/src/assets/placeholder.jpg",
      },
      hotel: {
        title: "Hotel Lift controller Panels",
        short: "Guest-friendly interfaces",
        image: "/src/assets/placeholder.jpg",
      },
      iot: {
        title: "IOT elevator control panels",
        short: "Smart connectivity & monitoring",
        image: "/src/assets/placeholder.jpg",
      },
    };
    return {
      product: map[this.$route.params.id] || {
        title: "Product",
        short: "Details coming soon",
        image: "/src/assets/placeholder.jpg",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.product-details {
  .content {
    display: flex;
    gap: 1rem;
    align-items: flex-start;
    .big-img {
      width: 45%;
      max-width: 480px;
      border-radius: 8px;
    }
    .info {
      flex: 1;
    }
  }
}
</style>
