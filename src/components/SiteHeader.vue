<template>
  <header class="site-header">
    <div class="container header-inner">
      <!-- logo and brand (left on mobile) -->
      <div class="logo" @click="navigate('/')">
        <img src="../assets/logo.png" alt="logo" class="logo-img" />
        <h1>Elegant Elevators</h1>
      </div>

      <!-- navigation -->
      <nav class="nav" aria-label="Main navigation">
        <router-link to="/" class="nav-link">Home</router-link>
        <router-link to="/about" class="nav-link">About Us</router-link>
        <router-link to="/products" class="nav-link">Products</router-link>
        <router-link to="/contact" class="nav-link">Contact Us</router-link>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();

const navigate = (path) => {
  if (router.currentRoute.value.path !== path) {
    router.push(path);
  }
};
</script>

<style lang="scss" scoped>
/* --- Header styling --- */
.site-header {
  background: linear-gradient(180deg, #003c82 0%, #00335f 100%);
  color: #fff;
  box-shadow: 0 2px 8px rgba(3, 30, 66, 0.18);
  padding: 0.4rem 0;

  .header-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.6rem 1.25rem;
    max-width: 1100px;
    margin: 0 auto;
  }

  /* --- Logo section --- */
  .logo {
    display: flex;
    align-items: center;
    gap: 0.7rem;
    cursor: pointer;
    user-select: none;

    .logo-img {
      width: 44px;
      height: 44px;
      object-fit: cover;
      border-radius: 6px;
      background: #ffffff22;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
      transition: transform 0.25s ease;
    }

    h1 {
      margin: 0;
      color: #ffffff;
      font-size: 1.05rem;
      font-weight: 600;
      letter-spacing: 0.3px;
    }

    &:hover .logo-img {
      transform: scale(1.05);
    }
  }

  /* --- Navigation links --- */
  .nav {
    display: flex;
    align-items: center;
    gap: 0.6rem;
  }

  .nav-link {
    color: #fff;
    text-decoration: none;
    padding: 0.48rem 0.9rem;
    border-radius: 8px;
    font-weight: 600;
    letter-spacing: 0.2px;
    position: relative;
    transition: background-color 0.22s ease, transform 0.18s ease,
      box-shadow 0.22s ease, opacity 0.18s ease;
    display: inline-block;
    white-space: nowrap; /* keep label on one line */
  }

  .nav-link:hover {
    background: rgba(255, 255, 255, 0.12);
    box-shadow: 0 6px 18px rgba(15, 76, 129, 0.08);
    transform: translateY(-1px);
    opacity: 0.98;
  }

  /* --- Active route highlight --- */
  .nav-link.router-link-active,
  .nav-link.router-link-exact-active {
    background: rgba(255, 255, 255, 0.12);
    box-shadow: 0 6px 18px rgba(15, 76, 129, 0.18);
  }

  .nav-link.router-link-active::after {
    content: "";
    position: absolute;
    left: 12%;
    bottom: 6px;
    width: 76%;
    height: 1.5px;
    border-radius: 4px;
    background: rgba(255, 255, 255, 0.75);
    transition: width 0.28s ease;
  }
}

/* --- Mobile behavior: title left, nav below as single row --- */
@media (max-width: 720px) {
  .header-inner {
    flex-direction: column;
    align-items: flex-start; /* keep brand on left */
    gap: 0.5rem;
    padding: 0.5rem 0.85rem;
  }

  /* nav should be a single non-wrapping row below the brand */
  .nav {
    width: 100%;
    display: flex;
    gap: 0.5rem;
    justify-content: center; /* center the nav row — change to flex-start if you want left aligned */
    flex-wrap: nowrap; /* force single line */
    -webkit-overflow-scrolling: touch;
    padding: 0.25rem 0;
    margin-top: 0.15rem;
  }

  /* hide scrollbars visually but keep scroll functionality (browser dependent) */
  .nav {
    scrollbar-width: thin;
    scrollbar-color: rgba(255, 255, 255, 0.12) transparent;
  }
  .nav::-webkit-scrollbar {
    height: 8px;
  }
  .nav::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.12);
    border-radius: 8px;
  }

  .nav-link {
    padding: 0.36rem 0.72rem;
    font-size: 0.95rem;
    flex: 0 0 auto; /* prevent growing/shrinking */
  }

  /* make the brand slightly left-shifted (smaller left padding) */
  .logo {
    padding-left: 2px;
  }
}

/* very small screens: tighten spacing */
@media (max-width: 420px) {
  .logo .logo-img {
    width: 38px;
    height: 38px;
  }
  .logo h1 {
    font-size: 0.98rem;
  }
  .nav-link {
    font-size: 0.88rem;
    padding: 0.28rem 0.6rem;
  }
}
</style>
