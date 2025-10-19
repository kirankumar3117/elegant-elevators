<template>
  <section
    class="product-details container"
    data-aos="fade-up"
    aria-live="polite"
    :style="{ marginTop: '10px' }"
  >
    <!-- Breadcrumb -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item to="/">Home</el-breadcrumb-item>
      <el-breadcrumb-item to="/products">Products</el-breadcrumb-item>
      <el-breadcrumb-item>{{ product.title }}</el-breadcrumb-item>
    </el-breadcrumb>

    <!-- Main content -->
    <div class="content">
      <!-- Image column -->
      <div class="image-col">
        <!-- Element Plus image with multi-src preview (click -> fullscreen zoom) -->
        <el-image
          :src="product.image"
          :preview-src-list="product.preview"
          fit="contain"
          class="big-img"
          alt="product image"
        />

        <!-- small thumbnails (click opens preview gallery) -->
        <div
          class="thumbs"
          v-if="product.preview && product.preview.length > 1"
        >
          <!-- <button
            v-for="(t, i) in product.preview"
            :key="i"
            class="thumb"
            @click="openPreview(i)"
            :aria-label="`Open image ${i + 1}`"
          >
            <img :src="t" :alt="`${product.title} preview ${i + 1}`" />
          </button> -->
        </div>
      </div>

      <!-- Info column -->
      <aside class="info-col">
        <h1 class="title">{{ product.title }}</h1>
        <p class="short">{{ product.short }}</p>

        <div class="meta">
          <div>
            <strong>Category:</strong> {{ product.category || "General" }}
          </div>
          <div>
            <strong>Availability:</strong>
            <span class="status">{{
              product.available ? "In stock" : "Contact for lead time"
            }}</span>
          </div>
        </div>

        <!-- Overview -->
        <section class="section overview" aria-labelledby="overview-heading">
          <h2 id="overview-heading">Overview</h2>
          <p v-html="product.long || defaultLong"></p>
        </section>

        <!-- Key features -->
        <section class="section features" aria-labelledby="features-heading">
          <h3 id="features-heading">Key Features</h3>
          <ul>
            <li v-for="(f, i) in product.features" :key="i">{{ f }}</li>
          </ul>
        </section>

        <!-- CTA row -->
        <div class="cta-row">
          <el-button type="primary" size="medium" @click="openEnquire"
            >Enquire</el-button
          >
          <el-button type="text" size="medium" @click="scrollToSpecs"
            >View Specs</el-button
          >
        </div>

        <!-- Related quick facts -->
        <div class="quickfacts">
          <div class="fact">
            <strong>Warranty</strong><span>{{ product.warranty }}</span>
          </div>
          <div class="fact">
            <strong>Installation</strong><span>{{ product.installation }}</span>
          </div>
          <div class="fact">
            <strong>Support</strong><span>{{ product.support }}</span>
          </div>
        </div>
      </aside>
    </div>

    <!-- Technical specs -->
    <section class="specs container" id="specs" data-aos="fade-up">
      <h2>Technical Specifications</h2>
      <table
        class="spec-table"
        role="table"
        aria-label="Technical specifications"
      >
        <tbody>
          <tr v-for="(val, key) in product.specs" :key="key">
            <th scope="row">{{ key }}</th>
            <td>{{ val }}</td>
          </tr>
        </tbody>
      </table>
    </section>

    <!-- Downloads & FAQ -->
    <section class="extras container" data-aos="fade-up">
      <div class="downloads">
        <h3>Downloads</h3>
        <ul>
          <li v-for="(d, i) in product.downloads" :key="i">
            <a :href="d.url" target="_blank" rel="noopener noreferrer">{{
              d.label
            }}</a>
          </li>
        </ul>
      </div>

      <div class="faq">
        <h3>FAQ</h3>
        <el-collapse v-model="openFaq">
          <el-collapse-item
            v-for="(q, i) in product.faq"
            :key="i"
            :title="q.q"
            >{{ q.a }}</el-collapse-item
          >
        </el-collapse>
      </div>
    </section>

    <!-- Related products (simple links) -->
    <section class="related container" data-aos="fade-up">
      <h3>You may also like</h3>
      <ul class="related-list">
        <li v-for="r in related" :key="r.id">
          <router-link :to="{ name: 'ProductDetails', params: { id: r.id } }">{{
            r.title
          }}</router-link>
        </li>
      </ul>
    </section>

    <!-- Enquiry dialog -->
    <el-dialog
      :visible.sync="enquireOpen"
      width="520px"
      :before-close="closeEnquire"
    >
      <template #title>Enquire about {{ product.title }}</template>

      <div class="enquire-form">
        <el-form :model="form" label-position="top">
          <el-form-item label="Name">
            <el-input v-model="form.name" placeholder="Your name" />
          </el-form-item>
          <el-form-item label="Email">
            <el-input v-model="form.email" placeholder="you@example.com" />
          </el-form-item>
          <el-form-item label="Message">
            <el-input
              type="textarea"
              v-model="form.message"
              placeholder="Tell us about your project or ask a question"
              :rows="4"
            />
          </el-form-item>
        </el-form>
      </div>

      <span slot="footer" class="dialog-footer">
        <el-button @click="closeEnquire">Cancel</el-button>
        <el-button type="primary" @click="submitEnquiry"
          >Send Enquiry</el-button
        >
      </span>
    </el-dialog>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const id = route.params.id || "commercial";

/* productMap and product selection identical to previous version (omitted here for brevity in this snippet) */
const productMap = {
  commercial: {
    id: "commercial",
    title: "Commercial Lift Controller Panels",
    short:
      "Robust, modular panels — engineered for high-traffic installations.",
    long: "Commercial-grade elevator controller panels with modular I/O, redundant power options and advanced diagnostics. Suitable for medium to large installations and multi-lift configurations.",
    image: "https://placehold.co/1600x1000?text=Commercial+Panel",
    preview: [
      "https://placehold.co/1600x1000?text=Commercial+Panel+1",
      "https://placehold.co/1600x1000?text=Commercial+Panel+2",
    ],
    category: "Commercial",
    available: true,
    warranty: "1 year standard",
    installation: "On-site installation available",
    support: "Pan-India support & SLAs",
    features: [
      "Modular I/O with hot-swap support",
      "Advanced fault logging & diagnostics",
      "Redundant PSU option",
    ],
    specs: {
      "Power input": "220–240VAC, 50/60Hz",
      "Control logic": "32-bit embedded MCU",
      "Max floors supported": "64",
      "Operating temperature": "-10°C to 55°C",
      Enclosure: "IP54 / Powder-coated steel",
    },
    downloads: [
      {
        label: "Datasheet (PDF)",
        url: "https://example.com/datasheet-commercial.pdf",
      },
      {
        label: "Installation Guide",
        url: "https://example.com/install-commercial.pdf",
      },
    ],
    faq: [
      {
        q: "Does it support multiple lifts?",
        a: "Yes — with optional master-slave configuration.",
      },
      {
        q: "Can we integrate with BMS?",
        a: "Yes — optional Modbus / BACnet gateways are available.",
      },
    ],
  },

  residential: {
    id: "residential",
    title: "Residential Lift Controller Panels",
    short: "Compact, low-noise panels ideal for residential buildings.",
    long: "Space-saving controller units with enhanced noise suppression for comfortable residential ride experiences. Energy efficient modes and simple servicing.",
    image: "https://placehold.co/1600x1000?text=Residential+Panel",
    preview: ["https://placehold.co/1600x1000?text=Residential+1"],
    category: "Residential",
    available: true,
    warranty: "1 year standard",
    installation: "Compact mounting options",
    support: "Local support & maintenance",
    features: [
      "Low-noise motor control",
      "Compact footprint",
      "Energy-saving idle modes",
    ],
    specs: {
      "Power input": "220–240VAC, 50Hz",
      "Control logic": "16/32-bit MCU",
      "Max floors supported": "16",
      "Operating temperature": "-10°C to 50°C",
      Enclosure: "IP20 / Mild steel",
    },
    downloads: [
      {
        label: "Datasheet",
        url: "https://example.com/datasheet-residential.pdf",
      },
    ],
    faq: [
      {
        q: "Is this suitable for home lifts?",
        a: "Yes, designed for low-rise home and apartment lifts.",
      },
    ],
  },

  hotel: {
    id: "hotel",
    title: "Hotel Lift Controller Panels",
    short: "Guest-friendly interfaces and smooth ride tuning.",
    long: "Designed for hospitality environments with quiet drive profiles, stylish interfaces and guest modes. Integration with access control systems supported.",
    image: "https://placehold.co/1600x1000?text=Hotel+Panel",
    preview: ["https://placehold.co/1600x1000?text=Hotel+1"],
    category: "Hotel",
    available: true,
    warranty: "1 year standard",
    installation: "Custom faceplate options",
    support: "Hotel property support packages",
    features: [
      "Smooth acceleration profiles",
      "Guest mode & access control",
      "Custom faceplates",
    ],
    specs: {
      "Power input": "220–240VAC, 50/60Hz",
      "Control logic": "32-bit MCU",
      "Max floors supported": "32",
      "Operating temperature": "-5°C to 50°C",
      Enclosure: "IP54 / Powder-coated steel",
    },
    downloads: [
      {
        label: "Hotel Datasheet",
        url: "https://example.com/datasheet-hotel.pdf",
      },
    ],
    faq: [
      {
        q: "Can we customise faceplates?",
        a: "Yes — we offer custom finishes for faceplates.",
      },
    ],
  },

  hydraulic: {
    id: "hydraulic",
    title: "Hydraulic Lift Controller Panels",
    short: "Powerful controls optimized for hydraulic drives.",
    long: "Optimized for hydraulic elevator systems with pressure sensor integration and safety interlocks. Rugged power stages and service-friendly layout.",
    image: "https://placehold.co/1600x1000?text=Hydraulic+Panel",
    preview: ["https://placehold.co/1600x1000?text=Hydraulic+1"],
    category: "Hydraulic",
    available: false,
    warranty: "1 year",
    installation: "Industrial grade mounting",
    support: "Service lift specialists",
    features: [
      "Hydraulic pump control",
      "Pressure interlocks",
      "Rugged power stage",
    ],
    specs: {
      "Power input": "380–415VAC (3-phase)",
      "Control logic": "Industrial-grade PLC option",
      "Max floors supported": "12",
      "Operating temperature": "-10°C to 50°C",
      Enclosure: "IP65 / Stainless steel",
    },
    downloads: [
      { label: "Hydraulic Guide", url: "https://example.com/hydraulic.pdf" },
    ],
    faq: [
      {
        q: "Is 3-phase required?",
        a: "For large hydraulic pumps 3-phase is recommended.",
      },
    ],
  },

  service: {
    id: "service",
    title: "Service Lift Controller Panels",
    short: "Utility-grade panels for service/goods lifts.",
    long: "Simple, robust control units with maintenance-first design. Suitable for goods lifts, service elevators and cargo handling.",
    image: "https://placehold.co/1600x1000?text=Service+Panel",
    preview: ["https://placehold.co/1600x1000?text=Service+1"],
    category: "Service",
    available: true,
    warranty: "1 year",
    installation: "Utility mounting",
    support: "Field service teams",
    features: [
      "Maintenance mode",
      "Simple operator interface",
      "Durable enclosure",
    ],
    specs: {
      "Power input": "220–240VAC",
      "Control logic": "Embedded MCU",
      "Max floors supported": "8",
      "Operating temperature": "-10°C to 50°C",
      Enclosure: "IP54",
    },
    downloads: [
      { label: "Service Panel PDF", url: "https://example.com/service.pdf" },
    ],
    faq: [
      {
        q: "Can this be used for goods elevators?",
        a: "Yes, designed primarily for utility lifts.",
      },
    ],
  },

  iot: {
    id: "iot",
    title: "IoT Elevator Control Panels",
    short: "Smart connectivity, predictive maintenance and analytics.",
    long: "Next-generation panels with telematics and cloud connectivity for asset health monitoring and predictive alerts. Ideal for large portfolios and managed buildings.",
    image: "https://placehold.co/1600x1000?text=IoT+Panel",
    preview: [
      "https://placehold.co/1600x1000?text=IoT+1",
      "https://placehold.co/1600x1000?text=IoT+2",
      "https://placehold.co/1600x1000?text=IoT+3",
    ],
    category: "IoT",
    available: false,
    warranty: "1 year",
    installation: "Cloud integration available",
    support: "Analytics & support packages",
    features: [
      "Telemetry & health logs",
      "Predictive failure alerts",
      "Cloud dashboard",
    ],
    specs: {
      "Power input": "220–240VAC",
      Connectivity: "Ethernet / LTE / Wi-Fi (optional)",
      "Data export": "MQTT / REST / CSV",
      "Operating temperature": "-5°C to 50°C",
      Enclosure: "IP54",
    },
    downloads: [
      { label: "IoT Whitepaper", url: "https://example.com/iot.pdf" },
    ],
    faq: [
      {
        q: "What protocols are supported?",
        a: "MQTT, RESTful APIs and CSV export supported.",
      },
    ],
  },
};

/* selected product */
const product = productMap[id] || {
  title: "Product",
  short: "Details coming soon",
  image: "https://placehold.co/1600x1000?text=Product",
  preview: ["https://placehold.co/1600x1000?text=Product+1"],
  features: [],
  specs: {},
  downloads: [],
  faq: [],
};

/* related products (simple list) */
const related = Object.values(productMap)
  .filter((p) => p.id !== product.id)
  .slice(0, 4);

/* enquiry dialog state */
const enquireOpen = ref(false);
const form = ref({ name: "", email: "", message: "", product: product.id });

function openEnquire() {
  form.value.product = product.id;
  enquireOpen.value = true;
}

function closeEnquire() {
  enquireOpen.value = false;
}

function submitEnquiry() {
  console.log("Enquiry submitted", form.value);
  enquireOpen.value = false;
  alert("Thank you — your enquiry has been sent. We will contact you shortly.");
}

/* image preview: clicking a thumbnail triggers Element Plus preview via main image click */
function openPreview(index = 0) {
  const main = document.querySelector(".big-img .el-image__img");
  if (main) main.click();
}

/* small UI state for FAQ */
const openFaq = ref([]);
</script>

<style lang="scss" scoped>
.product-details {
  padding: 1.6rem 0;
  margin-top: 50px;
}
/* ensure predictable sizing */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* container */
.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1rem;
}

/* Main content layout: safe column sizing so image never overflows */
.content {
  display: grid;
  grid-template-columns: minmax(260px, 520px) 1fr; /* image column constrained */
  gap: 1.6rem;
  align-items: start;
  margin-top: 1rem;
}

/* Image column */
.image-col {
  .big-img {
    width: 100%;
    max-width: 100%;
    max-height: 520px;
    object-fit: contain;
    border-radius: 10px;
    box-shadow: 0 14px 40px rgba(2, 6, 23, 0.06);
    background: #f6f8fb;
    display: block;
    cursor: zoom-in;
  }

  .thumbs {
    margin-top: 0.8rem;
    display: flex;
    gap: 0.6rem;
    overflow-x: auto; /* avoid forcing wider layout on small screens */
    padding-bottom: 6px;
  }
  .thumb {
    border: none;
    background: transparent;
    padding: 0;
    cursor: pointer;
    img {
      width: 84px;
      height: 56px;
      object-fit: cover;
      border-radius: 6px;
      box-shadow: 0 6px 18px rgba(2, 6, 23, 0.06);
      display: block;
    }
  }
}

/* Info column */
.info-col {
  min-width: 0; /* allow text to wrap instead of overflow */
  .title {
    margin: 0 0 0.4rem;
    font-size: 1.35rem;
    word-break: break-word;
  }
  .short {
    margin: 0 0 0.6rem;
    color: rgba(0, 0, 0, 0.7);
    overflow-wrap: break-word;
  }
  .meta {
    display: flex;
    gap: 1.2rem;
    margin-bottom: 0.8rem;
    flex-wrap: wrap;
  }
  .status {
    color: #0b6cff;
    font-weight: 700;
  }
  .section {
    margin-top: 0.8rem;
  }
  .features ul,
  .overview p {
    margin: 0.4rem 0 0;
  }
  .features li {
    margin-bottom: 0.35rem;
  }
  .cta-row {
    margin-top: 1rem;
    display: flex;
    gap: 0.6rem;
    flex-wrap: wrap;
  }
  .quickfacts {
    display: flex;
    gap: 0.75rem;
    margin-top: 1rem;
    flex-wrap: wrap;
  }
  .fact {
    background: #f8fafc;
    padding: 0.6rem 0.9rem;
    border-radius: 8px;
    min-width: 120px;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }
}

/* specs table */
.specs {
  margin-top: 1.8rem;
}
.spec-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 0.6rem;
}
.spec-table th {
  text-align: left;
  padding: 0.8rem 1rem 0.8rem 0;
  color: #0b6cff;
  font-weight: 700;
  vertical-align: top;
  width: 220px;
}
.spec-table td {
  padding: 0.6rem 0;
  color: rgba(0, 0, 0, 0.75);
}

/* extras */
.extras {
  margin-top: 1.6rem;
  display: grid;
  grid-template-columns: 1fr 320px;
  gap: 1rem;
}

/* related */
.related {
  margin-top: 1.6rem;
}
.related-list {
  list-style: none;
  padding: 0;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}
.related-list a {
  color: #0b6cff;
  text-decoration: none;
}

/* enquire form spacing */
.enquire-form .el-form {
  margin-top: 0.2rem;
}

/* Responsive tweaks */
@media (max-width: 980px) {
  .content {
    grid-template-columns: 1fr;
  }
  .image-col .big-img {
    max-height: 420px;
  }
  .extras {
    grid-template-columns: 1fr;
  }
  .spec-table th {
    width: 160px;
  }
}
@media (max-width: 520px) {
  .image-col .big-img {
    max-height: 320px;
  }
  .thumb img {
    width: 68px;
    height: 48px;
  }
  .spec-table th {
    width: 140px;
  }
}
</style>
