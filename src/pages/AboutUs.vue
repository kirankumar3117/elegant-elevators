<template>
  <section class="about-page">
    <!-- Hero -->
    <header class="about-hero" data-aos="fade-down">
      <div class="container hero-inner">
        <div class="hero-text">
          <h1>About Elegant Elevators</h1>

          <!-- Expanded intro content -->
          <p class="lead">
            Elegant Embedded (trading as <strong>Elegant Elevators</strong>)
            designs and manufactures elevator controller panels and intelligent
            IoT monitoring solutions for commercial, residential and hospitality
            markets. Our systems focus on safety, uptime and ease of service —
            combining rugged embedded hardware, industry-proven motor control
            and cloud-enabled diagnostics.
          </p>

          <p class="lead-extended">
            We serve builders, facility managers and integrators across India
            with standardized product lines and bespoke solutions. From compact
            residential controllers to modular commercial panels and IoT
            analytics for fleet maintenance — our goal is fewer callouts and
            smoother building operations.
          </p>

          <!-- offerings & quick facts -->
          <ul class="offerings" aria-hidden="true">
            <li>Controller Panels — Commercial & Residential</li>
            <li>Hydraulic & Service Lift Solutions</li>
            <li>IoT Monitoring & Predictive Maintenance</li>
            <li>Installation, Commissioning & Service</li>
          </ul>

          <ul class="kpis" aria-hidden="true">
            <li><strong>15+</strong><span>Years experience</span></li>
            <li><strong>1000+</strong><span>Panels installed</span></li>
            <li><strong>Pan-India</strong><span>Service & support</span></li>
          </ul>

          <!-- trust badges + CTAs -->
          <div class="hero-meta">
            <div class="badges" aria-hidden="true">
              <div class="badge">ISO 9001 (Pending)</div>
              <div class="badge">Field-tested</div>
              <div class="badge">Service Network</div>
            </div>

            <div class="hero-ctas">
              <a class="btn primary" href="tel:9396671541">Call: 93966 71541</a>
              <router-link class="btn outline" to="/contact"
                >Send enquiry</router-link
              >
            </div>
          </div>

          <!-- clients strip -->
          <div class="clients" aria-hidden="true">
            <img
              src="https://placehold.co/120x40?text=Client+1"
              alt="client-1"
            />
            <img
              src="https://placehold.co/120x40?text=Client+2"
              alt="client-2"
            />
            <img
              src="https://placehold.co/120x40?text=Client+3"
              alt="client-3"
            />
            <img
              src="https://placehold.co/120x40?text=Client+4"
              alt="client-4"
            />
          </div>
        </div>

        <!-- Top image intentionally removed — kept here as comment if you want to re-enable later:
        <div class="hero-image" data-aos="zoom-in">
          <img src="https://placehold.co/720x440?text=Elegant+Panels" alt="Elegant control panels" />
        </div>
        -->
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

    <!-- Team preview (updated with provided names) -->
    <section class="team container" data-aos="fade-up">
      <h2>Leadership & Team</h2>

      <p class="team-intro">
        Our leadership blends deep embedded-systems experience with field
        service expertise and customer-focused operations.
      </p>

      <div class="team-grid">
        <div class="member" data-aos="zoom-in" data-aos-delay="60">
          <img
            src="https://placehold.co/240x240?text=K.Jagadeshwar+Reddy"
            alt="K. Jagadeshwar Reddy"
          />
          <h4>K. Jagadeshwar Reddy</h4>
          <p class="role">Chief Executive Officer (CEO)</p>
          <p class="bio">
            Leads company strategy, partnerships and business development with
            decades of industry experience.
          </p>
        </div>

        <div class="member" data-aos="zoom-in" data-aos-delay="120">
          <img
            src="https://placehold.co/240x240?text=V.+Sandeep+Reddy"
            alt="V. Sandeep Reddy"
          />
          <h4>V. Sandeep Reddy</h4>
          <p class="role">Chief Technical Officer (CTO)</p>
          <p class="bio">
            Heads hardware and firmware architecture — responsible for product
            engineering and technical direction.
          </p>
        </div>

        <div class="member" data-aos="zoom-in" data-aos-delay="180">
          <img
            src="https://placehold.co/240x240?text=I+Sankara+Rao"
            alt="I Sankara Rao"
          />
          <h4>I Sankara Rao</h4>
          <p class="role">Hardware Designer</p>
          <p class="bio">
            Expert in embedded hardware design and field-reliability testing.
          </p>
        </div>

        <div class="member" data-aos="zoom-in" data-aos-delay="240">
          <img
            src="https://placehold.co/240x240?text=M+Achyuth+Reddy"
            alt="M Achyuth Reddy"
          />
          <h4>M Achyuth Reddy</h4>
          <p class="role">Operational Head & Sales</p>
          <p class="bio">
            Oversees operations, installations and customer success across
            projects.
          </p>
        </div>
      </div>
    </section>

    <!-- Contact CTA -->
    <section class="contact-cta container" data-aos="fade-up">
      <div class="cta-card">
        <div>
          <h3>Get a consultation or quotation</h3>
          <p>
            Contact our sales team to discuss your elevator project — panel
            specifications, installation and ongoing maintenance.
          </p>
        </div>
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
  color: #000000;
  width: 100%;
  .hero-inner {
    display: flex;
    gap: 1.6rem;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .hero-text {
    flex: 1 1 60%;
    min-width: 260px;
  }
  .hero-text h1 {
    margin: 0 0 0.6rem;
    font-size: 1.95rem;
    color: #000000;
  }
  .lead {
    color: rgba(0, 0, 0, 0.95);
    margin-bottom: 0.6rem;
    line-height: 1.45;
  }
  .lead-extended {
    color: rgba(0, 0, 0, 0.88);
    margin-bottom: 0.75rem;
    font-size: 0.98rem;
  }

  .offerings {
    margin: 0 0 0.9rem;
    padding: 0;
    list-style: none;
    display: flex;
    gap: 0.6rem;
    flex-wrap: wrap;
  }
  .offerings li {
    background: rgba(255, 255, 255, 0.08);
    padding: 0.4rem 0.7rem;
    border-radius: 999px;
    font-weight: 600;
    font-size: 0.92rem;
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
        opacity: 0.95;
      }
    }
  }

  .hero-meta {
    margin-top: 1rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: flex-start;
  }

  .badges {
    display: flex;
    gap: 0.6rem;
  }
  .badge {
    background: rgba(255, 255, 255, 0.06);
    color: #030303;
    padding: 0.35rem 0.6rem;
    border-radius: 8px;
    font-weight: 700;
    font-size: 0.85rem;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.12);
  }

  .hero-ctas {
    display: flex;
    gap: 0.6rem;
  }
  .btn {
    display: inline-block;
    padding: 0.56rem 0.9rem;
    border-radius: 8px;
    text-decoration: none;
    font-weight: 700;
  }
  .primary {
    background: #f7b500;
    color: #000;
  }
  .outline {
    background: transparent;
    border: 1px solid rgba(255, 255, 255, 0.14);
    color: #000000;
  }

  .clients {
    margin-top: 1.15rem;
    display: flex;
    gap: 0.7rem;
    align-items: center;
    img {
      height: 36px;
      width: auto;
      opacity: 0.95;
      filter: grayscale(0.05);
      border-radius: 4px;
      background: #fff2;
      padding: 4px;
    }
  }

  .hero-image img {
    width: 100%;
    max-width: 720px;
    border-radius: 10px;
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.25);
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
  .team-intro {
    color: #475569;
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
      background: #f1f5f9;
    }
    h4 {
      margin: 0.4rem 0 0.12rem;
      font-size: 1.02rem;
    }
    .role {
      margin: 0;
      color: #0b6cff;
      font-weight: 700;
      font-size: 0.95rem;
    }
    .bio {
      margin-top: 0.5rem;
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
  .hero-text {
    flex: 1 1 100%;
  }
}
@media (max-width: 640px) {
  .hero-inner {
    flex-direction: column;
    gap: 1rem;
  }
  .hero-text {
    text-align: left;
  }
  .values .values-grid {
    grid-template-columns: 1fr;
  }
  .team .team-grid {
    grid-template-columns: 1fr;
  }
  .clients {
    justify-content: flex-start;
    gap: 0.4rem;
    img {
      height: 32px;
    }
  }
}
</style>
