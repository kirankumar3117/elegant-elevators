<template>
  <main
    class="contact container"
    data-aos="fade-up"
    aria-labelledby="contact-heading"
  >
    <h1 id="contact-heading" class="page-title">Contact Us</h1>

    <div class="grid">
      <!-- LEFT: Contact form -->
      <section class="card form-card" aria-labelledby="form-heading">
        <h2 id="form-heading">Get in touch</h2>
        <p class="muted">
          Tell us about your project — we'll respond within 1 business day.
        </p>

        <form class="contact-form" @submit.prevent="handleSubmit" novalidate>
          <div class="row two">
            <label class="field">
              <span class="label-text">Name *</span>
              <input
                v-model.trim="form.name"
                type="text"
                placeholder="Your full name"
                required
              />
            </label>

            <label class="field">
              <span class="label-text">Phone *</span>
              <input
                v-model.trim="form.phone"
                type="tel"
                maxlength="10"
                placeholder="10-digit mobile number"
              />
            </label>
          </div>

          <div class="row two">
            <label class="field">
              <span class="label-text">Email</span>
              <input
                v-model.trim="form.email"
                type="email"
                placeholder="name@example.com"
              />
            </label>

            <label class="field">
              <span class="label-text">Product</span>
              <select v-model="form.product">
                <option disabled value="">Select Product</option>
                <option>Commercial Lift Controller Panels</option>
                <option>Residential Lift Controller Panels</option>
                <option>Hydraulic Lift Controller Panels</option>
                <option>Service Lift Controller Panels</option>
                <option>Hotel Lift Controller Panels</option>
                <option>IoT Elevator Control Panels</option>
              </select>
            </label>
          </div>

          <label class="field">
            <span class="label-text">Message</span>
            <textarea
              v-model.trim="form.message"
              rows="5"
              placeholder="Briefly describe your requirement..."
            ></textarea>
          </label>

          <div class="form-actions">
            <button class="btn primary" type="submit" :disabled="sending">
              <span v-if="sending">Sending...</span>
              <span v-else>Send Message</span>
            </button>

            <button
              class="btn ghost"
              type="button"
              @click="resetForm"
              :disabled="sending"
            >
              Reset
            </button>
          </div>
        </form>

        <p class="small-note muted">
          For urgent technical support, call us directly at
          <strong>{{ phone }}</strong
          >.
        </p>
      </section>

      <!-- RIGHT: Contact details + map -->
      <aside class="card info-card" aria-labelledby="contact-info-heading">
        <h3 id="contact-info-heading">Contact Information</h3>

        <div class="contact-grid">
          <div class="contact-card">
            <div class="icon" aria-hidden>📞</div>
            <div>
              <div class="label">Phone</div>
              <a class="value" :href="`tel:${phone}`">{{ phone }}</a>
              <div class="meta muted">Mon — Sat: 9:30 — 6:30</div>
            </div>
          </div>

          <div class="contact-card">
            <div class="icon" aria-hidden>✉️</div>
            <div>
              <div class="label">Email</div>
              <!-- <a
                class="value"
                :href="`mailto:${email}`"
                style="margin-top: 10px"
                >{{ email }}</a
              > -->

              <a
                class="value"
                :href="`mailto:info@elegantembedded.com`"
                style="margin-top: 10px"
                >info@elegantembedded.com</a
              >
              <div class="meta muted" style="margin-top: 10px">
                General & Sales
              </div>
            </div>
          </div>

          <div class="contact-card address">
            <div class="icon" aria-hidden>📍</div>
            <div>
              <div class="label">Location</div>
              <address class="value">{{ address }}</address>
              <div class="meta muted">Site visits by appointment</div>
              <div class="map-link">
                <a :href="mapUrl" target="_blank" rel="noopener"
                  >Open in Google Maps</a
                >
              </div>
            </div>
          </div>
        </div>

        <hr class="divider" />

        <h4>Find us</h4>
        <div
          class="map-wrap"
          role="region"
          aria-label="Company location on map"
        >
          <iframe
            title="Elegant Elevators location"
            :src="mapUrl"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <hr class="divider" />

        <h4>Quick links</h4>
        <ul class="quick-links">
          <li><router-link to="/products">Products</router-link></li>
          <li><router-link to="/about">About Us</router-link></li>
          <li><router-link to="/contact">Contact & Support</router-link></li>
        </ul>
      </aside>
    </div>
  </main>
</template>

<script setup>
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";
import emailjs from "emailjs-com";
import { ElNotification } from "element-plus";

const router = useRouter();

/* --- Config --- */
const phone = "+919396671541";
const email = "elegantelevators2@gmail.com";
const address = `3rd Floor, Plot No.7,
Surana Chowrastha, Phase-2,
IDA Cherlapally, Telangana - 500051`;

const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(
  address
)}&output=embed`;

/* --- Form State --- */
const form = reactive({
  name: "",
  phone: "",
  email: "",
  product: "",
  message: "",
});

const sending = ref(false);

/* --- Helpers --- */
const safeString = (v) => (v && v.trim() ? v.trim() : "-");

function validateForm() {
  if (!form.name || !form.phone) {
    ElNotification({
      title: "Missing Details",
      message: "Name and phone number are required.",
      type: "warning",
    });
    return false;
  }

  if (!/^[0-9]{10}$/.test(form.phone)) {
    ElNotification({
      title: "Invalid Phone Number",
      message: "Please enter a valid 10-digit phone number.",
      type: "error",
    });
    return false;
  }
  return true;
}

function resetForm() {
  form.name = "";
  form.phone = "";
  form.email = "";
  form.product = "";
  form.message = "";
}

/* --- Submit: always send admin email; only send user auto-reply if email provided (per your requirement) --- */
function handleSubmit() {
  if (!validateForm()) return;
  sending.value = true;

  const templateParams = {
    from_name: safeString(form.name),
    from_phone: safeString(form.phone),
    from_email: form.email && form.email.trim() ? form.email.trim() : "-",
    from_company: "-", // contact form has no company field
    product: form.product && form.product.trim() ? form.product.trim() : "-",
    message: form.message && form.message.trim() ? form.message.trim() : "-",
  };

  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const ADMIN_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  // send admin email always
  emailjs
    .send(SERVICE_ID, ADMIN_TEMPLATE_ID, templateParams, PUBLIC_KEY)
    .then(() => {
      ElNotification({
        title: "Success",
        message: "Your message has been sent successfully!",
        type: "success",
      });

      // if user provided an email, optionally send an auto-reply using another template (uncomment and configure if needed)
      // if (form.email && form.email.trim()) {
      //   emailjs.send(SERVICE_ID, import.meta.env.VITE_EMAILJS_REPLY_TEMPLATE_ID, {
      //     to_email: form.email.trim(),
      //     from_name: templateParams.from_name,
      //     product: templateParams.product,
      //   }, PUBLIC_KEY).catch(() => {/* ignore auto-reply errors */});
      // }

      resetForm();
      setTimeout(() => router.push("/"), 1300);
    })
    .catch((err) => {
      console.error("EmailJS Error:", err);
      ElNotification({
        title: "Error",
        message: "Unable to send your message. Please try again later.",
        type: "error",
      });
    })
    .finally(() => {
      sending.value = false;
    });
}
</script>

<style scoped lang="scss">
:root {
  --accent: #f7b500;
  --primary: #003c82;
  --muted: #6b7a8a;
  --card-bg: #ffffff;
  --text: #0f2b45;
}

/* container cap */
.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 2rem 1rem;
  box-sizing: border-box;
}

/* page title */
.page-title {
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: var(--primary);
  font-weight: 700;
}

/* grid layout */
.grid {
  display: grid;
  grid-template-columns: 1fr 380px;
  gap: 1.25rem;
  align-items: start;
}

/* card base */
.card {
  background: var(--card-bg);
  border-radius: 12px;
  padding: 1.2rem;
  box-shadow: 0 10px 30px rgba(2, 6, 23, 0.06);
  color: var(--text);
}

/* form column */
.form-card {
  padding-bottom: 1rem;
}
.form-card h2 {
  margin-top: 0;
  color: var(--primary);
}
.muted {
  color: var(--muted);
  margin-bottom: 0.8rem;
}

/* form layout helpers */
.contact-form .row {
  display: flex;
  gap: 0.9rem;
  margin-bottom: 0.8rem;
}
.row.two {
  gap: 0.9rem;
}
.field {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.label-text {
  font-weight: 700;
  margin-bottom: 0.35rem;
  color: #12304a;
}

/* inputs */
input[type="text"],
input[type="email"],
input[type="tel"],
select,
textarea {
  width: 100%;
  padding: 0.62rem 0.8rem;
  border-radius: 8px;
  border: 1px solid #e6eef8;
  background: #fff;
  font-size: 0.95rem;
  color: var(--text);
  box-sizing: border-box;
}
textarea {
  min-height: 110px;
  resize: vertical;
}

/* buttons */
.form-actions {
  display: flex;
  gap: 0.6rem;
  align-items: center;
  margin-top: 0.6rem;
  flex-wrap: wrap;
}
.btn {
  padding: 0.56rem 0.95rem;
  border-radius: 8px;
  border: none;
  font-weight: 700;
  cursor: pointer;
}
.btn.primary {
  background: #0b6cff;
  color: #fff;
  box-shadow: 0 8px 20px rgba(11, 108, 255, 0.2);
  transition: all 0.3s ease;
}
.btn.primary:hover {
  background: #084dc7;
}
.btn.ghost {
  background: transparent;
  border: 1px solid #dde9ff;
  color: var(--text);
}

/* status */
.status {
  margin-top: 0.9rem;
  padding: 0.6rem 0.75rem;
  border-radius: 8px;
  font-weight: 700;
}
.status.ok {
  background: #e8f9ef;
  color: #0a6d3a;
}
.status.fail {
  background: #fff0f0;
  color: #a02a2a;
}

/* details column */
.info-card h3 {
  margin-top: 0;
  color: var(--primary);
}
.contact-grid {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}
.contact-card {
  display: flex;
  gap: 0.8rem;
  align-items: flex-start;
  position: relative;
  padding-right: 48px;
}
.contact-card .icon {
  font-size: 1.6rem;
  color: var(--accent);
  width: 44px;
  text-align: center;
  flex: 0 0 auto;
}
.contact-card .label {
  font-size: 0.95rem;
  color: #444;
  font-weight: 700;
}
.contact-card .value {
  display: block;
  margin-top: 0.12rem;
  color: var(--text);
  font-weight: 600;
  text-decoration: none;
}
.contact-card .meta {
  margin-top: 0.25rem;
  color: var(--muted);
  font-size: 0.9rem;
}

/* map */
.divider {
  border: none;
  height: 1px;
  background: #f1f5fb;
  margin: 1rem 0;
}
.map-wrap {
  margin-top: 1rem;
  border-radius: 8px;
  overflow: hidden;
  height: 220px;
  background: #f6f9ff;
}
.map-wrap iframe {
  width: 100%;
  height: 100%;
  border: 0;
  display: block;
}

/* quick links */
.quick-links {
  list-style: none;
  padding: 0;
  margin: 0.6rem 0 0 0;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}
.quick-links a {
  color: var(--primary);
  text-decoration: none;
}
.quick-links a:hover {
  color: #f7b500;
}

/* small helpers */
.small-note {
  margin-top: 0.8rem;
  color: var(--muted);
  font-size: 0.95rem;
}

/* responsive */
@media (max-width: 980px) {
  .grid {
    grid-template-columns: 1fr;
  }
  .map-wrap {
    height: 200px;
  }
  .contact-card .icon {
    width: 40px;
  }
}

@media (max-width: 560px) {
  .map-wrap {
    height: 160px;
  }
  .contact-card .icon {
    width: 36px;
    font-size: 1.25rem;
  }
  .btn.primary {
    width: 100%;
    margin-top: 6px;
  }
}
</style>
