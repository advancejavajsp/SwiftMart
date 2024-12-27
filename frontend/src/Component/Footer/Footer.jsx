import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import styles from './Footer.module.css';
import Image1 from '../../asset/img1.webp';
import Image2 from '../../asset/img2.webp';
import Image3 from '../../asset/facebooklogo.jpg';
import Image4 from '../../asset/Twitterlogo.png';
import Image5 from '../../asset/inslogo.png';
import Image6 from '../../asset/linkedinlogo.png';
import Image7 from '../../asset/Threadlogo.jpg';

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
            <h2>Useful Links</h2>
          </div>
          <div className={styles.list}>
            <div className={styles.listItem}>
              <ul>
                {/* Adding the Link for About */}
                <li>
                  <Link >About</Link>
                </li>
                <li>
                  <Link >Career</Link>
                </li>
                <li>
                  <Link>Blog</Link>
                </li>
                <li>
                  <Link>Press</Link>
                </li>
                <li>
                  <Link>Lead</Link>
                </li>
                <li>
                  <Link>Value</Link>
                </li>
              </ul>
            </div>
            <div className={styles.listItem}>
              <ul>
                <li>
                  <Link>Privacy</Link>
                </li>
                <li>
                  <Link>Teams</Link>
                </li>
                <li>
                  <Link>FAQs</Link>
                </li>
                <li>
                  <Link>Security</Link>
                </li>
                <li>
                  <Link>Mobile</Link>
                </li>
                <li>
                  <Link>Contact</Link>
                </li>
              </ul>
            </div>
            <div className={styles.listItem}>
              <ul>
                <li>
                  <Link>Partner</Link>
                </li>
                <li>
                  <Link>Franchise</Link>
                </li>
                <li>
                  <Link>Seller</Link>
                </li>
                <li>
                  <Link>Warehouse</Link>
                </li>
                <li>
                  <Link>Deliver</Link>
                </li>
                <li><Link>Resources</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.categories}>
          <div className={styles.heading}>
            <h2>Categories</h2>
            <p>See all</p>
          </div>
          <div className={styles.list1}>
            <div className={styles.listItem1}>
              <ul>
                <li>
                  <Link>Vegetables and Fruits</Link>
                </li>
                <li>
                  <Link>Cold Drinks and Juices</Link>
                </li>
                <li>
                  <Link>Bakery & Biscuits</Link>
                </li>
                <li><Link>Dry Fruits, Masala & Oil</Link></li>
                <li>
                  <Link>Paan Corner</Link>
                </li>
                <li>
                  <Link>Pharma & Wellness</Link>
                </li>
                <li>
                  <Link>Ice Creams & Frozen Desserts</Link>
                </li>
                <li>
                  <Link>Beauty & Cosmetics</Link>
                </li>
                <li>
                  <Link>Electronics and Electricals</Link>
                </li>
                <li>Toys & Games</li>
              </ul>
            </div>
            <div className={styles.listItem1}>
              <ul>
                <li><Link>Dairy & Breakfast</Link></li>
                <li><Link>Instant & Frozen Food</Link></li>
                <li><Link>Sweet Tooth</Link></li>
                <li><Link>Sauces & Spreads</Link></li>
                <li><Link>Organic & Premium</Link></li>
                <li><Link>Cleaning Essentials</Link></li>
                <li><Link>Personal Care</Link></li>
                <li><Link>Magazines</Link></li>
                <li><Link>Stationery Needs</Link></li>
                <li><Link>Print Store</Link></li>
              </ul>
            </div>
            <div className={styles.listItem1}>
              <ul>
                <li><Link>Munchies</Link></li>
                <li><Link>Tea, Coffee & Health Drinks</Link></li>
                <li><Link>Atta, Rice & Dal</Link></li>
                <li><Link>Chicken, Meat & Fish</Link></li>
                <li><Link>Baby Care</Link></li>
                <li><Link>Home & Office</Link></li>
                <li><Link>Pet Care</Link></li>
                <li><Link>Fashion & Accessories</Link></li>
                <li><Link>Books</Link></li>
                <li><Link>Navratri Specials</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.divTwo}>
        <div className={styles.text}>
          <p>© SmartMart Commerce Private Limited, 2016-2024</p>
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
          “SmartMart” is owned & managed by "SM Commerce Private Limited" and is
          not related, linked, or interconnected in whatsoever manner or nature, to
          “GROFFR.COM” which is a real estate services business operated by
          “Redstone Consultancy Services Private Limited”.
        </p>
      </div>
    </section>
  );
};

export default Footer;
