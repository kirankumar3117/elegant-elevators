<template>
  <section class="home container">
    <div class="hero" data-aos="fade-down">
      <div class="hero-text">
        <h2>Elegant Elevators — Control Panels & Intelligent IoT Solutions</h2>
        <p>
          Modern designs for commercial, residential and hotel elevators.
          Reliable, efficient — engineered for safety.
        </p>
      </div>
      <img src="https://placehold.co/600x400" alt="hero" class="hero-img" />
    </div>

    <section class="featured" data-aos="fade-up">
      <h3>Featured Products</h3>
      <div class="grid">
        <ProductCard v-for="p in featured" :key="p.id" v-bind="p" />
      </div>
    </section>
  </section>
</template>

<script>
import ProductCard from "../components/ProductCard.vue";
export default {
  components: { ProductCard },
  data() {
    return {
      featured: [
        {
          id: "commercial",
          title: "Commercial Lift controller Panels",
          short: "Robust & modular panels",
          image: "/src/assets/placeholder.jpg",
        },
        {
          id: "residential",
          title: "Residential Lift controller Panels",
          short: "Compact & quiet",
          image: "/src/assets/placeholder.jpg",
        },
        {
          id: "hotel",
          title: "Hotel Lift controller Panels",
          short: "Sleek & guest-friendly",
          image: "/src/assets/placeholder.jpg",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.home {
  padding: 1.25rem;
  .hero {
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: space-between;
  }
  .hero-img {
    width: 45%;
    max-width: 420px;
    border-radius: 8px;
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 1rem;
  }
}
</style>
