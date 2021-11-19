import Image from "next/image";
import styles from "./Footer.module.css";
import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";
import logo from "../../images/logo.svg";
import iconLocation from "../../images/icon-location.svg";
import iconPhone from "../../images/icon-phone.svg";
import iconEmail from "../../images/icon-email.svg";

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.imageContainer}>
        <Image src={logo} alt="Footer logo" className={styles.footerLogo} />
      </div>
      <div className={styles.footerContent}>
        <div>
          <div className={styles.imageContainer}>
            <Image src={iconLocation} alt="" />
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>
        <div>
          <div>
            <div className={styles.imageContainer}>
              <Image src={iconPhone} alt="" />
            </div>
            <p> +1-543-123-4567</p>
          </div>
          <div>
            <div className={styles.imageContainer}>
              <Image src={iconEmail} alt="" />
            </div>
            <p>example@fylo.com</p>
          </div>
        </div>

        <div className={styles.links}>
          <ul>
            <li>About Us</li>
            <li>Jobs</li>
            <li>Press</li>
            <li>Blog</li>
          </ul>
          <ul>
            <li>Contact Us</li>
            <li>Terms</li>
            <li>Privacy</li>
          </ul>
        </div>

        <div className={styles.socialMedia}>
          <div>
            <FaFacebookF />
          </div>
          <div>
            <FaTwitter />
          </div>
          <div>
            <FaInstagram />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
