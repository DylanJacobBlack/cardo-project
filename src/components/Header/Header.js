import styles from "./Header.module.css";
import threeStars from "../icons/threeStars.svg";
import longArrow from "../icons/longArrow.svg";
import shortArrow from "../icons/shortArrow.svg";

import Icon from "../icons/CustomizableIcon";
import CreditCardMobile from "../CreditCardMobile/CreditCardMobile"
import ButtonPrimary from "../UI/ButtonPrimary";
import ButtonSecondary from "../UI/ButtonSecondary";
import StatsBox from "../UI/StatsBox";

const SloganBox = () => {
  return (
    <div className={styles.header}>
      <img src={threeStars} alt="three stars" />
      <div id={styles.largeStar}><Icon icon="star" width="56" height="56" /></div>
      <div id={styles.mediumStar}><Icon icon="star" width="23" height="23" /></div>
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
        How it works &nbsp;
        <img src={shortArrow} alt="short arrow" />
      </ButtonSecondary>
      <div className={styles.stats}>
        <StatsBox title="Active users" number="5000+" spacer="true"/>
        <StatsBox title="Download" number="30.3k" spacer="true"/>
        <StatsBox title="Reviews" number="1200+" spacer="false"/>
      </div>
      <CreditCardMobile />
    </div>
  );
};

export default SloganBox;
