import Image from "next/image";
import styles from "./Feature.module.css";

const Feature = ({ icon, title, description }) => {
  return (
    <section className={styles.section}>
      <Image src={icon} alt="Feature Icon" />
      <h1>{title}</h1>
      <p>{description}</p>
    </section>
  );
};

export default Feature;
