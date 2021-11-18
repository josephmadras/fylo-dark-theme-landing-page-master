import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import logo from "../images/logo.svg";
import iconAccessAnywhere from "../images/icon-access-anywhere.svg";
import iconAnyFile from "../images/icon-any-file.svg";
import iconArrow from "../images/icon-arrow.svg";
import iconCollaboration from "../images/icon-collaboration.svg";
import iconEmail from "../images/icon-email.svg";
import iconLocation from "../images/icon-location.svg";
import iconPhone from "../images/icon-phone.svg";
import iconSecurity from "../images/icon-security.svg";
import bgCurvyDesktop from "../images/bg-curvy-desktop.svg";
import bgCurvyMobile from "../images/bg-curvy-mobile.svg";
import bgQuotes from "../images/bg-quotes.png";
import introIllustration from "../images/illustration-intro.png";
import stayProductiveIllustration from "../images/illustration-stay-productive.png";
import profile1 from "../images/profile-1.jpg";
import profile2 from "../images/profile-2.jpg";
import profile3 from "../images/profile-3.jpg";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Fylo Dark Theme landing page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <body>
        <header className={styles.header}>
          <Image src={logo} alt="" className={styles.logo} />
          <nav>
            <ul>
              <li>Features</li>
              <li>Team</li>
              <li>Sign In</li>
            </ul>
          </nav>
        </header>
        <main>
          <section className={styles.hero}>
            <Image src={introIllustration} alt="iconIlustration" />
            <h1>All your files in one secure location, accessible anywhere.</h1>
            <p>
              Fylo storesall your most important files in one secure location.
              Access them wherever you need, share and collaborate with friends
              family, and co-workers.
            </p>
            <button>Get Started</button>
          </section>
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
            <h1>Stay productive, wherever you are</h1>
            <p>
              Never let location be an issue when accessing your files. Fylo has
              you covered for all of your file storage needs.
            </p>
            <p>
              Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachments required.
            </p>
            <a href="">See how Fylo works</a>
          </section>

          <div>
            <div>
              <p>
                Fylo has improved our team productivity by an order of
                magnitude. Since making the switch our team has become a
                well-oiled collaboration machine.
              </p>
              <div>
                <Image src={profile1} alt="" />
                <div>
                  <strong>Satish Patel</strong>
                  <span>Founder & CEO, Huddle</span>
                </div>
              </div>
            </div>

            <div>
              <p>
                Fylo has improved our team productivity by an order of
                magnitude. Since making the switch our team has become a
                well-oiled collaboration machine.
              </p>
              <div>
                <Image src={profile2} alt="" />
                <div>
                  <strong>Bruce McKenzie</strong>
                  <span>Founder & CEO, Huddle</span>
                </div>
              </div>
            </div>
            <div>
              <p>
                Fylo has improved our team productivity by an order of
                magnitude. Since making the switch our team has become a
                well-oiled collaboration machine.
              </p>
              <div>
                <Image src={profile3} alt="" />
                <div>
                  <strong>Iva Boyd</strong>
                  <span>Founder & CEO, Huddle</span>
                </div>
              </div>
            </div>
          </div>
        </main>
        <aside>
          <h1>Get early access today</h1>
          <p>
            It only takes a minute to sign up and our free starter tier is
            extremely generous. If you have any questions, our support team
            would be happy to help you.
          </p>
          <form>
            <input type="text" />
            <button type="submit">Get Started For Free</button>
          </form>
        </aside>
        <footer>
          <Image src={logo} alt="" />
          <div>
            <div>
              <Image src={iconLocation} alt="" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
            </div>
            <div>
              <div>
                <Image src={iconPhone} alt="" />
                <p> +1-543-123-4567</p>
              </div>
              <div>
                <Image src={iconEmail} alt="" />
                <p>example@fylo.com</p>
              </div>
            </div>

            <div>
              <ul>
                <li>About Us</li>
                <li>Jobs</li>
                <li>Press</li>
                <li>Blog</li>
              </ul>
            </div>

            <div>
              <ul>
                <li>Contact Us</li>
                <li>Terms</li>
                <li>Privacy</li>
              </ul>
            </div>

            {/* <div id="social-media">
              <Image src="" alt="" />
              <Image src="" alt="" />
              <Image src="" alt="" />
            </div> */}
          </div>
        </footer>
      </body>
      {/* <footer>
        <p className="attribution">
          Challenge by{" "}
          <Link
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
          >
            Frontend Mentor
          </Link>
          . Coded by <Link href="#">Joseph Kabemba</Link>.
        </p>
      </footer> */}
    </div>
  );
}
