import FooterCard from "./FooterCard"

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <text className={styles.slogan}>Experience The Cardo</text>
      <div className={styles.grid}>
        <FooterCard />
        <FooterCard />
        <FooterCard />
        <FooterCard />
        <FooterCard />
        Substantial change  
      </div>
    </div>
  );
};

export default Footer;
