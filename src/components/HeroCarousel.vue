<template>
  <section
    class="hero-carousel"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
  >
    <div
      class="carousel-inner"
      :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
      role="list"
    >
      <div
        v-for="(item, idx) in items"
        :key="idx"
        class="carousel-slide"
        role="listitem"
        :aria-hidden="idx !== currentIndex"
      >
        <img
          :src="item.image"
          :alt="item.alt || `Slide ${idx + 1}`"
          class="carousel-image"
          @click="onImageClick(item)"
          draggable="false"
        />
        <div
          v-if="item.caption"
          class="carousel-caption"
          v-html="item.caption"
        ></div>
      </div>
    </div>

    <!-- prev / next controls -->
    <button class="ctrl left" @click="prev" aria-label="Previous slide">
      ‹
    </button>
    <button class="ctrl right" @click="next" aria-label="Next slide">›</button>

    <!-- indicators -->
    <div class="indicators" role="tablist" aria-label="Carousel indicators">
      <button
        v-for="(item, idx) in items"
        :key="idx"
        :class="['dot', { active: idx === currentIndex }]"
        @click="goTo(idx)"
        :aria-current="idx === currentIndex ? 'true' : 'false'"
        :aria-label="`Go to slide ${idx + 1}`"
      ></button>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from "vue";

/**
 * Props
 * - items: array of { image, alt?, caption?, target? }
 * - interval: autoplay interval (ms)
 * - hoverExtraDelay: extra delay after mouseleave (ms)
 * - manualHold: pause duration after manual nav (ms)
 */
const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
  interval: {
    type: Number,
    default: 4000,
  },
  hoverExtraDelay: {
    type: Number,
    default: 3000,
  },
  manualHold: {
    type: Number,
    default: 5000,
  },
});

const emit = defineEmits(["image-click"]);

const currentIndex = ref(0);
const timer = ref(null);
const paused = ref(false);
const lastInteraction = ref(0);
const holdUntil = ref(0);

function startTimer() {
  stopTimer();
  timer.value = setInterval(tick, 250);
}

function stopTimer() {
  if (timer.value) {
    clearInterval(timer.value);
    timer.value = null;
  }
}

function tick() {
  const now = Date.now();
  if (now < holdUntil.value) return;
  if (!lastInteraction.value) {
    lastInteraction.value = now;
    return;
  }
  if (now - lastInteraction.value >= props.interval) {
    advance();
    lastInteraction.value = now;
  }
}

function advance() {
  currentIndex.value = (currentIndex.value + 1) % props.items.length;
}

function next() {
  currentIndex.value = (currentIndex.value + 1) % props.items.length;
  pauseFor(props.manualHold);
}

function prev() {
  currentIndex.value =
    (currentIndex.value - 1 + props.items.length) % props.items.length;
  pauseFor(props.manualHold);
}

function goTo(idx) {
  currentIndex.value = idx % props.items.length;
  pauseFor(props.manualHold);
}

function pauseFor(ms) {
  const now = Date.now();
  holdUntil.value = now + ms;
  lastInteraction.value = now;
}

function onMouseEnter() {
  paused.value = true;
  holdUntil.value = Infinity;
}

function onMouseLeave() {
  paused.value = false;
  pauseFor(props.hoverExtraDelay);
}

function onImageClick(item) {
  emit("image-click", item);
  pauseFor(props.manualHold);
}

onMounted(() => {
  lastInteraction.value = Date.now();
  startTimer();
});

onBeforeUnmount(() => {
  stopTimer();
});

watch(
  () => props.interval,
  () => {
    startTimer();
  }
);
</script>

<style scoped>
.hero-carousel {
  position: relative;
  width: 100%; /* makes it narrower like your previous image */
  overflow: hidden;
  border-radius: 12px;
  background: linear-gradient(
    180deg,
    rgba(15, 76, 129, 0.04),
    rgba(15, 76, 129, 0.02)
  );
  margin: 0 auto; /* centers it if its parent isn't flexed */
  display: flex;
  align-items: center;
  justify-content: center;
}

/* sliding inner */
.carousel-inner {
  display: flex;
  transition: transform 600ms cubic-bezier(0.22, 0.9, 0.32, 1);
  will-change: transform;
}

/* each slide */
.carousel-slide {
  min-width: 100%;
  box-sizing: border-box;
  position: relative;
  user-select: none;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0rem 0;
}

/* image */
.carousel-image {
  display: block;
  width: 100%;
  height: 420px;
  object-fit: cover;
  cursor: pointer;
}

/* caption overlay */
.carousel-caption {
  position: absolute;
  left: 2rem;
  bottom: 2.2rem;
  color: #282c7a;
  background: rgba(236, 236, 236, 0.85);
  padding: 0.6rem 1rem;
  border-radius: 8px;
  font-weight: 600;
}

/* controls */
.ctrl {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 44px;
  height: 44px;
  border-radius: 8px;
  border: none;
  background: rgba(0, 0, 0, 0.35);
  color: #fff;
  font-size: 26px;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 8px 20px rgba(2, 6, 23, 0.28);
  transition: transform 160ms ease, background 160ms ease;
  z-index: 5;
}
.ctrl.left {
  left: 12px;
}
.ctrl.right {
  right: 12px;
}
.ctrl:hover {
  transform: translateY(-50%) scale(1.05);
  background: rgba(0, 0, 0, 0.48);
}

/* indicators */
.indicators {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 10px;
  display: flex;
  gap: 8px;
  z-index: 6;
}
.dot {
  width: 10px;
  height: 10px;
  border-radius: 999px;
  border: none;
  background: rgba(255, 255, 255, 0.45);
  cursor: pointer;
  transition: transform 160ms, background 160ms;
}
.dot.active {
  background: rgba(247, 181, 0, 0.95); /* accent color */
  transform: scale(1.18);
}

/* Responsive adjustments */
@media (max-width: 900px) {
  .carousel-image {
    height: 360px;
  }
}
@media (max-width: 600px) {
  .carousel-image {
    height: 260px;
  }
  .ctrl {
    width: 36px;
    height: 36px;
    font-size: 22px;
  }
  .carousel-caption {
    left: 1rem;
    bottom: 1rem;
    font-size: 0.95rem;
  }
}
</style>
