import React from "react";
import style from "./about.module.css";
import about from "../../asset/about.webp";
import img1 from "../../asset/img1.webp";
import img2 from "../../asset/img2.webp";
import AboutNav from "../aboutnavbar/AboutNav";

const About = () => {
  return (
    <div className={style["containers"]}>
      <AboutNav />
      <div className={style["images"]}>
        <img src={about} alt="Blinkit delivery scene" />
        <h1>Instant commerce indistinguishable from magic</h1>
      </div>
      <div className={style["read"]}>
        <h1>100x Retail in 5 Years</h1>

        <div className={style["mission"]}>
          <p>
            Imagine needing something when you are at home and getting it before
            you have tied your shoelaces to step out. We are revolutionizing
            e-commerce by making the stuff most important to you available in a
            blink of your eye.
          </p>
          <p>
            We want our customers to focus on the more important things for
            themselves and not need to plan for the little things that life
            requires on an everyday basis. We are here to get your chores out of
            your way.
          </p>
          <p>
            Our mission is -{" "}
            <strong>“instant commerce indistinguishable from magic”</strong>.
            Using a backbone of technology, data sciences, and rich customer
            insights, we've built a dense and fast network of partner stores
            enabling lightning-fast deliveries in minutes.
          </p>
        </div>

        <div className={style["growth"]}>
          <p>
            We are already one of the largest e-grocery companies in India. Our
            ambition, however, is to be 100x this size in the next five years.
            In order to become one of the most important e-retail companies of
            our generation, we need builders who can think on their feet, take
            extreme ownership, and commit to making outcomes happen.
          </p>
          <p>
            If you are ambitious, smart, and don't have an ego about it, we'd
            love to hear from you. Opportunities to create $100 billion
            businesses in India are rare. We are on the way and looking for the
            hungry.
          </p>
        </div>

        <div className={style["ownership"]}>
          <p>
            <strong>"Blinkit"</strong> is owned & managed by{" "}
            <strong>"Blink Commerce Private Limited”</strong> (formerly known as
            Grofers India Private Limited) and is not related, linked, or
            interconnected in whatsoever manner or nature, to
            <strong>“GROFFR.COM”</strong>, which is a real estate services
            business operated by
            <strong>“Redstone Consultancy Services Private Limited.”</strong>
          </p>
        </div>
      </div>

      <div className={style["osp"]}>
        <div className={style["images-container"]}>
          <h1>Our Shared Philosophy</h1>
          <img className={style["img"]} src={img1} alt="Shared philosophy 1" />
          <div className={style["left"]}>
            <h3>Mindsets & Leverage Points</h3>
            <p>
              We believe that being a leader is a mindset, much more than it is
              a title. We are codifying the operating principles that leaders at
              Blinkit follow at all times. Learn about how we lead here.
            </p>
          </div>
        </div>

        <div className={style["images-container"]}>
          <img className={style["img"]} src={img2} alt="Shared philosophy 2" />
          <div className={style["text-content-right"]}>
            <h3>Learning Organisation</h3>
            <p>
              We are a group of people who are constantly learning the skills we
              need and continuously improving ourselves to create the future we
              desire. Learn about what we value here.
            </p>
          </div>
        </div>
      </div>

      <footer className={style["footer"]}>
        <div className={style["footer-sections"]}>
          <div className={style["footer-column"]}>
            <h3>Company</h3>
            <ul>
              <li>About</li>
              <li>Careers</li>
              <li>Blog</li>
              <li>Press</li>
              <li>Lead</li>
              <li>Values</li>
            </ul>
          </div>
          <div className={style["footer-column"]}>
            <h3>For Consumers</h3>
            <ul>
              <li>Privacy</li>
              <li>Terms</li>
              <li>FAQs</li>
              <li>Security</li>
              <li>Mobile</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className={style["footer-column"]}>
            <h3>For Partners</h3>
            <ul>
              <li>Franchise</li>
              <li>Seller</li>
              <li>Warehouse</li>
              <li>Deliver</li>
              <li>Partner</li>
            </ul>
          </div>
          <div className={style["footer-column"]}>
            <h3>Follow us</h3>
            <div className={style["social-icons"]}>
              <span>🔗 Instagram</span>
              <span>🔗 Facebook</span>
              <span>🔗 Twitter</span>
              <span>🔗 LinkedIn</span>
            </div>
          </div>
          <div className={style["footer-column"]}>
            <h3>Download App</h3>
            <div className={style["app-buttons"]}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
              />
              <img
                src="https://blinkit.com/careers/sites/default/files/2021-05/app-store.png"
                alt="App Store"
              />
            </div>
          </div>
        </div>
        <div className={style["footer-bottom"]}>
          <p>
            By continuing past this page you agree to our Terms, Cookie policy,
            and Privacy policy. All trademarks are properties of their
            respective owners. © Blink Commerce Private Limited 2016-2024
          </p>
        </div>
      </footer>
    </div>
  );
};
export default About;
