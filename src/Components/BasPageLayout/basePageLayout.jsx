import NavBar from "../Navbar/navBar";
import styles from "./basePageLayout.module.scss";

const BasePagelayout = ({ children }) => {
  return (
    <div className={styles.BasePagelayout}>
      <NavBar />
      <div>{children}</div>
    </div>
  );
};

export default BasePagelayout;
