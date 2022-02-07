import Icon from "../icons/CustomizableIcon";

import dropDownMenu from "../icons/dropDownMenu.svg";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <div id={styles["first-star"]}>
        <Icon name="star" width="21.27" height="21.27" color="#1D1D1C" />
      </div>
      <div id={styles["second-star"]}>
        <Icon name="star" width="21.27" height="21.27" color="#1D1D1C" />
      </div>
      <div id={styles["cardo-logo"]}>
        <Icon name="cardo" width="75" height="24" color="#1D1D1C" />
      </div>
      <div className={styles.grower}></div>
      <div className={styles["nav-link"]}>Deposit</div>
      <div className={styles["nav-link"]}>Dashboard</div>
      <div className={styles["nav-link"]}>Company</div>
      <div className={styles["nav-link"]}>Pricing</div>
      <img src={dropDownMenu} alt="Cardo logo" id={styles.dropdown} />
    </div>
  );
};

export default NavBar;
