import React from "react";
import styles from "./businessCards.module.scss";

const BusinessCards = () => {
  return (
    <div className={styles.container}>
      <div className={styles.businessCards}>
        <div className={styles.businessCards__text}>
          <h1>
            Designed for
            <br /> today’s <span>ambitious</span>
            <br /> businesses.
          </h1>
          <p>
            We give merchants the ability to sell digital Gift Cards for their
            business quickly, intuitively and affordably.
          </p>
        </div>

        <div className={styles.businessCards__image}>
          <img src="images/business.png" alt="business" />
        </div>
      </div>

      <div className={styles.businessCards}>
        <div className={styles.businessCards__text}>
          <h1>
            Features that
            <br /> <span>empower</span> your
            <br /> business
          </h1>
          <p>
            Automate your sales and marketing so you can focus on other areas of
            your business.
          </p>
        </div>

        <div className={styles.businessCards__image}>
          <img src="images/business.png" alt="business" />
        </div>
      </div>
    </div>
  );
};

export default BusinessCards;
