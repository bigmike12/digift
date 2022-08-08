import React from "react";
import styles from "./sideMenu.module.scss";
import { options } from "./data";

const SideMenu = () => {
  return (
    <div className={styles.sidemenu}>
      <div className={styles.sidemenu__options}>
        <p className={styles.sidemenu__options__filters}>Filters</p>
        <p className={styles.sidemenu__options__reset}>Reset</p>
      </div>

      <div>
        <h3 className={styles.title}>Categories</h3>
        {options &&
          options.map((option) => (
            <div className={styles.sidemenu__check}>
              <input
                type="checkbox"
                id={option.options}
                name={option.options}
                value={option.options}
                className={styles.sidemenu__check__input}
              />
              <label htmlFor={option}>{option.options}</label>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SideMenu;
