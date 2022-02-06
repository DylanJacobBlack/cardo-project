import smallStar from "../icons/smallStar.svg";
import cardo from "../icons/Cardo.svg"
import dropDownMenu from "../icons/dropDownMenu.svg";
import styles from "./NavBar.module.css"

const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <img src={smallStar} alt="star" id={styles["first-star"]} />
      <img src={smallStar} alt="star" id={styles["second-star"]} />
      <img src={cardo} alt="Cardo logo" id={styles["cardo-logo"]} />
      <div className={styles.grower}></div>
      <img src={dropDownMenu} alt="Cardo logo" id={styles.dropdown} />
    </div>
  );
};

export default NavBar;
