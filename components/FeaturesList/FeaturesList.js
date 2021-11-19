import Feature from "../Feature/Feature";
import { features } from "../../data/features";
import styles from "./FeaturesList.module.css";

const FeaturesList = () => {
  return (
    <div className={styles.featureSection}>
      {features.map(({ id, icon, title, description }) => (
        <Feature key={id} icon={icon} title={title} description={description} />
      ))}
    </div>
  );
};

export default FeaturesList;
