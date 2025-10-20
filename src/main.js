import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "./assets/styles/main.scss";

const app = createApp(App);
app.use(router);
app.use(ElementPlus);

// 🔥 Add global scroll reset before mounting
router.afterEach(() => {
  // Always scroll window to top
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });

  // Also reset document (for Safari)
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;

  // Optional: if your .main has its own scrollbar
  const main = document.querySelector(".main");
  if (main) main.scrollTop = 0;
});

// Mount app after router hook is attached
app.mount("#app");

// Initialize animations after mounting
AOS.init({ once: true, duration: 700 });
