import Icon from "../icons/CustomizableIcon";

import styles from "./CreditCardMobile.module.css";
import ear from "../icons/ear.svg";
import orbs from "../icons/orbs.svg";
import threeStars from "../icons/threeStarsVertical.svg"

const CreditCardMobile = () => {
  return (
    <div className={styles["card-box"]}>
      <div className={styles.card}></div>
      <div id={styles["first-star"]}>
        <Icon icon="star" width="12.39" height="12.39" />
      </div>
      <div id={styles["second-star"]}>
        <Icon icon="star" width="12.39" height="12.39" />
      </div>
      <div id={styles["cardo-logo"]}>
        <Icon icon="cardo" width="43.3" height="13.87" />
      </div>
      <img id={styles.ear} src={ear} alt="ear?" />
      <img id={styles.orbs} src={orbs} alt="orbs" />
      <div className={styles["emv-box"]}>
        <div className={styles.overlay1}>
          <div id={styles.box1} />
          <div id={styles.box2} />
          <div id={styles.box3} />
        </div>
        <div className={styles.overlay2}>
          <div id={styles.box4} />
          <div id={styles.box5} />
          <div id={styles.box6} />
        </div>
      </div>
      <text className={styles.money}>$12,445.00</text>
      <text className={styles.number}>**5678</text>
      <img className={styles.stars} src={threeStars} alt="three vertical stars" />
    </div>
  );
};

export default CreditCardMobile;
