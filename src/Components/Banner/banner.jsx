import React from "react";
import Icon from "../../Icon";
import Button from "../Button/button";
import styles from "./banner.module.scss";

const Banner = ({ children }) => {
  return (
    <div className={styles.homePage__banner}>
      <img src="/images/Rectangle.png" alt="gitfinder" className={styles.img} />
      <Icon name="DecorLeft" className={styles.decorLeft} />
      <Icon name="DecorRight" className={styles.decorRight} />
      <div className={styles.homePage__banner_text}>
        <h1>
          Eliminate bank
          <br />
          restrictions with our
          <br /> unique gift cards.
          <br />
        </h1>
        <p>
          Shop on Amazon, ASOS, 1800 flowers, Whilst
          <br /> paying for utilities and even more.
        </p>
        <Button
          title="Start Shopping"
          className={styles.homePage__banner_text_button}
        />
      </div>
      <div>
        <img src="/images/Amazon.png" alt="Amazon" className={styles.amazon} />
        <img
          src="/images/Mastercard.png"
          alt="Mastercard"
          className={styles.mastercard}
        />
      </div>
    </div>
  );
};

export default Banner;
