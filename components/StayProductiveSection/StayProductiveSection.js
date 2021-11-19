import Image from "next/image";
import Link from "next/link";
import styles from "./StayProductiveSection.module.css";
import stayProductiveIllustration from "../../images/illustration-stay-productive.png";
import iconArrow from "../../images/icon-arrow.svg";

const StayProductiveSection = () => {
  return (
    <section className={styles.stayProductiveSection}>
      <Image
        src={stayProductiveIllustration}
        alt="Stay Productive Illustration"
      />
      <div>
        <h1>Stay productive, wherever you are</h1>
        <p>
          Never let location be an issue when accessing your files. Fylo has you
          covered for all of your file storage needs.
        </p>
        <p>
          Securely share files and folders with friends, family and colleagues
          for live collaboration. No email attachments required.
        </p>
        <div className={styles.howItWorks}>
          <Link href="#howItWorks">See how Fylo works</Link>
          <div>
            <Image src={iconArrow} alt="Arrow Icon" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StayProductiveSection;
