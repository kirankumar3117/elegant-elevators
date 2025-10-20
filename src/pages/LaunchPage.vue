<template>
  <section class="launch-page">
    <div class="overlay">
      <h1 class="title">🎉 Elegant Elevators Launching Soon 🎉</h1>

      <div class="timer">
        <div class="time-block">
          <span class="num">{{ timeLeft.hours }}</span>
          <span class="label">Hours</span>
        </div>
        <div class="time-block">
          <span class="num">{{ timeLeft.minutes }}</span>
          <span class="label">Minutes</span>
        </div>
        <div class="time-block">
          <span class="num">{{ timeLeft.seconds }}</span>
          <span class="label">Seconds</span>
        </div>
      </div>

      <p class="note">
        Launching <strong>elegantelevator.in</strong> at exactly 11:00 AM
      </p>
    </div>

    <!-- confetti canvas -->
    <canvas id="confetti-canvas"></canvas>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import confetti from "canvas-confetti"; // npm install canvas-confetti

const timeLeft = ref({ hours: "00", minutes: "00", seconds: "00" });

function updateCountdown() {
  // target launch time: today 11:00 AM
  const now = new Date();
  const target = new Date();
  target.setHours(7, 23, 0, 0);

  const diff = target - now;

  if (diff <= 0) {
    // time reached -> trigger confetti and redirect
    triggerLaunch();
    return;
  }

  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  timeLeft.value = {
    hours: String(hours).padStart(2, "0"),
    minutes: String(minutes).padStart(2, "0"),
    seconds: String(seconds).padStart(2, "0"),
  };
}

let timer;
onMounted(() => {
  updateCountdown();
  timer = setInterval(updateCountdown, 1000);
});

onUnmounted(() => clearInterval(timer));

function triggerLaunch() {
  // celebration effect
  const duration = 4000;
  const end = Date.now() + duration;
  (function frame() {
    confetti({
      particleCount: 4,
      startVelocity: 30,
      spread: 360,
      ticks: 60,
      origin: {
        x: Math.random(),
        y: Math.random() - 0.2,
      },
    });
    if (Date.now() < end) {
      requestAnimationFrame(frame);
    } else {
      // redirect after short delay
      setTimeout(() => {
        window.location.href = "https://elegantelevator.in";
      }, 1500);
    }
  })();
}
</script>

<style scoped>
.launch-page {
  height: 100vh;
  width: 100%;
  position: relative;
  background: radial-gradient(circle at center, #002e5d 0%, #001b35 100%);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  text-align: center;
}

.overlay {
  z-index: 10;
}

.title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2rem;
  text-shadow: 0 4px 20px rgba(255, 255, 255, 0.2);
}

.timer {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 1rem;
}

.time-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
  padding: 1rem 1.2rem;
  border-radius: 12px;
  min-width: 80px;
}

.num {
  font-size: 2rem;
  font-weight: 700;
}

.label {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.8);
  margin-top: 0.3rem;
}

.note {
  margin-top: 1rem;
  color: rgba(255, 255, 255, 0.7);
  font-size: 1rem;
}

canvas#confetti-canvas {
  position: absolute;
  inset: 0;
  z-index: 5;
  pointer-events: none;
}
</style>
