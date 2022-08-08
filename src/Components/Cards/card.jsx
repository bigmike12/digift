import React from "react";
import Icon from "../../Icon";
import Button from "../Button/button";
import styles from "./card.module.scss";

const Card = ({
  tag,
  img,
  alt,
  title,
  text,
  icon,
  fees,
  btnTitle,
  btnIcon,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.test}>
        <div className={styles.card__tag}>
          <p>{tag}</p>
        </div>
        <div className={styles.card__content}>
          <div className={styles.card__content__title}>
            <img src={img} alt={alt} />
            <h3>{title}</h3>
          </div>

          <div className={styles.card__content__text}>
            <p>{text}</p>
          </div>

          <div className={styles.card__content__bottom}>
            <div className={styles.card__content__bottom__info}>
              <Icon name={icon} />
              <p>{fees}</p>
            </div>
            <Button
              title={btnTitle}
              icon={btnIcon}
              className={styles.button}
              iconStyle={styles.icon}
            />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Card;
