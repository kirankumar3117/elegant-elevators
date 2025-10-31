<template>
  <section
    class="product-details container"
    data-aos="fade-up"
    style="padding-top: 30px"
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
        <el-image
          :src="product.image"
          fit="contain"
          class="big-img"
          alt="product image"
        />

        <!-- small thumbnails (click opens preview gallery) -->
        <!-- <div
          class="thumbs"
          v-if="product.preview && product.preview.length > 1"
        >
          <button
            v-for="(t, i) in product.preview"
            :key="i"
            class="thumb"
            @click="openPreview(i)"
            :aria-label="`Open image ${i + 1}`"
          >
            <img :src="t" :alt="`${product.title} preview ${i + 1}`" />
          </button>
        </div> -->
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

        <!-- Application Areas -->
        <section
          class="section application-areas"
          aria-labelledby="application-heading"
        >
          <h3 id="application-heading">Application Areas</h3>
          <ul>
            <li
              v-for="(area, index) in product.applicationAreas"
              :key="index"
              class="highlighted-area"
            >
              {{ area }}
            </li>
          </ul>
        </section>

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
          <!-- <el-button type="text" size="medium" @click="scrollToSpecs"
            >View Specs</el-button
          > -->
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
      <!-- <div class="downloads">
        <h3>Downloads</h3>
        <ul>
          <li v-for="(d, i) in product.downloads" :key="i">
            <a :href="d.url" target="_blank" rel="noopener noreferrer">{{
              d.label
            }}</a>
          </li>
        </ul>
      </div> -->

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

    <!-- Related products -->
    <section class="related container" data-aos="fade-up">
      <h3>You may also like</h3>
      <ul class="related-list">
        <li v-for="r in related" :key="r.id">
          <router-link :to="{ name: 'ProductDetails', params: { id: r.id } }">
            {{ r.title }}
          </router-link>
        </li>
      </ul>
    </section>

    <!-- Enquiry dialog -->
    <el-dialog
      v-model="enquireOpen"
      width="540px"
      :before-close="closeEnquire"
      append-to-body
      custom-class="ee-enquire-dialog-wrapper"
    >
      <template #title>Enquire about {{ product.title }}</template>

      <div class="enquire-dialog-body">
        <!-- Selected Product Summary -->
        <!-- <div class="enquiry-product-summary">
          <img :src="product.image" alt="Product Image" class="product-thumb" />
          <div class="product-info">
            <h4>{{ product.title }}</h4>
            <p>{{ product.short }}</p>
          </div>
        </div> -->

        <el-divider></el-divider>

        <!-- Enquiry Form -->
        <el-form :model="form" label-position="top" class="enquiry-form">
          <el-form-item label="Name" prop="name" :rules="nameRules">
            <el-input v-model="form.name" placeholder="Your name" />
          </el-form-item>

          <el-form-item label="Phone Number" prop="phone" :rules="phoneRules">
            <el-input
              v-model="form.phone"
              placeholder="Your phone number"
              maxlength="10"
              @input="handlePhoneInput"
              clearable
            />
          </el-form-item>

          <el-form-item label="Email">
            <el-input v-model="form.email" placeholder="you@example.com" />
          </el-form-item>

          <el-form-item label="Company Name">
            <el-input v-model="form.company" placeholder="Your company name" />
          </el-form-item>

          <!-- NEW ROW: Product being enquired -->
          <el-form-item label="Product Enquiring About">
            <el-select
              v-model="form.product"
              placeholder="Select Product"
              disabled
            >
              <el-option :label="product.title" :value="product.title" />
            </el-select>
          </el-form-item>
        </el-form>
      </div>

      <template #footer>
        <div class="dialog-footer">
          <el-button @click="closeEnquire">Cancel</el-button>
          <el-button
            type="primary"
            :loading="isSubmitting"
            @click="submitEnquiry"
            >Send Enquiry</el-button
          >
        </div>
      </template>
    </el-dialog>
  </section>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { productMap, relatedProducts } from "../data/productData.js";
import emailjs from "emailjs-com";
import { ElNotification } from "element-plus";

const route = useRoute();
const router = useRouter();
const isSubmitting = ref(false);
const enquireOpen = ref(false);
const form = ref({
  name: "",
  phone: "",
  email: "",
  company: "",
  product: "",
});
const openFaq = ref([]);

const id = route.params.id || "commercial";
const product = ref({});
const related = ref([]);

const nameRules = [
  { required: true, message: "Please enter your name", trigger: "blur" },
];
const phoneRules = [
  {
    required: true,
    message: "Please enter your phone number",
    trigger: "blur",
  },
  {
    pattern: /^[0-9]{10}$/,
    message: "Phone number must be exactly 10 digits",
    trigger: ["blur", "change"],
  },
];

const safeString = (v) =>
  v === null || v === undefined || v === "" ? "-" : String(v);

function openEnquire() {
  form.value.product = product.value.title; // auto-fill selected product
  enquireOpen.value = true;
}

function closeEnquire() {
  enquireOpen.value = false;
}

function handlePhoneInput(value) {
  // Remove all non-numeric characters
  form.value.phone = value.replace(/\D/g, "").slice(0, 10);
}

function submitEnquiry() {
  // Validation
  if (!form.value.name || !form.value.phone) {
    ElNotification({
      title: "Missing Details",
      message: "Name and phone number are required.",
      type: "warning",
    });
    return;
  }

  // Build sanitized params
  const templateParams = {
    from_name: safeString(form.value.name),
    from_phone: safeString(form.value.phone),
    from_email: safeString(form.value.email),
    from_company: safeString(form.value.company),
    product: safeString(product.value?.title || ""),
  };

  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const ADMIN_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  // 1️⃣ Always send admin email
  emailjs
    .send(SERVICE_ID, ADMIN_TEMPLATE_ID, templateParams, PUBLIC_KEY)
    .then(() => {
      ElNotification({
        title: "Success",
        message: "Your enquiry has been submitted successfully.",
        type: "success",
      });
      closeEnquire();
    })
    .catch((error) => {
      console.error("EmailJS Error:", error);
      ElNotification({
        title: "Error",
        message: "There was a problem submitting your enquiry. Try again.",
        type: "error",
      });
    });
}
function loadProductData() {
  const id = route.params.id || "commercial";
  product.value = productMap[id] || {};
  related.value = relatedProducts(id);
  window.scrollTo({ top: 0, behavior: "smooth" });
}
watch(
  () => route.params.id,
  () => {
    loadProductData();
  }
);
onMounted(() => {
  loadProductData();
  window.scrollTo({ top: 0, behavior: "smooth" });
});
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

.application-areas {
  margin-top: 1.8rem;
  ul {
    list-style-type: none;
    padding: 0;
  }
  .highlighted-area {
    font-weight: 700;
    color: #0b6cff;
    margin-bottom: 0.6rem;
  }
}

.el-input__inner {
  letter-spacing: 1px;
}

/* global (main.scss) — ensures overlay always fills the viewport */
.ee-enquire-dialog-wrapper {
  /* this class is applied to the dialog wrapper (<div class="el-dialog__wrapper ...">) */
  position: fixed !important;
  inset: 0 !important; /* top:0; right:0; bottom:0; left:0 */
  z-index: 3000 !important; /* you can raise this if needed */

  /* ensure the internal modal overlay/backdrop covers entire viewport */
  .el-overlay {
    position: fixed !important;
    inset: 0 !important;
    width: 100vw !important;
    height: 100vh !important;
    background: rgba(
      11,
      23,
      39,
      0.6
    ) !important; /* matches element-plus modal dim */
  }

  /* center the dialog box as usual (optional adjustments) */
  .el-dialog {
    margin: auto; /* center inside wrapper */
    max-width: 95% !important;
  }
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
