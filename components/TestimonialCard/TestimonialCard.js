import Image from "next/image";
import styles from "./TestimonialCard.module.css";

const TestimonialCard = ({ author, authorTitle, authorPicture, content }) => {
  return (
    <div className={styles.card}>
      <p>{content}</p>
      <div>
        <Image src={authorPicture} alt="" />
        <div>
          <strong>{author}</strong>
          <span>{authorTitle}</span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
