import styles from "./SignUpSection.module.css";

const SignUpSection = () => {
  return (
    <aside className={styles.formContainer}>
      <h1>Get early access today</h1>
      <p>
        It only takes a minute to sign up and our free starter tier is extremely
        generous. If you have any questions, our support team would be happy to
        help you.
      </p>
      <form>
        <input type="text" placeholder="email@example.com" />
        <button type="submit">Get Started For Free</button>
      </form>
    </aside>
  );
};

export default SignUpSection;
