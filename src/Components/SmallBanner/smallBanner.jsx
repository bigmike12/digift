import React from "react";
import styles from "./smallBanner.module.scss";

const SmallBanner = () => {
  return (
    <div className={styles.smallBanner}>
      <img
        src="/images/Rectangle2.png"
        alt="gitfinder"
        className={styles.img}
      />
      <img src="/images/Sphere.png" alt="gitfinder" className={styles.sphere} />

      <div className={styles.smallBanner__text}>
        <p>Create happiness from buying a gift card today.</p>
      </div>
    </div>
  );
};

export default SmallBanner;
