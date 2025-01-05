import React from 'react';
import styles from './aboutnav.module.css'; 
import { IoMenu } from "react-icons/io5";
import logo from  "../../asset/logo.jpg"
import image from  "../../asset/image.webp"
import { Link } from 'react-router-dom';


const AboutNav = () => {
  return (
    
    <section>
      
      <div className={styles["nav"]}>
        <nav className={styles["navbar"]}>
          <div className={styles["logo"]}>
            <h1><img src={logo} alt="Logo" /></h1>
          </div>

          <div className={styles["links"]}>
            <Link to="/" className={styles["link"]}>Home</Link>
            <Link to="/about" className={styles["link"]}>About</Link>
            <Link to="/career" className={styles["link"]}>Careers</Link>
            <Link to="/partner" className={styles["link"]}>Partner</Link>
            <Link to="/blog" className={styles["link"]}>Blog</Link>
          </div>

          
        </nav>
      </div>

      {/* <div className={styles["first"]}>
        <img src={image} alt="Main" />
      </div>

      <div className={styles["heading"]}>
        <h1>What is the Blinkit Franchise Program?</h1>
        <p>As a Blinkit Franchise owner, you can operate a dark store in your neighborhood, delivering essentials to doorsteps within minutes. Our model enables local individuals and business owners to join the fast-growing 10-minute delivery space, earning a percentage of sales while serving the community.</p>
      </div> */}
    </section>
  );
};

export default AboutNav;
