<template>
  <section class="about-page">
    <!-- Hero -->
    <header class="about-hero" data-aos="fade-down">
      <div class="container hero-inner">
        <div class="hero-text">
          <h1>About Elegant Elevators</h1>
          <p class="lead">
            Elegant Embedded (Elegant Elevators) engineers reliable,
            safety-first elevator controller panels and smart IoT systems for
            commercial, residential and hospitality markets. We combine
            industrial-grade hardware with intuitive control software to keep
            buildings moving.
          </p>

          <ul class="kpis" aria-hidden="true">
            <li><strong>15+</strong><span>Years experience</span></li>
            <li><strong>1000+</strong><span>Panels installed</span></li>
            <li><strong>Pan-India</strong><span>Service & support</span></li>
          </ul>
        </div>

        <div class="hero-image" data-aos="zoom-in">
          <img
            src="https://placehold.co/720x440?text=Elegant+Panels"
            alt="Elegant control panels"
          />
        </div>
      </div>
    </header>

    <!-- Mission / Vision -->
    <section class="mission container" data-aos="fade-up">
      <div class="card">
        <h2>Our Mission</h2>
        <p>
          To design and deliver elevator control systems that prioritise safety,
          reliability and operational simplicity — reducing downtime and
          improving passenger experience.
        </p>
      </div>

      <div class="card">
        <h2>Our Vision</h2>
        <p>
          To be the trusted provider of intelligent elevator control and IoT
          solutions across buildings worldwide — empowering smarter, safer
          vertical transport.
        </p>
      </div>
    </section>

    <!-- Values -->
    <section class="values container" data-aos="fade-up">
      <h2>Core Values</h2>
      <div class="values-grid">
        <div class="value" data-aos="fade-up" data-aos-delay="60">
          <div class="icon">🔒</div>
          <h3>Safety First</h3>
          <p>
            All designs follow strict safety and testing protocols to protect
            passengers and equipment.
          </p>
        </div>

        <div class="value" data-aos="fade-up" data-aos-delay="120">
          <div class="icon">⚙️</div>
          <h3>Engineering Excellence</h3>
          <p>
            Robust hardware and modular architectures make servicing faster and
            upgrades simple.
          </p>
        </div>

        <div class="value" data-aos="fade-up" data-aos-delay="180">
          <div class="icon">📶</div>
          <h3>Smart & Connected</h3>
          <p>
            IoT-enabled monitoring for predictive maintenance and analytics —
            less downtime, better insights.
          </p>
        </div>

        <div class="value" data-aos="fade-up" data-aos-delay="240">
          <div class="icon">🤝</div>
          <h3>Customer Driven</h3>
          <p>
            On-site support, training and customization to fit each project’s
            needs.
          </p>
        </div>
      </div>
    </section>

    <!-- Timeline / milestones -->
    <section class="timeline container" data-aos="fade-up">
      <h2>Milestones</h2>
      <ol class="timeline-list">
        <li>
          <strong>2010</strong>
          <p>
            Company founded — started with industrial controllers and custom
            embedded systems.
          </p>
        </li>
        <li>
          <strong>2015</strong>
          <p>
            Expanded into elevator control panels and servicing local commercial
            projects.
          </p>
        </li>
        <li>
          <strong>2019</strong>
          <p>
            Launched IoT-enabled monitoring for predictive maintenance pilots.
          </p>
        </li>
        <li>
          <strong>2023</strong>
          <p>
            Scaled installations across multi-city sites with pan-India support.
          </p>
        </li>
      </ol>
    </section>

    <!-- Team preview -->
    <section class="team container" data-aos="fade-up">
      <h2>Leadership & Team</h2>
      <div class="team-grid">
        <div class="member" data-aos="zoom-in" data-aos-delay="60">
          <img src="https://placehold.co/240x240?text=CEO" alt="CEO" />
          <h4>Founder & CEO</h4>
          <p>Product strategy & industry partnerships</p>
        </div>

        <div class="member" data-aos="zoom-in" data-aos-delay="120">
          <img src="https://placehold.co/240x240?text=CTO" alt="CTO" />
          <h4>Chief Technical Officer</h4>
          <p>Hardware & firmware engineering</p>
        </div>

        <div class="member" data-aos="zoom-in" data-aos-delay="180">
          <img src="https://placehold.co/240x240?text=OPS" alt="Operations" />
          <h4>Head of Operations</h4>
          <p>Installations & field service</p>
        </div>

        <div class="member" data-aos="zoom-in" data-aos-delay="240">
          <img src="https://placehold.co/240x240?text=SALES" alt="Sales" />
          <h4>Sales & Support</h4>
          <p>Customer success & enquiries</p>
        </div>
      </div>
    </section>

    <!-- Contact CTA -->
    <section class="contact-cta container" data-aos="fade-up">
      <div class="cta-card">
        <h3>Get a consultation or quotation</h3>
        <p>
          Contact our sales team to discuss your elevator project — panel
          specifications, installation and ongoing maintenance.
        </p>
        <div class="cta-actions">
          <a class="btn primary" href="tel:9396671541">Call: 9396671541</a>
          <router-link class="btn outline" to="/contact"
            >Send an enquiry</router-link
          >
        </div>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  name: "AboutUs",
};
</script>

<style lang="scss" scoped>
.about-page {
  background: #f9fafb;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
  align-items: center;
}
.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1rem;
}

/* HERO */
.about-hero {
  padding: 2.2rem 0;
  .hero-inner {
    display: flex;
    gap: 1.6rem;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .hero-text {
    flex: 1 1 48%;
    min-width: 260px;
  }
  .hero-text h1 {
    margin: 0 0 0.6rem;
    font-size: 1.6rem;
    color: #fff;
  }
  .lead {
    color: rgba(255, 255, 255, 0.95);
    margin-bottom: 1rem;
  }
  .hero-image img {
    width: 100%;
    max-width: 720px;
    border-radius: 10px;
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.25);
  }
  .kpis {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
    list-style: none;
    padding: 0;
    li {
      background: rgba(255, 255, 255, 0.08);
      padding: 0.6rem 0.9rem;
      border-radius: 8px;
      display: flex;
      flex-direction: column;
      align-items: center;
      min-width: 90px;
      strong {
        font-size: 1.1rem;
        display: block;
      }
      span {
        font-size: 0.82rem;
        opacity: 0.9;
      }
    }
  }
}

/* MISSION */
.mission {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin: 1.8rem 0;
  .card {
    background: #fff;
    padding: 1.2rem;
    border-radius: 10px;
    box-shadow: 0 8px 24px rgba(3, 30, 66, 0.06);
    h2 {
      margin: 0 0 0.5rem;
    }
    p {
      margin: 0;
      color: #334155;
    }
  }
}

/* VALUES */
.values {
  margin: 1.8rem 0 0;
  h2 {
    margin-bottom: 1rem;
  }
  .values-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0.9rem;
  }
  .value {
    background: #fff;
    padding: 1rem;
    border-radius: 10px;
    text-align: center;
    box-shadow: 0 8px 24px rgba(3, 30, 66, 0.04);
    .icon {
      font-size: 1.6rem;
      margin-bottom: 0.6rem;
    }
    h3 {
      margin: 0 0 0.4rem;
    }
    p {
      margin: 0;
      color: #475569;
      font-size: 0.95rem;
    }
  }
}

/* TIMELINE */
.timeline {
  margin: 1.8rem 0;
  h2 {
    margin-bottom: 0.8rem;
  }
  .timeline-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .timeline-list li {
    display: flex;
    gap: 1rem;
    margin: 0.8rem 0;
    strong {
      width: 80px;
      color: #0b6cff;
      font-weight: 700;
      display: block;
    }
    p {
      margin: 0;
      color: #334155;
    }
  }
}

/* TEAM */
.team {
  margin: 1.8rem 0;
  h2 {
    margin-bottom: 1rem;
  }
  .team-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
  }
  .member {
    text-align: center;
    background: #fff;
    padding: 1rem;
    border-radius: 10px;
    box-shadow: 0 10px 30px rgba(2, 6, 23, 0.06);
    img {
      width: 100%;
      height: 160px;
      object-fit: cover;
      border-radius: 8px;
      margin-bottom: 0.6rem;
    }
    h4 {
      margin: 0.4rem 0 0.25rem;
    }
    p {
      margin: 0;
      color: #475569;
      font-size: 0.92rem;
    }
  }
}

/* CONTACT CTA */
.contact-cta {
  margin: 2rem 0 3rem;
  .cta-card {
    background: linear-gradient(180deg, #ffffff, #f7f9ff);
    padding: 1.2rem;
    border-radius: 10px;
    display: flex;
    gap: 1.2rem;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 12px 30px rgba(3, 30, 66, 0.06);
    .cta-actions {
      display: flex;
      gap: 0.6rem;
      align-items: center;
    }
  }
  .btn {
    display: inline-block;
    padding: 0.56rem 0.9rem;
    border-radius: 8px;
    text-decoration: none;
    font-weight: 700;
  }
  .primary {
    background: #0b6cff;
    color: #fff;
  }
  .outline {
    background: transparent;
    border: 1px solid rgba(11, 108, 255, 0.12);
    color: #0b6cff;
  }
}

/* Responsive adjustments */
@media (max-width: 980px) {
  .mission {
    grid-template-columns: 1fr;
  }
  .values .values-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .team .team-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .hero-image img {
    max-width: 560px;
  }
}
@media (max-width: 640px) {
  .hero-inner {
    flex-direction: column-reverse;
    gap: 1rem;
  }
  .hero-text {
    text-align: left;
  }
  .hero-image img {
    width: 100%;
  }
  .values .values-grid {
    grid-template-columns: 1fr;
  }
  .team .team-grid {
    grid-template-columns: 1fr;
  }
}
</style>
