import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import styles from './Footer.module.css';
import Image1 from '../asset/img1.webp';
import Image2 from '../asset/img2.webp';
import Image3 from '../asset/facebooklogo.jpg';
import Image4 from '../asset/Twitterlogo.png';
import Image5 from '../asset/inslogo.png';
import Image6 from '../asset/linkedinlogo.png';
import Image7 from '../asset/Threadlogo.jpg';

const Footer = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // Update state based on window width
      setIsMobile(window.innerWidth < 1000);
    };

    // Set initial state based on window width
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // If isMobile is true (width < 1000px), don't render the footer
  if (isMobile) {
    return null;
  }

  return (
    <section className={styles.futtor}>
      <div className={styles.divOne}>
        <div className={styles.usefulLink}>
          <div className={styles.heading}>
            <h1>Useful Links</h1>
          </div>
          <div className={styles.list}>
            <div className={styles.listItem}>
              <ul>
                {/* Adding the Link for About */}
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>Careers</li>
                <li>Blog</li>
                <li>Press</li>
                <li>Lead</li>
                <li>Value</li>
              </ul>
            </div>
            <div className={styles.listItem}>
              <ul>
                <li>Privacy</li>
                <li>Teams</li>
                <li>FAQs</li>
                <li>Security</li>
                <li>Mobile</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className={styles.listItem}>
              <ul>
                <li>Partner</li>
                <li>Franchise</li>
                <li>Seller</li>
                <li>Warehouse</li>
                <li>Deliver</li>
                <li>Resources</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.categories}>
          <div className={styles.heading}>
            <h1>Categories</h1>
            <p>See all</p>
          </div>
          <div className={styles.list}>
            <div className={styles.listItem}>
              <ul>
                <li>Vegetables and Fruits</li>
                <li>Cold Drinks and Juices</li>
                <li>Bakery & Biscuits</li>
                <li>Dry Fruits, Masala & Oil</li>
                <li>Paan Corner</li>
                <li>Pharma & Wellness</li>
                <li>Ice Creams & Frozen Desserts</li>
                <li>Beauty & Cosmetics</li>
                <li>Electronics and Electricals</li>
                <li>Toys & Games</li>
              </ul>
            </div>
            <div className={styles.listItem}>
              <ul>
                <li>Dairy & Breakfast</li>
                <li>Instant & Frozen Food</li>
                <li>Sweet Tooth</li>
                <li>Sauces & Spreads</li>
                <li>Organic & Premium</li>
                <li>Cleaning Essentials</li>
                <li>Personal Care</li>
                <li>Magazines</li>
                <li>Stationery Needs</li>
                <li>Print Store</li>
              </ul>
            </div>
            <div className={styles.listItem}>
              <ul>
                <li>Munchies</li>
                <li>Tea, Coffee & Health Drinks</li>
                <li>Atta, Rice & Dal</li>
                <li>Chicken, Meat & Fish</li>
                <li>Baby Care</li>
                <li>Home & Office</li>
                <li>Pet Care</li>
                <li>Fashion & Accessories</li>
                <li>Books</li>
                <li>Navratri Specials</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.divTwo}>
        <div className={styles.text}>
          <p>© Blink Commerce Private Limited, 2016-2024</p>
        </div>
        <div className={styles.download}>
          <span>Download App</span>
          <img src={Image1} alt="App Store" />
          <img src={Image2} alt="Google Play" />
        </div>
        <div className={styles.icon}>
          <img src={Image3} alt="Facebook" />
          <img src={Image4} alt="Twitter" />
          <img src={Image5} alt="Instagram" />
          <img src={Image6} alt="LinkedIn" />
          <img src={Image7} alt="Threads" />
        </div>
      </div>
      <div className={styles.divThree}>
        <p>
          “Blinkit” is owned & managed by "Blink Commerce Private Limited" and is
          not related, linked, or interconnected in whatsoever manner or nature, to
          “GROFFR.COM” which is a real estate services business operated by
          “Redstone Consultancy Services Private Limited”.
        </p>
      </div>
    </section>
  );
};

export default Footer;
