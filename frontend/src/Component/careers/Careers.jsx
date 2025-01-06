import React from 'react';
import styles from './careers.module.css'; // Importing the module CSS
import AboutNav from '../aboutnavbar/AboutNav';

const CareersPage = () => {
  return (
    <div className={styles.careersPage}>
       <AboutNav />

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1>Join Us in Revolutionizing the Future of Delivery!</h1>
          <p>At SwiftMart, we’re dedicated to making everyday shopping faster, easier, and more reliable. We're looking for passionate, innovative individuals to help us redefine the delivery experience.</p>
          
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className={styles.missionValues}>
        <h2>Our Mission & Values</h2>
        <p>At SwiftMart, we bring convenience, efficiency, and excitement to the world of product delivery.</p>
        <ul>
          <li><strong>Customer Focus</strong> - We put the customer at the heart of everything we do.</li>
          <li><strong>Innovation</strong> - We embrace new technologies to deliver the future, today.</li>
          <li><strong>Sustainability</strong> - We are committed to eco-friendly solutions and reducing our carbon footprint.</li>
          <li><strong>Collaboration</strong> - We work as one team, supporting each other to achieve shared goals.</li>
          <li><strong>Integrity</strong> - We do what’s right, even when no one’s watching.</li>
        </ul>
      </section>

      {/* Open Positions Section */}
      <section className={styles.openPositions}>
        <h2>Open Positions</h2>
        <ul>
          <li className={styles.jobListing}>
            <h3>Product Manager</h3>
            <p><strong>Location:</strong> Remote</p>
            <p><strong>Description:</strong> Lead product development initiatives, collaborate with cross-functional teams, and define the product roadmap for SwiftMart.</p>
            <p><strong>Requirements:</strong> 3+ years of experience, strong project management skills.</p>
            <button className={styles.ctaButton}>Apply Now</button>
          </li>
          <li className={styles.jobListing}>
            <h3>Delivery Operations Associate</h3>
            <p><strong>Location:</strong> New York, NY</p>
            <p><strong>Description:</strong> Oversee daily delivery operations, ensure quality control, liaise with drivers, and ensure timely product delivery.</p>
            <p><strong>Requirements:</strong> High school diploma or equivalent, ability to work in a fast-paced environment.</p>
            <button className={styles.ctaButton}>Apply Now</button>
          </li>
          <li className={styles.jobListing}>
            <h3>Software Engineer</h3>
            <p><strong>Location:</strong> Remote</p>
            <p><strong>Description:</strong> Develop and maintain the SwiftMart delivery platform, implement new features, optimize performance, and improve the user experience.</p>
            <p><strong>Requirements:</strong> Proficiency in Swift/Java/Kotlin, 2+ years of experience.</p>
            <button className={styles.ctaButton}>Apply Now</button>
          </li>
        </ul>
      </section>

      {/* Employee Testimonials Section */}
      <section className={styles.testimonials}>
        <h2>What Our Employees Say</h2>

        <div className={styles.testimonialCards}>
          <div className={styles.testimonialCard}>
            <h3>Hemant </h3>
            <h4>Software Engineer</h4>
            <p>"SwiftMart is not just a company, it’s a community. I’ve grown both professionally and personally here. The environment fosters innovation and collaboration, and I feel empowered every day!"</p>
          </div>
          <div className={styles.testimonialCard}>
            <h3>Manav</h3>
            <h4>Software Engineer</h4>
            <p>"At SwiftMart, every day feels like an opportunity to learn and grow. The company not only supports your professional aspirations but encourages personal development as well. It’s a place where ideas are celebrated, and innovation thrives."</p>
          </div>
          <div className={styles.testimonialCard}>
            <h3>Sneha</h3>
            <h4>Software Engineer</h4>
            <p>"oining SwiftMart has been one of the best decisions of my career. I’m not just part of a company; I’m part of a community that values each individual’s growth and contribution, both professionally and personally."</p>
          </div>
          </div>

          <div className={styles.testimonialCards}>
          <div className={styles.testimonialCard}>
            <h3>Riya</h3>
            <h4>Software Engineer</h4>
            <p>"At SwiftMart, the values of teamwork, innovation, and empowerment are at the core of everything we do. The collaborative environment has allowed me to push boundaries and expand my skill set in ways I hadn’t imagined."</p>
          </div>
          <div className={styles.testimonialCard}>
            <h3>Janhvi</h3>
            <h4>Software Engineer</h4>
            <p>"SwiftMart has given me the freedom to explore my professional potential while encouraging a healthy work-life balance. It's the perfect environment for anyone looking to innovate and grow in their career."</p>
          </div>
          <div className={styles.testimonialCard}>
            <h3>Shivam</h3>
            <h4>Software Engineer</h4>
            <p>"The culture at SwiftMart is unique—one that fosters creativity, trust, and collaboration. It's a place where everyone’s voice is heard, and you feel motivated to take risks and bring new ideas to the table."</p>
          </div>
          <div className={styles.testimonialCard}>
            <h3>Vandana</h3>
            <h4>Software Engineer</h4>
            <p>"The fast-paced environment and focus on innovation makes SwiftMart a great place to work. I’m constantly challenged and given opportunities to grow."</p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className={styles.benefits}>
        <h2>Benefits & Perks</h2>
        <ul>
          <li><strong>Health and Wellness</strong> - Comprehensive health, dental, and vision insurance.</li>
          <li><strong>Financial Perks</strong> - Competitive salary, 401(k) match, and stock options.</li>
          <li><strong>Work Environment</strong> - Flexible working hours, remote work options, and regular team-building events.</li>
        </ul>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.socialMedia}>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
        <p>&copy; 2025 SwiftMart | All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default CareersPage;
