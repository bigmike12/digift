import React from "react";
import Button from "../Button/button";
import styles from "./businessAPI.module.scss";

const BusinessAPI = () => {
  return (
    <div className={styles.businessAPI}>
      <div className={styles.businessAPI__left}>
        <h1>
          Expand the giftcard industry, <span>one card</span> at a time!
        </h1>
        <p>
          Digift helps businesses connect with customers by letting them offer
          their business gift cards to a large number of people.
        </p>
        <div className={styles.businessAPI__left__button}>
          <Button
            title="Get started"
            className={styles.started}
            icon="Right"
            iconStyle={styles.icon1}
          />
          <Button
            title="Sign In"
            className={styles.sign}
            icon="Right"
            iconStyle={styles.icon2}
          />
        </div>
      </div>
      <div className={styles.businessAPI__right}>
        <img src="images/code.png" alt="Dashboard" />
      </div>
    </div>
  );
};

export default BusinessAPI;
