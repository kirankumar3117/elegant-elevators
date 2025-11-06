<template>
  <main class="gallery-page" data-aos="fade-up">
    <div class="container">
      <header class="gallery-header">
        <h1>Product Gallery</h1>
        <p class="muted">
          A curated gallery of our product images. Click any image to view in
          full size.
        </p>
      </header>

      <section class="grid-wrap" aria-live="polite">
        <ul class="grid" role="list">
          <li
            v-for="(item, idx) in items"
            :key="`g-${idx}`"
            class="grid-item"
            role="listitem"
          >
            <button
              class="thumb-btn"
              @click="open(idx)"
              :aria-label="`Open ${item.title} image`"
            >
              <img :src="item.image" :alt="item.title" loading="lazy" />
              <div class="overlay">
                <div class="title">{{ item.title }}</div>
              </div>
            </button>
          </li>
        </ul>
      </section>
    </div>

    <!-- Lightbox / modal -->
    <div
      v-if="isOpen"
      class="lightbox"
      @click.self="close"
      role="dialog"
      aria-modal="true"
      :aria-label="`Image viewer: ${currentItem?.title || ''}`"
    >
      <div
        class="lightbox-inner"
        @keydown.stop.prevent="onKeydown"
        tabindex="0"
        ref="lb"
      >
        <button class="close" @click="close" aria-label="Close viewer">
          ✕
        </button>

        <div class="lb-media">
          <button class="nav prev" @click="prev" aria-label="Previous image">
            ‹
          </button>

          <img :src="currentItem?.image" :alt="currentItem?.title" />

          <button class="nav next" @click="next" aria-label="Next image">
            ›
          </button>
        </div>

        <div class="lb-meta">
          <h3>{{ currentItem?.title }}</h3>
          <p class="muted">{{ currentItem?.subtitle }}</p>
          <div class="controls">
            <button @click="prev" aria-label="Previous" class="ctrl">
              Prev
            </button>
            <button @click="next" aria-label="Next" class="ctrl">Next</button>
            <button @click="close" class="ctrl">Close</button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, computed, onMounted, watch } from "vue";
import { productMap } from "../data/productData.js";
import { useRoute } from "vue-router";

/*
  Build items: prefer first gallery image, fallback to image.
  Each item: { src, title, subtitle }
*/
const items = computed(() => {
  // merge local products and any products from productMap (if present)
  return Object.values(productMap || {});
});

const isOpen = ref(false);
const currentIndex = ref(0);
const currentItem = computed(() => items.value[currentIndex.value] || null);
const lb = ref(null);

// open lightbox at index
function open(idx) {
  currentIndex.value = idx;
  isOpen.value = true;
  // focus lightbox for keyboard events after next tick
  setTimeout(() => lb.value?.focus(), 50);
}

// close
function close() {
  isOpen.value = false;
}

// prev / next with wrap
function prev() {
  if (!items.value.length) return;
  currentIndex.value =
    (currentIndex.value - 1 + items.value.length) % items.value.length;
}
function next() {
  if (!items.value.length) return;
  currentIndex.value = (currentIndex.value + 1) % items.value.length;
}

// keyboard handling while lightbox open
function onKeydown(e) {
  if (!isOpen.value) return;
  if (e.key === "Escape") close();
  if (e.key === "ArrowLeft") prev();
  if (e.key === "ArrowRight") next();
}

// if route includes product id and you want to open a specific product image automatically:
const route = useRoute();
onMounted(() => {
  // optional: if route has ?open=slug or ?open=id (not required by user, safe noop)
  const q = route.query.open;
  if (q) {
    // try to find by slug/title/id
    const idx = items.value.findIndex(
      (it) =>
        it.title?.toLowerCase().includes(String(q).toLowerCase()) ||
        it.src?.includes(String(q))
    );
    if (idx >= 0) open(idx);
  }
});

// close on route change (cleanup)
watch(
  () => route.fullPath,
  () => {
    if (isOpen.value) close();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
);
</script>

<style scoped lang="scss">
@import "../assets/styles/variables";

.gallery-page {
  padding: 2rem 0;
}
.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1rem;
}
.gallery-header {
  margin-bottom: 1.1rem;
}
.gallery-header h1 {
  margin: 0;
  color: $primary;
  font-size: 1.6rem;
}
.gallery-header .muted {
  margin: 0.4rem 0 0;
  color: $muted;
}

/* grid */
.grid-wrap {
  margin-top: 1rem;
}
.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.85rem;
  list-style: none;
  padding: 0;
  margin: 0;
}
.grid-item {
  position: relative;
}
.thumb-btn {
  width: 100%;
  height: 100%;
  border: 0;
  padding: 0;
  display: block;
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 10px 28px rgba(2, 6, 23, 0.06);
  transition: transform 180ms ease, box-shadow 180ms ease;
}
.thumb-btn:hover {
  transform: translateY(-6px);
  box-shadow: 0 18px 40px rgba(2, 6, 23, 0.12);
}
.thumb-btn img {
  display: block;
  width: 100%;
  height: 160px;
  object-fit: cover;
  vertical-align: middle;
}

/* overlay with title */
.overlay {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 0.6rem 0.8rem;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.45) 100%
  );
  color: #fff;
  display: flex;
  align-items: flex-end;
  height: 100%;
}
.title {
  font-weight: 700;
  font-size: 0.95rem;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.6);
}

/* responsive */
@media (max-width: 1100px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
  .thumb-btn img {
    height: 150px;
  }
}
@media (max-width: 760px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .thumb-btn img {
    height: 180px;
  }
}
@media (max-width: 420px) {
  .grid {
    grid-template-columns: 1fr;
  }
  .thumb-btn img {
    height: 220px;
  }
}

/* Lightbox */
.lightbox {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(5, 10, 20, 0.72);
  z-index: 1400;
  padding: 2rem;
}
.lightbox-inner {
  width: min(1100px, 96%);
  background: transparent;
  outline: none;
  display: grid;
  grid-template-columns: 1fr 360px;
  gap: 1rem;
  align-items: start;
}
.close {
  position: absolute;
  right: 1.6rem;
  top: 1.6rem;
  background: rgba(255, 255, 255, 0.06);
  border: none;
  color: #fff;
  padding: 0.4rem 0.6rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1.05rem;
}
.lb-media {
  background: #0b1220;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: 10px;
  padding: 1rem;
  min-height: 320px;
}
.lb-media img {
  max-width: 100%;
  max-height: 75vh;
  display: block;
  border-radius: 6px;
  object-fit: contain;
}
.nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.06);
  border: none;
  color: #fff;
  padding: 0.6rem 0.9rem;
  font-size: 1.8rem;
  border-radius: 8px;
  cursor: pointer;
}
.nav.prev {
  left: 12px;
}
.nav.next {
  right: 12px;
}

/* meta panel */
.lb-meta {
  background: rgba(255, 255, 255, 0.02);
  padding: 0.9rem;
  border-radius: 10px;
  color: #fff;
}
.lb-meta h3 {
  margin: 0 0 0.4rem;
  color: $accent;
}
.lb-meta .muted {
  margin: 0 0 0.75rem;
  color: #cfcfcf;
}
.controls {
  display: flex;
  gap: 0.5rem;
  margin-top: 0.6rem;
}
.ctrl {
  background: rgba(255, 255, 255, 0.06);
  color: #fff;
  padding: 0.45rem 0.7rem;
  border-radius: 8px;
  border: none;
  cursor: pointer;
}
.ctrl:hover {
  transform: translateY(-2px);
}

/* smaller screens: stack lightbox vertically */
@media (max-width: 900px) {
  .lightbox-inner {
    grid-template-columns: 1fr;
  }
  .lb-meta {
    order: 2;
  }
  .lb-media {
    order: 1;
  }
  .close {
    top: 1rem;
    right: 1rem;
  }
}
</style>
