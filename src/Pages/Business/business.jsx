import React from "react";
import BasePagelayout from "../../Components/BasPageLayout/basePageLayout";
import BusinessAPI from "../../Components/BusinesaAPI/businessAPI";
import BusinessBanner from "../../Components/BusinessBanner/businessBanner";
import BusinessCards from "../../Components/BusinessCards/businessCards";
import BusinessLargeBanner from "../../Components/BusinessLargeBanner/businessLargeBanner";
import Footer from "../../Components/Footer/footer";
import styles from "./business.module.scss";

const Business = () => {
  return (
    <BasePagelayout>
      <BusinessBanner />
      <BusinessLargeBanner />
      <BusinessCards />
      <BusinessAPI />
      <Footer />
    </BasePagelayout>
  );
};

export default Business;
