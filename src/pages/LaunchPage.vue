<template>
  <section class="launch-page">
    <div class="center">
      <h1 class="brand">🎉 Elegant Elevators 🎉</h1>
      <p class="lead">smoother and safer</p>

      <div class="actions" v-if="!running">
        <button
          class="launch-btn"
          @click="startCountdown"
          aria-label="Start launch countdown"
        >
          Launch
        </button>
      </div>

      <!-- <div v-else class="preview">
        <div class="preview-text">Launching in</div>
        <div class="count-display" aria-live="polite">{{ displaySeconds }}</div>
      </div> -->
    </div>

    <!-- overlay shown during countdown -->
    <div
      v-if="overlayVisible"
      class="overlay"
      role="status"
      aria-live="assertive"
    >
      <div class="overlay-center" v-show="displaySeconds > 0">
        <div class="count-big">{{ displaySeconds }}</div>
        <!-- <div class="count-desc">seconds</div> -->
      </div>
      <canvas ref="confettiCanvas" class="confetti-canvas"></canvas>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onUnmounted } from "vue";

const running = ref(false);
const overlayVisible = ref(false);
const seconds = ref(10); // 10-second manual countdown
const intervalId = ref(null);
const redirectTimeout = ref(null);
const confettiCanvas = ref(null);
let confettiInstance = null;
let rafId = null;

/** display value for UI */
const displaySeconds = computed(() => String(seconds.value).padStart(1, "0"));

/** dynamically load canvas-confetti so build doesn't fail if absent */
async function loadConfetti() {
  try {
    const mod = await import("canvas-confetti");
    // bind to canvas for full-screen drawing & auto-resize
    if (confettiCanvas.value && typeof mod.create === "function") {
      confettiInstance = mod.create(confettiCanvas.value, {
        resize: true,
        useWorker: true,
      });
    } else {
      confettiInstance = mod.default || mod;
    }
  } catch (e) {
    // confetti not available; keep confettiInstance null (graceful fallback)
    confettiInstance = null;
  }
}

/** small burst helper (safe if confetti missing) */
function burst(count = 100, origin = { x: 0.5, y: 0.2 }) {
  if (!confettiInstance) return;
  confettiInstance({
    particleCount: count,
    startVelocity: 60 + Math.random() * 60,
    spread: 300 + Math.random() * 120,
    ticks: 160,
    origin,
  });
}

/** more lively repeated bursts using RAF for full-screen effect */
function startBurstLoop(durationMs = 20000) {
  const end = Date.now() + durationMs;
  (function frame() {
    if (!confettiInstance) return;
    // multiple mini bursts per frame for richness
    burst(6 + Math.floor(Math.random() * 8), {
      x: Math.random(),
      y: Math.random() * 0.4,
    });
    burst(6 + Math.floor(Math.random() * 8), {
      x: Math.random(),
      y: Math.random() * 0.6,
    });
    if (Date.now() < end) {
      rafId = requestAnimationFrame(frame);
    } else {
      rafId = null;
    }
  })();
}

/** start the manual 10s countdown and schedule final redirect */
async function startCountdown() {
  if (running.value) return;
  running.value = true;
  overlayVisible.value = true;
  seconds.value = 10;

  await loadConfetti();

  // immediate small burst to signal start
  burst(40, { x: 0.5, y: 0.2 });

  // interval ticks each second
  intervalId.value = setInterval(() => {
    seconds.value = Math.max(0, seconds.value - 1);

    // small burst each tick for feedback
    burst(18, { x: Math.random(), y: Math.random() * 0.4 });

    if (seconds.value <= 0) {
      // clear interval
      if (intervalId.value) {
        clearInterval(intervalId.value);
        intervalId.value = null;
      }

      // final extended celebration: create a lively repeated burst loop (12-15s)
      startBurstLoop(13_000); // 13 seconds of bursts

      // big central burst right away
      burst(160, { x: 0.5, y: 0.25 });

      // redirect after brief delay to let celebration be seen
      redirectTimeout.value = setTimeout(() => {
        window.location.href = "https://elegantelevator.in";
      }, 5000);
    }
  }, 1000);
}

/** cleanup all timers and RAF on unmount */
onUnmounted(() => {
  if (intervalId.value) clearInterval(intervalId.value);
  if (redirectTimeout.value) clearTimeout(redirectTimeout.value);
  if (rafId) cancelAnimationFrame(rafId);
  try {
    if (confettiInstance && typeof confettiInstance.reset === "function")
      confettiInstance.reset();
  } catch {}
});
</script>

<style scoped>
.launch-page {
  min-height: 100vh;
  width: 100%;
  background: linear-gradient(180deg, #001b35 0%, #003c82 100%);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  box-sizing: border-box;
  text-align: center;
  font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue",
    Arial;
}

/* center area */
.center {
  max-width: 780px;
  width: 100%;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 12px;
  box-shadow: 0 12px 40px rgba(2, 6, 23, 0.45);
}

.brand {
  font-size: 1.6rem;
  margin: 0 0 0.5rem;
  font-weight: 700;
}
.lead {
  color: rgba(255, 255, 255, 0.92);
  margin-bottom: 1rem;
}

/* actions */
.actions {
  display: flex;
  justify-content: center;
}
.launch-btn {
  background: linear-gradient(180deg, #ffd28a 0%, #f7b500 100%);
  color: #000;
  padding: 0.85rem 1.3rem;
  border-radius: 12px;
  border: none;
  font-weight: 800;
  box-shadow: 0 12px 30px rgba(247, 181, 0, 0.16);
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  font-size: 1.05rem;
}
.launch-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 20px 40px rgba(247, 181, 0, 0.22);
}

/* preview while running */
.preview {
  margin-top: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}
.preview-text {
  color: rgba(255, 255, 255, 0.85);
  font-weight: 600;
}
.count-display {
  font-size: 2.6rem;
  font-weight: 900;
  letter-spacing: -1px;
  text-shadow: 0 10px 24px rgba(0, 0, 0, 0.6);
}

/* overlay during final countdown/celebration */
.overlay {
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: grid;
  place-items: center;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.35));
}

/* big center count */
.count-big {
  font-size: 8.5rem;
  font-weight: 900;
  color: #fff;
  line-height: 0.9;
  letter-spacing: -2px;
  text-shadow: 0 20px 40px rgba(0, 0, 0, 0.65);
}
.count-desc {
  margin-top: 0.6rem;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 700;
}

/* confetti canvas covers whole viewport */
.confetti-canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 5;
}

/* responsiveness */
@media (max-width: 720px) {
  .count-big {
    font-size: 5.5rem;
  }
  .count-display {
    font-size: 2rem;
  }
  .launch-btn {
    padding: 0.7rem 1rem;
    font-size: 0.98rem;
  }
}
@media (max-width: 420px) {
  .count-big {
    font-size: 4.2rem;
  }
  .brand {
    font-size: 1.2rem;
  }
}
</style>
