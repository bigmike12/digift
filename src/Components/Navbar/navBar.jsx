import Icon from "../../Icon";
import Button from "../Button/button";
import SearchBar from "../SearchBar/searchBar";
import styles from "./navBar.module.scss";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className={styles.navBar}>
      <div className={styles.navBar__logo}>
        <Icon name="Logo" />
      </div>
      <div className={styles.navBar__details}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className={styles.navBar__details_personal}>
            <p>Personal</p>
            <Icon name="Arrow-Right" />
          </div>
        </Link>
        <Link to="/business" style={{ textDecoration: "none" }}>
          <div className={styles.navBar__details_business}>
            <p>Business</p>
            <Icon name="Arrow-Right" />
          </div>
        </Link>

        <SearchBar />

        <div className={styles.navBar__details_switch}>
          <div className={styles.navBar__details_switch_light}>
            <Icon className={styles.light} name="LightMode" />
          </div>
          <div className={styles.navBar__details_switch_dark}>
            <Icon className={styles.dark} name="DarkMode" />
          </div>
        </div>

        <div className={styles.button}>
          <Button className={styles.button__login} title="Login" />
          <Button
            className={styles.button__started}
            title="Get started"
            icon="Star"
            iconStyle={styles.icon}
          />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
