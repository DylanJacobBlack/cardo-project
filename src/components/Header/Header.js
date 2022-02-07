import MainContent from "../MainContent/MainContent";
import DesktopVisuals from "../DesktopVisuals/DesktopVisuals";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.flexbox}>
      <MainContent />
      <div className="breakpoint">
        <DesktopVisuals />
      </div>
    </div>
  );
};

export default Header;
