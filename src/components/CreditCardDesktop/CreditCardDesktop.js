import Icon from "../icons/CustomizableIcon";

import styles from "./CreditCardDesktop.module.css";
import ear from "../icons/ear2.svg"

const CreditCardDesktop = () => {
  return (
    <div className={styles["card-box"]}>
      <div id={styles["first-star"]}>
        <Icon name="star" width="16.1" height="16.1" color="#ccd7eb" />
      </div>
      <div id={styles["second-star"]}>
        <Icon name="star" width="16.1" height="16.1" color="#ccd7eb" />
      </div>
      <div id={styles["cardo-logo"]}>
        <Icon name="cardo" width="56.25" height="18.02" color="#1D1D1C" />
      </div>
      <img id={styles.ear} src={ear} alt="ear?" />
      <div id={styles.orbs}>
        <Icon name="orbs" width="36.64" height="22.64" color="#1D1D1C" />
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
      <p className={styles.name}>MAURICIO LÓPEZ</p>

      <p className={styles.number}>5678</p>
      <div className={styles.stars}>
        <Icon name="stars" width="14.19" height="51.8" color="#ccd7eb" />
      </div>
    </div>
  );
};

export default CreditCardDesktop;
