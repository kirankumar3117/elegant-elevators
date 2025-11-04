<template>
  <footer class="site-footer">
    <div class="container footer-inner">
      <!-- Company info -->
      <div class="footer-about">
        <h3>Elegant Embedded Solutions Pvt. Ltd.</h3>
        <p>
          Design & Manufacture of Industrial LED Solutions.<br />
          <strong>15+ years</strong> of embedded and automation expertise.
        </p>
        <p class="footer-apps">
          Applications: Traffic Signals, Airports, Railways, Bus Stations,
          Industry, Advertisement.
        </p>
      </div>

      <!-- Contact info -->
      <div class="footer-contact">
        <h4>Contact Us</h4>
        <ul>
          <li>
            <i class="fa-solid fa-phone"></i>
            <a href="tel:9396671541">9396671541</a>
          </li>
          <li>
            <i class="fa-solid fa-envelope"></i>
            <a href="mailto:info@elegantembedded.com"
              >info@elegantembedded.com</a
            >
          </li>
          <li>
            <i class="fa-solid fa-location-dot"></i>
            <address>
              3rd Floor, Plot No.7,<br />
              Surana Chowrastha, Phase-2,<br />
              IDA Cherlapally, Telangana - 500051
            </address>
          </li>
        </ul>

        <!-- 🌐 Social Links -->
        <div class="footer-socials" aria-label="Follow Elegant LEDs">
          <a
            href="https://www.instagram.com//elegant_elevators"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <img :src="instagramImg" alt="Instagram" />
          </a>
          <!-- <a
            href="https://www.facebook.com/elegantleds"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <img :src="facebookImg" alt="Facebook" />
          </a> -->
          <a
            href="https://wa.me/919396671541"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <img :src="whatsappImg" alt="WhatsApp" />
          </a>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <p>
        © {{ new Date().getFullYear() }} Elegant Embedded Solutions Pvt. Ltd.
        All rights reserved.
      </p>
    </div>
  </footer>
</template>

<script setup>
import instagramImg from "../assets/images/instagram.jpg";
import facebookImg from "../assets/images/facebook.jpg";
import whatsappImg from "../assets/images/whatsapp.jpg";
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables";

/* MAIN FOOTER STYLE */
.site-footer {
  background: #0b0b0b;
  color: #fff;
  padding-top: 2rem;
  margin-top: auto;
}

/* FLEX STRUCTURE FOR LAYOUT */
.footer-inner {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 2rem;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1rem;
}

.footer-about {
  flex: 1;
  min-width: 260px;
}
.footer-about h3 {
  margin-bottom: 0.4rem;
  font-size: 1.1rem;
  color: $accent;
}
.footer-about p {
  line-height: 1.5;
  color: #dcdcdc;
}
.footer-apps {
  margin-top: 0.6rem;
  font-size: 0.95rem;
  color: #bcbcbc;
}

/* CONTACT INFO */
.footer-contact {
  flex: 1;
  min-width: 260px;
}
.footer-contact h4 {
  margin-bottom: 0.5rem;
  color: $accent;
  font-size: 1.05rem;
}
.footer-contact ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.footer-contact li {
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
  margin-bottom: 0.6rem;
  font-size: 0.95rem;
  line-height: 1.4;
}
.footer-contact i {
  color: $accent;
  margin-top: 0.2rem;
}
.footer-contact a {
  color: #f3f3f3;
  text-decoration: none;
}
.footer-contact a:hover {
  color: $accent;
}
.footer-contact address {
  font-style: normal;
  color: #ccc;
}

/* 🌐 SOCIAL LINKS SECTION */
.footer-socials {
  display: flex;
  gap: 0.8rem;
  padding: 1rem;
}
.footer-socials a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.06);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}
.footer-socials img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.footer-socials a:hover {
  transform: translateY(-4px);
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
}

/* COPYRIGHT BAR */
.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
  padding: 0.8rem 1rem;
  font-size: 0.9rem;
  color: #aaa;
}

/* RESPONSIVE */
@media (max-width: 700px) {
  .footer-inner {
    flex-direction: column;
    align-items: flex-start;
  }
  .footer-contact,
  .footer-about {
    width: 100%;
  }
  .footer-socials {
    justify-content: center;
    width: 100%;
    margin-top: 1.2rem;
  }
}
</style>
