import React, { useEffect, useState } from "react";
import Button from "../Button/button";
import Card from "../Cards/card";
import { infos } from "./data";
import styles from "./mainMenu.module.scss";

const MainMenu = () => {
  const [items, setItems] = useState([]);
  const [visible, setVisible] = useState(2);

  const handleShowMore = () => {
    setVisible((prev) => prev + 2);
  };

  const handleShowLess = () => {
    setVisible((prev) => prev - 2);
  };

  useEffect(() => {
    setItems(infos);
  }, []);

  return (
    <div className={styles.mainMenu}>
      <div className={styles.mainMenu__content}>
        <div className={styles.mainMenu__container1}>
          {items &&
            items
              .slice(0, visible)
              .map((info) => (
                <Card
                  tag={info.tag}
                  img={info.img}
                  alt={info.alt}
                  title={info.title}
                  text={info.text}
                  icon={info.icon}
                  fees={info.fees}
                  btnTitle={info.btnTitle}
                  btnIcon={info.btnIcon}
                />
              ))}
        </div>

        <div className={styles.mainMenu__container2}>
          {items &&
            items
              .slice(0, visible)
              .map((info) => (
                <Card
                  tag={info.tag}
                  img={info.img}
                  alt={info.alt}
                  title={info.title}
                  text={info.text}
                  icon={info.icon}
                  fees={info.fees}
                  btnTitle={info.btnTitle}
                  btnIcon={info.btnIcon}
                />
              ))}
        </div>

        <div className={styles.mainMenu__container3}>
          {items &&
            items
              .slice(0, visible)
              .map((info) => (
                <Card
                  tag={info.tag}
                  img={info.img}
                  alt={info.alt}
                  title={info.title}
                  text={info.text}
                  icon={info.icon}
                  fees={info.fees}
                  btnTitle={info.btnTitle}
                  btnIcon={info.btnIcon}
                />
              ))}
        </div>
      </div>

      {visible < 4 ? (
        <div className={styles.button}>
          <Button
            title="Load more products"
            className={styles.button__btn}
            onClick={handleShowMore}
          />
        </div>
      ) : (
        <div className={styles.button}>
          <Button
            title="End of product list"
            className={styles.button__btn}
            onClick={handleShowLess}
          />
        </div>
      )}
    </div>
  );
};

export default MainMenu;
