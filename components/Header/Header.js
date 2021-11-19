import Image from "next/image";
import styles from "./Header.module.css";
import logo from "../../images/logo.svg";

const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <Image src={logo} alt="" className={styles.logo} />
      </div>
      <nav>
        <ul>
          <li>Features</li>
          <li>Team</li>
          <li>Sign In</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
