import React from "react";
import styles from "./businessLargeBanner.module.scss";

const BusinessLargeBanner = () => {
  return (
    <div className={styles.businessLargeBanner}>
      <img
        src="/images/Rectangle3.png"
        alt="gitfinder"
        className={styles.img}
      />
      <div className={styles.businessLargeBanner__info}>
        <img src="/images/wide2.svg" alt="wide2" className={styles.wide} />
        <p className={styles.businessLargeBanner__info__topText}>
          Digift helps businesses
        </p>
        <h1>
          Why do fast-growing merchant and vendor choose
          <span>
            <img src="images/Gif.png" alt="gif" />
          </span>
          us?
        </h1>
        <p className={styles.businessLargeBanner__info__Text}>
          Whether you’re a business looking to sell your own gift cards, a
          company looking for bulk gift card solution, digift is for you.
        </p>
        <p className={styles.businessLargeBanner__info__btn}>
          Create an account today
        </p>
      </div>
    </div>
  );
};

export default BusinessLargeBanner;
