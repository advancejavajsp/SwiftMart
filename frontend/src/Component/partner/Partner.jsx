import React from 'react';
import styles from './partner.module.css'; // Importing the module CSS
import AboutNav from '../aboutnavbar/AboutNav';

const Partner = () => {
  return (
    <div className={styles.partnerPage}>
      <AboutNav/>
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1>Become a SwiftMart Partner</h1>
          <p>Join the fastest-growing delivery network and help us bring convenience to millions of customers.</p>
          <button className={styles.ctaButton}>Start Your Partnership</button>
        </div>
      </section>

      {/* Why Partner with Us Section */}
      <section className={styles.whyPartner}>
        <h2>Why Partner with SwiftMart?</h2>
        <div className={styles.whyPartnerContent}>
          <div className={styles.whyItem}>
            <h3>Fast Delivery</h3>
            <p>Our network ensures deliveries in 10 minutes, offering unmatched speed to customers in your area.</p>
          </div>
          <div className={styles.whyItem}>
            <h3>Supportive Partnership</h3>
            <p>We offer full support to help you get up and running quickly, including marketing and operational assistance.</p>
          </div>
          <div className={styles.whyItem}>
            <h3>Technology-Driven</h3>
            <p>Leverage our cutting-edge app and technology to streamline your operations and increase efficiency.</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className={styles.howItWorks}>
        <h2>How It Works</h2>
        <div className={styles.steps}>
          <div className={styles.step}>
            <h3>Step 1: Sign Up</h3>
            <p>Fill out the partnership application form and provide basic details about your business.</p>
          </div>
          <div className={styles.step}>
            <h3>Step 2: Setup</h3>
            <p>We help you set up the necessary tools and onboard your business onto our platform.</p>
          </div>
          <div className={styles.step}>
            <h3>Step 3: Start Delivering</h3>
            <p>Once everything is in place, you'll start delivering products to customers and earning revenue.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={styles.testimonials}>
        <h2>What Our Partners Say</h2>
        <div className={styles.testimonialCards}>
          <div className={styles.testimonialCard}>
            <h3>Sr. Hemant Pawar</h3>
            <h4>Qspiders, Gurugram</h4>
            <p>"SwiftMart has completely transformed my business. The support team is fantastic, and the app makes everything so easy!"</p>
          </div>
          <div className={styles.testimonialCard}>
            <h3>Sr. Anwith Gowda</h3>
            <h4>Qspiders, Gurugram</h4>
            <p>"Joining SwiftMart was one of the best decisions I’ve made. The speed and efficiency of the service has made me stand out in a competitive market."</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className={styles.cta}>
        <h2>Ready to Partner with Us?</h2>
        <p>Join SwiftMart and be part of the delivery revolution! Let’s bring convenience to more customers together.</p>
        <button className={styles.ctaButton}>Become a Partner</button>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p>&copy; 2025 SwiftMart | All Rights Reserved</p>
          <div className={styles.socialMedia}>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Partner;
