import TestimonialCard from "../TestimonialCard/TestimonialCard";
import styles from "./TestimonialsList.module.css";
import { testimonials } from "../../data/testimonials";

const TestimonialsList = () => {
  return (
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
  );
};

export default TestimonialsList;
