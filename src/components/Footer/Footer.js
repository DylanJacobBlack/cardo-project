import FooterCard from "./FooterCard"

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <p className={styles.slogan}>Experience The Cardo</p>
      <div className={styles.grid}>
        <FooterCard />
        <FooterCard />
        <FooterCard />
        <FooterCard />
        <FooterCard />
      </div>
    </div>
  );
};

export default Footer;
