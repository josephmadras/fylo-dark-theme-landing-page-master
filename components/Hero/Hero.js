import Image from "next/image";
import styles from "./Hero.module.css";
import introIllustration from "../../images/illustration-intro.png";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <Image src={introIllustration} alt="iconIlustration" />
      <h1>All your files in one secure location, accessible anywhere.</h1>
      <p>
        Fylo storesall your most important files in one secure location. Access
        them wherever you need, share and collaborate with friends family, and
        co-workers.
      </p>
      <button>Get Started</button>
    </section>
  );
};

export default Hero;
