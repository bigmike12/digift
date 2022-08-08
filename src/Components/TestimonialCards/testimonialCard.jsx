import React from "react";
import styles from "./testimonialCard.module.scss";

const TestimonialCard = ({text, name, role}) => {
  return (
    <div className={styles.testimonialCard}>
      <div className={styles.testimonialCard__text}>
        <p>
          {text}
        </p>
      </div>

      <div className={styles.testimonialCard__info}>
        <img src="./images/Avatar.png" alt="Avatar" />
        <div className={styles.testimonialCard__info__name}>
          <h4>{name}</h4>
          <p>{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
