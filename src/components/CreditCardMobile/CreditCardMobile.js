import Icon from "../icons/CustomizableIcon";

import styles from "./CreditCardMobile.module.css";
import ear from "../icons/ear.svg";

const CreditCardMobile = () => {
  return (
    <div className={styles["card-box"]}>
      <div className={styles.card}></div>
      <div id={styles["first-star"]}>
        <Icon name="star" width="12.39" height="12.39" color="#1D1D1C" />
      </div>
      <div id={styles["second-star"]}>
        <Icon name="star" width="12.39" height="12.39" color="#1D1D1C" />
      </div>
      <div id={styles["cardo-logo"]}>
        <Icon name="cardo" width="43.3" height="13.87" color="#1D1D1C" />
      </div>
      <img id={styles.ear} src={ear} alt="ear?" />
      <div id={styles.orbs}>
        <Icon name="orbs" width="28.21" height="17.43" color="#1D1D1C" />
      </div>
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
      <p className={styles.money}>$12,445.00</p>
      <p className={styles.number}>**5678</p>
      <div className={styles.stars}>
        <Icon name="stars" width="10.92" height="39.88" color="#FFFFFF" />
      </div>
    </div>
  );
};

export default CreditCardMobile;
