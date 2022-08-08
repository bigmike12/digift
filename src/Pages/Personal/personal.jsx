import React from "react";
import Banner from "../../Components/Banner/banner";
import BasePagelayout from "../../Components/BasPageLayout/basePageLayout";
import Footer from "../../Components/Footer/footer";
import MainMenu from "../../Components/MainMenu/mainMenu";
import SideMenu from "../../Components/SideMenu/sideMenu";
import SmallBanner from "../../Components/SmallBanner/smallBanner";
import Testimonial from "../../Components/Testimonial/testimonial";
import styles from "./personal.module.scss";

const Personal = () => {
  return (
    <BasePagelayout>
      <div className={styles.homePage}>
        <Banner />

        <div className={styles.latest}>
          <h2>Latest Arrivals</h2>
          <div className={styles.latest__content}>
            <SideMenu />
            <MainMenu />
          </div>
        </div>

        <div className={styles.testimonal}>
          <div className={styles.testimonal__title}>
            <h1>
              “Hear what happy customers
              <br /> are saying about Digift”
            </h1>
          </div>
          <Testimonial />
        </div>

        <div className={styles.smallBanner}>
          <SmallBanner />
        </div>

        <div>
          <Footer />
        </div>
      </div>
    </BasePagelayout>
  );
};

export default Personal;
