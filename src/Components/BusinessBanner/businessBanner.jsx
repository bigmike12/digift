import React from "react";
import styles from "./businessBanner.module.scss";
import Button from "../Button/button";
import Icon from "../../Icon";

const BusinessBanner = () => {
  return (
    <div className={styles.businessBanner}>
      <div className={styles.businessBanner__left}>
        <h1>
          Expand the giftcard industry, <span>one card</span> at a time!
        </h1>
        <p>
          Digift helps businesses connect with customers by letting them offer
          their business gift cards to a large number of people.
        </p>
        <div className={styles.businessBanner__left__button}>
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
      <div className={styles.businessBanner__right}>
        <Icon name="CurveLeft" className={styles.left} />
        <img src="images/Dashboard.png" alt="Dashboard" />
        <Icon name="CurveRight" className={styles.right} />
      </div>
    </div>
  );
};

export default BusinessBanner;
