import styles from "./Header.module.css";
import threeStars from "../icons/threeStars.svg";
import largeStar from "../icons/largeStar.svg";
import mediumStar from "../icons/mediumStar.svg";
import longArrow from "../icons/longArrow.svg";
import shortArrow from "../icons/shortArrow.svg";
import ButtonPrimary from "../UI/ButtonPrimary";
import ButtonSecondary from "../UI/ButtonSecondary";

const SloganBox = () => {
  return (
    <div className={styles.header}>
      <img src={threeStars} alt="three stars" />
      <img src={largeStar} alt="large star" id={styles.largeStar} />
      <img src={mediumStar} alt="medium star" id={styles.mediumStar} />
      <div className={styles.slogan}>
        <div>All the</div>
        <div className={styles.experience}>experience</div>
        <div>in the new</div>
        <div>credit card</div>
      </div>
      <img
        src={longArrow}
        alt="right pointing arrow"
        className={styles.longArrow}
      />
      <div className={styles.splodge1} />
      <div className={styles.splodge2} />
      <p className={styles.info}>
        Simple transfers, payments for utilities, functional statemement, card
        settings, for which you used to have to go to the branch online-banking
      </p>
      <ButtonPrimary>Order a card</ButtonPrimary>
      <ButtonSecondary>
        How it works
        &nbsp;
        <img src={shortArrow} alt="short arrow" />
      </ButtonSecondary>
    </div>
  );
};

export default SloganBox;
