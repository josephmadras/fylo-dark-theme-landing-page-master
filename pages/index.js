import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import logo from "../images/logo.svg";
import iconAccessAnywhere from "../images/icon-access-anywhere.svg";
import iconAnyFile from "../images/icon-any-file.svg";
import iconCollaboration from "../images/icon-collaboration.svg";
import iconEmail from "../images/icon-email.svg";
import iconLocation from "../images/icon-location.svg";
import iconPhone from "../images/icon-phone.svg";
import iconSecurity from "../images/icon-security.svg";
import introIllustration from "../images/illustration-intro.png";
import stayProductiveIllustration from "../images/illustration-stay-productive.png";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { testimonials } from "../data/testimonials";
import Header from "../components/Header/Header";
import TestimonialCard from "../components/TestimonialCard/TestimonialCard";
import Hero from "../components/Hero/Hero";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Fylo Dark Theme landing page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/joseph.ico" />
      </Head>

      <body>
        <Header />

        <main>
          {/* <section className={styles.hero}>
            <Image src={introIllustration} alt="iconIlustration" />
            <h1>All your files in one secure location, accessible anywhere.</h1>
            <p>
              Fylo storesall your most important files in one secure location.
              Access them wherever you need, share and collaborate with friends
              family, and co-workers.
            </p>
            <button>Get Started</button>
          </section> */}
          <Hero />

          <div className={styles.featureSection}>
            <section>
              <Image src={iconAccessAnywhere} alt="" />
              <h1>Access your files, anywhere</h1>
              <p>
                The ability to use a smartphone, tablet, or computer to access
                your account means your files follow you everywhere.
              </p>
            </section>

            <section>
              <Image src={iconSecurity} alt="" />
              <h1>Security you can trust</h1>
              <p>
                2-factor authentication and user-controlled encryption are just
                a couple of the security features we allow to help secure your
                files.
              </p>
            </section>

            <section>
              <Image src={iconCollaboration} alt="" />
              <h1>Real-time collaboration</h1>
              <p>
                Securely share files and folders with friends, family and
                colleagues for live collaboration. No email attachments
                required.
              </p>
            </section>

            <section>
              <Image src={iconAnyFile} alt="" />
              <h1>Store any type of file</h1>
              <p>
                Whether you're sharing holidays photos or work documents, Fylo
                has you covered allowing for all file types to be securely
                stored and shared.
              </p>
            </section>
          </div>

          <section className={styles.stayProductiveSection}>
            <Image src={stayProductiveIllustration} alt="" />
            <div>
              <h1>Stay productive, wherever you are</h1>
              <p>
                Never let location be an issue when accessing your files. Fylo
                has you covered for all of your file storage needs.
              </p>
              <p>
                Securely share files and folders with friends, family and
                colleagues for live collaboration. No email attachments
                required.
              </p>
              <a href="">See how Fylo works</a>
            </div>
          </section>

          <div className={styles.testimonials}>
            {testimonials.map(({ id, author, title, content, picture }) => (
              <TestimonialCard
                key={id}
                author={author}
                authorPicture={picture}
                authorTitle={title}
                content={content}
              />
            ))}
          </div>
        </main>

        <aside className={styles.formContainer}>
          <h1>Get early access today</h1>
          <p>
            It only takes a minute to sign up and our free starter tier is
            extremely generous. If you have any questions, our support team
            would be happy to help you.
          </p>
          <form>
            <input type="text" placeholder="email@example.com" />
            <button type="submit">Get Started For Free</button>
          </form>
        </aside>

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
      </body>
    </div>
  );
}
