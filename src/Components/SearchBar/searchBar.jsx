import React from "react";
import Icon from "../../Icon";
import styles from "./searchBar.module.scss";

const SearchBar = () => {
  return (
    <div className={styles.searchBar}>
      <Icon className={styles.searchBar__icon} name="Search" />
      <input
        className={styles.searchBar__input}
        placeholder="Find cards anywhere"
        type="search"
      />
    </div>
  );
};

export default SearchBar;
