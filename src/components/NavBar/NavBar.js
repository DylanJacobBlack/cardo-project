import Icon from "../icons/CustomizableIcon";

import dropDownMenu from "../icons/dropDownMenu.svg";
import styles from "./NavBar.module.css"

const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <div id={styles["first-star"]} ><Icon icon="star" width="21.27" height="21.27" /></div>
      <div id={styles["second-star"]} ><Icon icon="star" width="21.27" height="21.27" /></div>
      <div id={styles["cardo-logo"]}><Icon icon="cardo" width="75" height="24" /></div>
      <div className={styles.grower}></div>
      <img src={dropDownMenu} alt="Cardo logo" id={styles.dropdown} />
    </div>
  );
};

export default NavBar;
