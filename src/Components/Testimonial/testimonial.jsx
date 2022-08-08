import React from "react";
import TestimonialCard from "../TestimonialCards/testimonialCard";
import { Infos } from "./data";
import styles from "./testimonial.module.scss";

const Testimonial = () => {
  return (
    <div className={styles.testimonial}>
      {Infos &&
        Infos.map((info) => (
          <TestimonialCard text={info.text} name={info.name} role={info.role} />
        ))}
    </div>
  );
};

export default Testimonial;
