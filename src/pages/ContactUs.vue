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
              <span class="label-text">Name</span>
              <input
                v-model.trim="form.name"
                type="text"
                placeholder="Your full name"
                required
              />
              <small v-if="errors.name" class="error">{{ errors.name }}</small>
            </label>

            <label class="field">
              <span class="label-text">Email</span>
              <input
                v-model.trim="form.email"
                type="email"
                placeholder="name@example.com"
                required
              />
              <small v-if="errors.email" class="error">{{
                errors.email
              }}</small>
            </label>
          </div>

          <div class="row two">
            <label class="field">
              <span class="label-text">Phone (optional)</span>
              <input
                v-model.trim="form.phone"
                type="tel"
                placeholder="+91 9XXXXXXXXX"
              />
            </label>

            <label class="field">
              <span class="label-text">Product</span>
              <select v-model="form.type">
                <option value="general">General enquiry</option>
                <option value="quote">Request quote</option>
                <option value="support">Technical support</option>
                <option value="partner">Partnership / Distribution</option>
              </select>
            </label>
          </div>

          <label class="field">
            <span class="label-text">Message</span>
            <textarea
              v-model.trim="form.message"
              rows="6"
              placeholder="Briefly describe your requirement, location, timeline..."
            ></textarea>
            <small v-if="errors.message" class="error">{{
              errors.message
            }}</small>
          </label>

          <div class="form-actions">
            <button class="btn primary" type="submit" :disabled="sending">
              {{ sending ? "Sending..." : "Send Message" }}
            </button>

            <button
              class="btn ghost"
              type="button"
              @click="resetForm"
              :disabled="sending"
            >
              Reset
            </button>

            <button
              class="btn accent"
              type="button"
              @click="requestQuote"
              :disabled="quoteLoading"
            >
              {{ quoteLoading ? "Requesting..." : "Request Quote" }}
            </button>

            <a
              :href="brochureUrl"
              class="download"
              target="_blank"
              rel="noopener"
            >
              ⤓ Download Brochure
            </a>
          </div>

          <div
            v-if="statusMessage"
            :class="['status', statusOk ? 'ok' : 'fail']"
            role="status"
            aria-live="polite"
          >
            {{ statusMessage }}
          </div>
        </form>

        <p class="small-note muted">
          This form is for general enquiries. For urgent technical support, call
          us directly.
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
            <button class="mini" @click="copy(phone)" aria-label="Copy phone">
              Copy
            </button>
          </div>

          <div class="contact-card">
            <div class="icon" aria-hidden>✉️</div>
            <div>
              <div class="label">Email</div>
              <a class="value" :href="`mailto:${email}`">{{ email }}</a>
              <div class="meta muted">General & Sales</div>
            </div>
            <button class="mini" @click="copy(email)" aria-label="Copy email">
              Copy
            </button>
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
            <button
              class="mini"
              @click="copy(address)"
              aria-label="Copy address"
            >
              Copy
            </button>
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
            title="Elegant Embedded Solutions location"
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

    <!-- FAQ accordion -->
    <section class="faq card" aria-labelledby="faq-heading">
      <h2 id="faq-heading">Frequently asked questions</h2>

      <div class="accordion">
        <button class="acc-toggle" @click="toggleFaq(0)">
          <span>What types of LED displays do you offer?</span>
          <span class="acc-caret">{{ openFaq === 0 ? "−" : "+" }}</span>
        </button>
        <div v-show="openFaq === 0" class="acc-panel">
          We offer Single Color, Multi Color, Full Color displays, LED Video
          Walls and Flexible LED solutions for creative installations.
        </div>

        <button class="acc-toggle" @click="toggleFaq(1)">
          <span>Do you provide installation and commissioning?</span>
          <span class="acc-caret">{{ openFaq === 1 ? "−" : "+" }}</span>
        </button>
        <div v-show="openFaq === 1" class="acc-panel">
          Yes — we provide on-site commissioning and can coordinate with local
          installation partners to ensure correct setup and calibration.
        </div>

        <button class="acc-toggle" @click="toggleFaq(2)">
          <span>Can I get a datasheet and technical drawings?</span>
          <span class="acc-caret">{{ openFaq === 2 ? "−" : "+" }}</span>
        </button>
        <div v-show="openFaq === 2" class="acc-panel">
          Yes — product datasheets and mechanical drawings are available. Use
          the contact form or email to request specific datasheets.
        </div>

        <button class="acc-toggle" @click="toggleFaq(3)">
          <span>What is the typical lead time?</span>
          <span class="acc-caret">{{ openFaq === 3 ? "−" : "+" }}</span>
        </button>
        <div v-show="openFaq === 3" class="acc-panel">
          Typical lead time is <strong>{{ defaultLeadTime }}</strong
          >. For custom specs or larger quantities it may vary — contact us for
          a precise schedule.
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, reactive } from "vue";

/* --- Config / contact data --- */
const phone = "+919396671541";
const email = "info@elegantembedded.com";
const address = `3rd Floor, Plot No.7,
Surana Chowrastha, Phase-2,
IDA Cherlapally, Telangana - 500051`;

const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(
  address
)}&output=embed`;
const brochureUrl = "/datasheets/company-brochure.pdf";
const defaultLeadTime = "4–6 weeks";

/* --- Form state & validation --- */
const form = reactive({
  name: "",
  email: "",
  phone: "",
  type: "general",
  message: "",
});

const errors = reactive({ name: "", email: "", message: "" });
const sending = ref(false);
const quoteLoading = ref(false);
const statusMessage = ref("");
const statusOk = ref(false);

/* --- small helpers --- */
function isValidEmail(v) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

function clearErrors() {
  errors.name = "";
  errors.email = "";
  errors.message = "";
}

function validate() {
  clearErrors();
  let ok = true;
  if (!form.name.trim()) {
    errors.name = "Please enter your name";
    ok = false;
  }
  if (!form.email.trim()) {
    errors.email = "Please enter an email";
    ok = false;
  } else if (!isValidEmail(form.email.trim())) {
    errors.email = "Please enter a valid email address";
    ok = false;
  }
  if (!form.message.trim() || form.message.trim().length < 6) {
    errors.message = "Please provide a short message (min 6 characters)";
    ok = false;
  }
  return ok;
}

/* --- actions --- */
async function handleSubmit() {
  statusMessage.value = "";
  statusOk.value = false;

  if (!validate()) return;

  sending.value = true;
  try {
    // open user's mail client prefilled
    const subject = encodeURIComponent(`Enquiry: ${form.type} — ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    statusMessage.value =
      "Mail client opened — please send the message from your mail app.";
    statusOk.value = true;
  } catch (e) {
    statusMessage.value =
      "Unable to open mail client. Please email us directly.";
    statusOk.value = false;
  } finally {
    sending.value = false;
    setTimeout(() => (statusMessage.value = ""), 4500);
  }
}

function resetForm() {
  form.name = "";
  form.email = "";
  form.phone = "";
  form.type = "general";
  form.message = "";
  clearErrors();
  statusMessage.value = "";
  statusOk.value = false;
}

async function requestQuote() {
  statusMessage.value = "";
  if (!form.name || !form.email) {
    statusMessage.value =
      "Please fill your name and email before requesting a quote.";
    statusOk.value = false;
    setTimeout(() => (statusMessage.value = ""), 3500);
    return;
  }
  quoteLoading.value = true;
  try {
    // simulate API call
    await new Promise((r) => setTimeout(r, 800));
    statusMessage.value =
      "Quote request received — our sales team will contact you shortly.";
    statusOk.value = true;
  } catch {
    statusMessage.value = "Could not request quote — try again later.";
    statusOk.value = false;
  } finally {
    quoteLoading.value = false;
    setTimeout(() => (statusMessage.value = ""), 4000);
  }
}

/* click-to-copy helper */
async function copy(text) {
  try {
    await navigator.clipboard.writeText(text);
    statusMessage.value = "Copied to clipboard";
    statusOk.value = true;
  } catch {
    statusMessage.value = "Unable to copy";
    statusOk.value = false;
  } finally {
    setTimeout(() => (statusMessage.value = ""), 1800);
  }
}

/* FAQ accordion state */
const openFaq = ref(null);
function toggleFaq(i) {
  openFaq.value = openFaq.value === i ? null : i;
}
</script>

<style scoped lang="scss">
/* variables (easy to change) */
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
  background: var(--accent);
  color: #000;
  box-shadow: 0 10px 30px rgba(247, 181, 0, 0.12);
}
.btn.ghost {
  background: transparent;
  border: 1px solid #dde9ff;
  color: var(--text);
}
.btn.accent {
  background: var(--primary);
  color: #fff;
}

/* download link */
.download {
  margin-left: 0.6rem;
  color: var(--primary);
  text-decoration: none;
  font-weight: 600;
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
.contact-card .mini {
  position: absolute;
  right: 8px;
  top: 8px;
  border: none;
  background: #eef3ff;
  color: var(--primary);
  padding: 0.26rem 0.45rem;
  border-radius: 6px;
  font-weight: 700;
  cursor: pointer;
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

/* FAQ */
.faq {
  margin-top: 1.6rem;
}
.accordion {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.acc-toggle {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.85rem 1rem;
  width: 100%;
  border-radius: 8px;
  background: #f8fbff;
  border: 1px solid #e8f4ff;
  cursor: pointer;
  font-weight: 700;
}
.acc-panel {
  padding: 0.85rem 1rem;
  background: #fff;
  border-radius: 8px;
  border: 1px solid #f1f5fb;
  color: #233645;
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
  .download {
    display: block;
    margin-top: 0.6rem;
  }
  .btn.accent {
    width: 100%;
    margin-top: 6px;
  }
}
</style>
