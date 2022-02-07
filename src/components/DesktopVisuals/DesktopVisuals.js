import CreditCardDesktop from "../CreditCardDesktop/CreditCardDesktop.js"

import hand from "../images/hand.png"
import lines from "../icons/lines.svg"
import styles from "./DesktopVisuals.module.css";

const DesktopVisuals = () => {
  return <div className={styles.visuals}>
    <img className={styles.hand} src={hand} alt="hand" />
    <img className={styles.lines} src={lines} alt="lines" />
    <CreditCardDesktop />
  </div>;
};

export default DesktopVisuals;
