<template>
  <section class="products container" data-aos="fade-up">
    <h2>Products</h2>
    <p>Click a card to view details.</p>
    <div class="grid">
      <ProductCard v-for="p in products" :key="p.id" v-bind="p" />
    </div>

    <section class="coming-soon" data-aos="fade-up">
      <el-card>
        <h3>Advanced IoT elevator control panels — coming soon</h3>
        <p>
          We are building an advanced IoT solution for predictive maintenance
          and analytics.
        </p>
      </el-card>
    </section>
  </section>
</template>

<script>
import ProductCard from "../components/ProductCard.vue";
export default {
  components: { ProductCard },
  data() {
    return {
      products: [
        {
          id: "commercial",
          title: "Commercial Lift controller Panels",
          short: "Robust & modular",
          image: "/src/assets/placeholder.jpg",
        },
        {
          id: "residential",
          title: "Residential Lift controller Panels",
          short: "Compact & quiet",
          image: "/src/assets/placeholder.jpg",
        },
        {
          id: "hydraulic",
          title: "Hydraulic Lift controller Panels",
          short: "Powerful hydraulic controls",
          image: "/src/assets/placeholder.jpg",
        },
        {
          id: "service",
          title: "Service Lift controller Panels",
          short: "Utility-grade service panels",
          image: "/src/assets/placeholder.jpg",
        },
        {
          id: "hotel",
          title: "Hotel Lift controller Panels",
          short: "Guest-friendly interfaces",
          image: "/src/assets/placeholder.jpg",
        },
        {
          id: "iot",
          title: "IOT elevator control panels",
          short: "Smart connectivity & monitoring",
          image: "/src/assets/placeholder.jpg",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.products {
  padding: 1rem 0;
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 1rem;
  }
  .coming-soon {
    margin-top: 1.25rem;
  }
}
</style>
