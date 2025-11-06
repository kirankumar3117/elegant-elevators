<template>
  <section class="products-page container" data-aos="fade-up">
    <header class="page-head">
      <div>
        <h2>Products</h2>
        <p class="subtitle">
          Click a card to view details or enquire — engineered for reliability.
        </p>
      </div>

      <div class="controls">
        <input
          v-model="q"
          type="search"
          placeholder="Search products..."
          class="search"
          aria-label="Search products"
        />
        <select v-model="filter" class="select">
          <option value="all">All</option>
          <option value="commercial">Commercial</option>
          <option value="residential">Residential</option>
          <option value="hydraulic">Hydraulic</option>
          <option value="service">Service</option>
          <option value="hotel">Hotel</option>
          <option value="iot">IoT</option>
        </select>
      </div>
    </header>

    <div class="grid">
      <article
        v-for="p in filtered"
        :key="p.id"
        class="product-card"
        :class="{ coming: p.comingSoon }"
        @click="view(p.id)"
      >
        <div class="media">
          <img :src="p.image" :alt="p.title" />
          <div v-if="p.comingSoon" class="badge">Coming Soon</div>
        </div>

        <div class="body">
          <h3 class="title">{{ p.title }}</h3>
          <p class="short">{{ p.short }}</p>

          <ul class="features" v-if="p.features?.length">
            <li v-for="(f, i) in p.features" :key="i">{{ f }}</li>
          </ul>

          <div class="card-actions">
            <button class="btn ghost" @click.stop="view(p.id)">View</button>
            <button
              class="btn primary"
              @click.stop="enquire(p)"
              :disabled="p.comingSoon"
              :title="p.comingSoon ? 'Coming soon' : 'Enquire about ' + p.title"
            >
              {{ p.comingSoon ? "Notify me" : "Enquire" }}
            </button>
          </div>
        </div>
      </article>
    </div>

    <!-- If nothing found -->
    <div v-if="filtered.length === 0" class="empty">
      <p>No products match your search / filter.</p>
      <router-link to="/contact" class="btn primary">Contact Us</router-link>
    </div>
  </section>
</template>
<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import LiftControler from "../assets/images/lift-controller.jpg";
import ResidencialController from "../assets/images/residencial-lift-controller.jpg";
import HotelController from "../assets/images/hotel-lift-controller.jpg";
import HydralicController from "../assets/images/hydralic-controller.jpg";
import IotController from "../assets/images/iot-controller.jpg";
import ServiceController from "../assets/images/service-controller.jpg";
import { productMap } from "../data/productData.js";
const router = useRouter();

// reactive state
const q = ref("");
const filter = ref("all");

// computed filtered list
const filtered = computed(() => {
  const query = q.value.trim().toLowerCase();
  // merge local products and any products from productMap (if present)
  const list = Object.values(productMap || {});

  return list.filter((p) => {
    const matchesFilter = filter.value === "all" || p.category === filter.value;
    const featuresText = (p.features || []).join(" ").toLowerCase();
    const matchesQuery =
      !query ||
      p.title.toLowerCase().includes(query) ||
      (p.short || "").toLowerCase().includes(query) ||
      featuresText.includes(query);

    return matchesFilter && matchesQuery;
  });
});

// methods
function view(id) {
  router.push({ name: "ProductDetails", params: { id } });
}

/*************  ✨ Windsurf Command ⭐  *************/
/*******  8ef05981-07fc-4ce8-a262-cf84df2342e0  *******/
function enquire(product) {
  if (product.comingSoon) {
    router.push({ path: "/contact", query: { notify: product.id } });
  } else {
    router.push({ path: "/contact", query: { product: product.id } });
  }
}
</script>

<style lang="scss" scoped>
.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1rem;
}

/* Header */
.page-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  .subtitle {
    margin: 0.25rem 0 0;
    color: rgba(0, 0, 0, 0.6);
    font-weight: 500;
  }
  .controls {
    display: flex;
    gap: 0.6rem;
    align-items: center;
  }
  .search {
    padding: 0.45rem 0.7rem;
    border-radius: 8px;
    border: 1px solid rgba(0, 0, 0, 0.08);
    min-width: 180px;
    font-size: 0.95rem;
  }
  .select {
    padding: 0.45rem 0.6rem;
    border-radius: 8px;
    border: 1px solid rgba(0, 0, 0, 0.08);
    background: #fff;
    font-size: 0.95rem;
  }
}

/* Grid layout */
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.05rem;
}

/* Single product card */
.product-card {
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 12px 30px rgba(2, 6, 23, 0.06);
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: transform 160ms ease, box-shadow 160ms ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 18px 50px rgba(2, 6, 23, 0.09);
  }
}

.product-card.coming {
  opacity: 0.98;
  filter: saturate(0.98);
}

/* image area */
.media {
  position: relative;
  height: 180px;
  background: #f3f4f6;
  display: flex;
  align-items: center;
  justify-content: center;
}
.media img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  display: block;
}
.badge {
  position: absolute;
  left: 10px;
  top: 10px;
  background: rgba(11, 108, 255, 0.95);
  color: #fff;
  padding: 0.4rem 0.7rem;
  border-radius: 999px;
  font-weight: 700;
  font-size: 0.8rem;
  box-shadow: 0 6px 18px rgba(11, 108, 255, 0.14);
}

/* body */
.body {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
.title {
  margin: 0;
  font-size: 1.05rem;
  color: #0b233f;
}
.short {
  margin: 0;
  color: rgba(0, 0, 0, 0.7);
  font-size: 0.95rem;
}
.features {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 0.35rem;
  li {
    font-size: 0.92rem;
    color: rgba(0, 0, 0, 0.65);
    position: relative;
    padding-left: 1.2rem;
  }
  li::before {
    content: "•";
    position: absolute;
    left: 0;
    color: #0b6cff;
  }
}

/* actions */
.card-actions {
  margin-top: auto;
  display: flex;
  gap: 0.6rem;
  justify-content: flex-end;
}
.btn {
  padding: 0.48rem 0.8rem;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-weight: 700;
  font-size: 0.95rem;
}
.btn.ghost {
  background: transparent;
  border: 1px solid rgba(0, 0, 0, 0.08);
  color: #0b233f;
}
.btn.primary {
  background: #0b6cff;
  color: #fff;
}

/* empty state */
.empty {
  margin-top: 1.2rem;
  text-align: center;
}

/* Responsive */
@media (max-width: 1100px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 720px) {
  .page-head {
    flex-direction: column;
    align-items: stretch;
    gap: 0.8rem;
    .controls {
      justify-content: space-between;
    }
  }

  .grid {
    grid-template-columns: 1fr;
  }

  .media {
    height: 220px;
  }

  .card-actions {
    justify-content: space-between;
  }
}

/* very small screens */
@media (max-width: 420px) {
  .media {
    height: 180px;
  }
  .title {
    font-size: 1rem;
  }
  .btn {
    font-size: 0.9rem;
    padding: 0.45rem 0.7rem;
  }
}
</style>
