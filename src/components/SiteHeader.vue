<template>
  <header class="site-header">
    <div class="container header-inner">
      <!-- Logo + brand -->
      <div class="logo" @click="navigate('/')">
        <img :src="logoUrl" alt="Elegant Elevators Logo" class="logo-img" />
        <div class="brand-wrap">
          <h1 class="brand-title">Elegant Elevators</h1>
          <div class="brand-tagline">Smoother &amp; Safer</div>
        </div>
      </div>

      <!-- Navigation -->
      <nav class="nav" aria-label="Main navigation">
        <router-link
          to="/"
          class="nav-link"
          exact-active-class="router-link-active"
          >Home</router-link
        >
        <router-link
          to="/about"
          class="nav-link"
          exact-active-class="router-link-active"
          >About Us</router-link
        >
        <router-link
          to="/products"
          class="nav-link"
          exact-active-class="router-link-active"
          >Products</router-link
        >
        <router-link
          to="/contact"
          class="nav-link"
          exact-active-class="router-link-active"
          >Contact Us</router-link
        >
      </nav>

      <!-- Social icons -->
      <div class="socials" aria-label="Follow Elegant Elevators">
        <a
          class="social-link"
          href="https://www.instagram.com//elegant_elevators"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <img :src="instagramImg" alt="Instagram" class="social-img" />
        </a>

        <!-- <a
          class="social-link"
          href="https://www.facebook.com/elegantelevators"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <img :src="facebookImg" alt="Facebook" class="social-img" />
        </a> -->

        <a
          class="social-link"
          href="https://wa.me/919396671541"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
        >
          <img :src="whatsappImg" alt="WhatsApp" class="social-img" />
        </a>
      </div>
    </div>
  </header>
</template>

<script setup>
import { useRouter } from "vue-router";
import logoUrl from "../assets/logo.png";
import instagramImg from "../assets/images/instagram.jpg";
import facebookImg from "../assets/images/facebook.jpg";
import whatsappImg from "../assets/images/whatsapp.jpg";

const router = useRouter();
const navigate = (path) => {
  if (router.currentRoute.value.path !== path) {
    router.push(path);
  }
};
</script>

<style scoped lang="scss">
.site-header {
  background: linear-gradient(180deg, #003c82 0%, #00335f 100%);
  color: #fff;
  box-shadow: 0 2px 8px rgba(3, 30, 66, 0.18);
  padding: 0.4rem 0;
}

/* layout container */
.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.6rem 1.25rem;
  max-width: 1100px;
  margin: 0 auto;
  gap: 1rem;
}

/* logo + brand */
.logo {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  cursor: pointer;
  user-select: none;
}

.logo-img {
  width: 52px;
  height: 52px;
  object-fit: cover;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.06);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.2);
  transition: transform 0.25s ease;
}
.logo:hover .logo-img {
  transform: scale(1.05);
}

.brand-wrap {
  display: flex;
  flex-direction: column;
  line-height: 1.1;
}
.brand-title {
  text-transform: uppercase;
  margin: 0;
  color: #fff;
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: 0.3px;
  white-space: nowrap;
}
.brand-tagline {
  margin-top: 3px;
  font-size: 0.86rem;
  font-weight: 700;
  color: #ffd95a;
  background: linear-gradient(
    90deg,
    #ffd95a 0%,
    #ffca28 35%,
    #f7b500 65%,
    #ffd95a 100%
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  text-shadow: 0 1px 6px rgba(247, 196, 77, 0.2);
  animation: goldShine 3s linear infinite;
  white-space: nowrap;
}

@keyframes goldShine {
  0% {
    filter: brightness(1);
    background-position: 0% 50%;
  }
  50% {
    filter: brightness(1.1);
    background-position: 100% 50%;
  }
  100% {
    filter: brightness(1);
    background-position: 0% 50%;
  }
}

/* nav links */
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
  transition: background-color 0.22s ease, transform 0.18s ease;
}
.nav-link:hover {
  background: rgba(255, 255, 255, 0.12);
  transform: translateY(-2px);
}
.nav-link.router-link-active {
  background: rgba(255, 255, 255, 0.15);
}

/* social links */
.socials {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.social-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.04);
  transition: transform 0.18s ease, background 0.18s ease;
}
.social-link:hover {
  transform: translateY(-3px);
  background: rgba(255, 255, 255, 0.1);
}
.social-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* responsive */
@media (max-width: 720px) {
  .header-inner {
    flex-direction: column;
    gap: 0.6rem;
    align-items: center;
  }
  .nav {
    justify-content: center;
    flex-wrap: wrap;
  }
  .socials {
    justify-content: center;
  }
  .brand-title {
    font-size: 1rem;
  }
  .brand-tagline {
    font-size: 0.8rem;
  }
}
</style>
