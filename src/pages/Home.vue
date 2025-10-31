<template>
  <section class="home">
    <!-- Hero: unchanged -->
    <section class="hero container" data-aos="fade-down">
      <div class="hero-inner">
        <div class="hero-copy">
          <h1>
            Elegant Elevators — Control Panels & Intelligent IoT Solutions
          </h1>
          <p class="lead">
            Modern designs for commercial, residential and hotel elevators.
            Reliable, efficient — engineered for safety.
          </p>

          <div class="hero-ctas">
            <router-link class="btn primary" to="/products"
              >Explore Products</router-link
            >
            <router-link class="btn ghost" to="/contact"
              >Contact Sales</router-link
            >
          </div>

          <ul class="trust-list" aria-hidden="true">
            <li>✅ 15+ years industry experience</li>
            <li>✅ Safety-first engineering</li>
            <li>✅ On-site support & installation</li>
          </ul>
        </div>

        <div class="hero-image">
          <!-- keep using your HeroCarousel (if you removed it earlier, keep a placeholder image here) -->
          <HeroCarousel :items="heroItems" @image-click="onHeroImageClick" />
        </div>
      </div>
    </section>

    <!-- Application areas (unchanged) -->
    <section class="apps" data-aos="fade-up">
      <div class="container">
        <h2>Application Areas</h2>
        <ul class="app-list" role="list">
          <li v-for="(a, i) in appAreas" :key="i">{{ a }}</li>
        </ul>
      </div>
    </section>

    <!-- FEATURED PRODUCTS (upgraded UI; uses el-image preview) -->
    <section class="featured container" data-aos="fade-up">
      <h2>Featured Products</h2>
      <p class="subtitle">
        Click an image to zoom — or view details and enquire.
      </p>

      <div class="grid featured-grid">
        <article v-for="p in featured" :key="p.id" class="feat-card">
          <div class="feat-media">
            <!-- Element Plus image: clicking opens zoom/preview -->
            <el-image
              :src="p.image"
              fit="cover"
              class="feat-image"
              :alt="p.title"
            />
            <span v-if="p.tag" class="feat-tag">{{ p.tag }}</span>
          </div>

          <div class="feat-body">
            <h3 class="feat-title">{{ p.title }}</h3>
            <p class="feat-short">{{ p.short }}</p>

            <ul class="feat-features">
              <li v-for="(f, i) in p.features" :key="i">{{ f }}</li>
            </ul>

            <div class="feat-actions">
              <router-link
                class="btn ghost"
                :to="{ name: 'ProductDetails', params: { id: p.id } }"
                >View</router-link
              >
              <router-link
                class="btn primary"
                :to="{ path: '/contact', query: { product: p.id } }"
                >Enquire</router-link
              >
            </div>
          </div>
        </article>
      </div>
    </section>

    <!-- New content block placed above "Our Product Range" -->
    <section class="why container" data-aos="fade-up">
      <div class="why-inner">
        <div class="why-intro">
          <h2>Why Choose Elegant</h2>
          <p class="muted">
            Solutions engineered for uptime, safety and easy maintenance.
          </p>
        </div>

        <div class="why-cards">
          <div class="why-card">
            <div class="wc-icon">🔒</div>
            <h4>Safety & Compliance</h4>
            <p>
              Designed to global safety standards with redundant interlocks and
              diagnostics.
            </p>
          </div>

          <div class="why-card">
            <div class="wc-icon">⚙️</div>
            <h4>Modular Engineering</h4>
            <p>
              Field-upgradable modules and simplified servicing reduce downtime.
            </p>
          </div>

          <div class="why-card">
            <div class="wc-icon">📶</div>
            <h4>Smart Monitoring</h4>
            <p>
              IoT-ready telemetry for predictive maintenance and live health
              dashboards.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Products preview + CTA (unchanged, but placed after Why block) -->
    <section class="products-preview" data-aos="fade-up">
      <div class="container preview-inner">
        <div>
          <h2>Our Product Range</h2>
          <p class="muted">
            From commercial controllers to smart IoT panels — engineered for
            uptime.
          </p>
        </div>
        <router-link class="btn outline" to="/products"
          >View All Products</router-link
        >
      </div>
    </section>
  </section>
</template>

<script setup>
import { ref } from "vue";
import ProductCard from "../components/ProductCard.vue";
import HeroCarousel from "../components/HeroCarousel.vue";
import Controller1 from "../assets/images/controller-1.jpg";
import Controller2 from "../assets/images/controller-2.jpg";
import Controller3 from "../assets/images/controller-3.jpg";
import LiftControler from "../assets/images/lift-controller.jpg";
import ResidencialController from "../assets/images/residencial-lift-controller.jpg";
import HotelController from "../assets/images/hotel-lift-controller.jpg";
import HydralicController from "../assets/images/hydralic-controller.jpg";
import IotController from "../assets/images/iot-controller.jpg";
import ServiceController from "../assets/images/service-controller.jpg";
import { useRouter } from "vue-router";
const router = useRouter();

/* hero items remain as before */
const heroItems = [
  {
    image: Controller1,
    alt: "Elegant control panel overview",
    caption:
      "<strong>Robust Commercial Panels</strong><br/>Modular, service-friendly designs",
    target: { type: "commercial" },
  },
  {
    image: Controller2,
    alt: "IoT elevator monitoring",
    caption:
      "<strong>Advanced IoT Panels</strong><br/>Predictive maintenance & analytics",
    target: { type: "iot" },
  },
  {
    image: Controller3,
    alt: "Hotel lift panels",
    caption:
      "<strong>Hotel & Residential</strong><br/>Quiet & guest-friendly operation",
    target: { type: "hotel" },
  },
];

const appAreas = [
  "Commercial Buildings",
  "Residential Complexes",
  "Hotels & Hospitality",
  "Service / Utility Lifts",
  "Industrial Facilities",
  "Smart Building Integrations",
];

/* FEATURED - enriched with placeholder images & bullets */
const featured = ref([
  {
    id: "commercial",
    title: "Commercial Lift controller Panels",
    short: "Robust, modular panels — service-friendly & scalable.",
    image: LiftControler,
    preview: [
      "https://placehold.co/1600x1000?text=Commercial+Panel+1",
      "https://placehold.co/1600x1000?text=Commercial+Panel+2",
    ],
    features: [
      "Modular I/O & redundancy",
      "Advanced safety interlocks",
      "Remote diagnostics",
    ],
    tag: "Popular",
  },
  {
    id: "residential",
    title: "Residential Lift controller Panels",
    short: "Compact units for quiet and efficient residential lifts.",
    image: ResidencialController,
    preview: ["https://placehold.co/1600x1000?text=Residential+1"],
    features: ["Compact footprint", "Low-noise drive", "Energy-saving modes"],
    tag: "Compact",
  },
  {
    id: "hotel",
    title: "Hotel Lift controller Panels",
    short: "Smooth rides and premium guest-facing interfaces.",
    image: HotelController,
    preview: ["https://placehold.co/1600x1000?text=Hotel+1"],
    features: [
      "Smooth acceleration",
      "Guest mode features",
      "Aesthetic faceplates",
    ],
    tag: "Guest-Ready",
  },
  {
    id: "iot",
    title: "Advanced IoT Elevator Control Panels",
    short: "Smart connectivity, predictive maintenance and analytics.",
    image: IotController,
    features: [
      "Remote telemetry & sensor health",
      "Predictive alerts for bearings & motors",
      "Cloud-based dashboard & analytics",
    ],
    category: "iot",
    comingSoon: true,
  },
  {
    id: "service",
    title: "Service Lift Controller Panels",
    short: "Rugged, utility-grade panels for service & goods lifts.",
    image: ServiceController,
    features: ["Simplified controls", "Maintenance mode", "Robust enclosure"],
    category: "service",
    comingSoon: false,
  },
  {
    id: "hydraulic",
    title: "Hydraulic Lift Controller Panels",
    short: "Powerful control unit optimized for hydraulic drives.",
    image: HydralicController,
    features: [
      "Hydraulic pump control",
      "Pressure & safety interlocks",
      "Durable power stage",
    ],
    category: "hydraulic",
    comingSoon: false,
  },
]);
function onHeroImageClick(item) {
  router.push(`/products/${item.target.type}`);
}
</script>

<style lang="scss" scoped>
/* keep your container */
.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1rem;
}

/* hero (unchanged) */
.hero {
  padding: 2.5rem 0 1.6rem;
}
.hero-inner {
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}
.hero-copy {
  flex: 1 1 44%;
  min-width: 260px;
}
.hero-copy h1 {
  margin: 0 0 0.6rem;
  font-size: 1.6rem;
  line-height: 1.15;
}
.lead {
  margin: 0 0 1rem;
  color: rgba(0, 0, 0, 0.72);
}

/* trust bullets */
.trust-list {
  list-style: none;
  padding: 0;
  margin: 1rem 0 0;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  color: rgba(0, 0, 0, 0.6);
  font-weight: 600;
}

/* hero-image */
.hero-image {
  flex: 1 1 50%;
  min-width: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.hero-image :deep(.hero-carousel) {
  width: 100%;
  max-width: 720px;
}

/* Application areas (same) */
.apps {
  padding: 2.2rem 0;
}
.app-list {
  list-style: none;
  display: flex;
  gap: 0.8rem;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
}
.app-list li {
  background: #fff;
  padding: 0.6rem 1rem;
  border-radius: 8px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.06);
  font-weight: 600;
}

/* ---------- FEATURED GRID ---------- */
.featured {
  padding: 2rem 0;
}
.featured .subtitle {
  color: rgba(0, 0, 0, 0.6);
  margin-bottom: 1rem;
}

.featured-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}

.feat-card {
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 12px 30px rgba(2, 6, 23, 0.06);
  display: flex;
  flex-direction: column;
  transition: transform 0.18s ease, box-shadow 0.18s ease;
}
.feat-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 22px 48px rgba(2, 6, 23, 0.09);
}

.feat-media {
  position: relative;
  height: 180px;
  background: #f3f4f6;
  display: flex;
  align-items: center;
  justify-content: center;
}
.feat-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  cursor: zoom-in;
}
.feat-tag {
  position: absolute;
  left: 12px;
  top: 12px;
  background: rgba(11, 108, 255, 0.95);
  color: #fff;
  padding: 0.35rem 0.65rem;
  border-radius: 999px;
  font-weight: 700;
  font-size: 0.8rem;
  box-shadow: 0 6px 18px rgba(11, 108, 255, 0.14);
}

.feat-body {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  flex: 1;
}
.feat-title {
  margin: 0;
  font-size: 1.05rem;
  color: #0b233f;
}
.feat-short {
  margin: 0;
  color: rgba(0, 0, 0, 0.7);
  font-size: 0.95rem;
}
.feat-features {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 0.3rem;
}
.feat-features li {
  position: relative;
  padding-left: 1.2rem;
  color: rgba(0, 0, 0, 0.65);
}
.feat-features li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: #0b6cff;
}

.feat-actions {
  margin-top: auto;
  display: flex;
  gap: 0.6rem;
  justify-content: flex-end;
}
.btn {
  padding: 0.48rem 0.8rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
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

/* ---------- WHY CHOOSE ELEGANT (new block) ---------- */
.why {
  padding: 1.8rem 0;
}
.why-inner {
  display: flex;
  gap: 1.2rem;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}
.why-intro {
  flex: 1 1 40%;
  min-width: 240px;
}
.why-intro h2 {
  margin: 0 0 0.4rem;
}
.why-intro .muted {
  color: rgba(0, 0, 0, 0.6);
}

.why-cards {
  display: flex;
  gap: 1rem;
  flex: 1 1 55%;
  justify-content: flex-end;
  flex-wrap: wrap;
}
.why-card {
  background: #fff;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(2, 6, 23, 0.06);
  min-width: 180px;
  text-align: center;
}
.wc-icon {
  font-size: 1.6rem;
  margin-bottom: 0.6rem;
}
.why-card h4 {
  margin: 0 0 0.4rem;
}
.why-card p {
  margin: 0;
  color: rgba(0, 0, 0, 0.66);
}

/* ---------- PRODUCTS PREVIEW CTA ---------- */
.products-preview {
  padding: 1.6rem 0 3rem;
}
.preview-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

/* Responsive tweaks */
@media (max-width: 980px) {
  .featured-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .why-cards {
    justify-content: center;
  }
  .why-inner {
    gap: 0.8rem;
  }
}
@media (max-width: 720px) {
  .hero-inner {
    flex-direction: column;
  }
  .hero-copy {
    text-align: center;
    order: 2;
  }
  .hero-image {
    order: 1;
  }
  .featured-grid {
    grid-template-columns: 1fr;
    width: 90%;
    margin-left: 5%;
  }
  .feat-media {
    height: 220px;
  }
  .feat-actions {
    justify-content: space-between;
  }
  .why-inner {
    flex-direction: column;
    align-items: stretch;
  }
  .why-cards {
    justify-content: space-between;
  }
}
</style>

<!-- Global override to ensure Element Plus image preview opens fullscreen -->
<style>
.el-image-viewer__wrapper,
.el-image-viewer__container,
.el-image-viewer,
.el-overlay {
  position: fixed !important;
  inset: 0 !important;
  width: 100vw !important;
  height: 100vh !important;
  max-width: 100vw !important;
  max-height: 100vh !important;
  z-index: 9999 !important;
}
.el-image-viewer__img,
.el-image-viewer__img img {
  max-width: 100% !important;
  max-height: 100% !important;
  width: auto !important;
  height: auto !important;
  object-fit: contain !important;
}
.el-image-viewer__container {
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
}
.el-overlay__mask {
  background: rgba(0, 0, 0, 0.85) !important;
}
</style>
