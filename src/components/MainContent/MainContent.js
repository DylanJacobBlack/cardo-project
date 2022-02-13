import styles from "./MainContent.module.css";
import threeStars from "../icons/threeStars.svg";
import longArrow from "../icons/longArrow.svg";
import shortArrow from "../icons/shortArrow.svg";

import NavBar from "../NavBar/NavBar";
import Icon from "../icons/CustomizableIcon";
import CreditCardMobile from "../CreditCardMobile/CreditCardMobile";
import ButtonPrimary from "../UI/ButtonPrimary";
import ButtonSecondary from "../UI/ButtonSecondary";
import StatsBox from "../UI/StatsBox";

const MainContent = () => {
  return (
    <div className={styles.grower}>
      <NavBar />
      <div className={styles["main-content"]}>
        <img src={threeStars} alt="three stars" />
        <div id={styles.largeStar}>
          <Icon name="star" width="56" height="56" color="#1D1D1C" />
        </div>
        <div id={styles.mediumStar}>
          <Icon name="star" width="23" height="23" color="#1D1D1C" />
        </div>
        <div className={styles.slogan}>
          <div className="reverse-breakpoint">
            <div>Unlock</div>
            <div>
              the <strong>potential</strong>
            </div>
            <div>of the new</div>
            <div>credit card</div>
          </div>
          <div className="breakpoint">
            <div>
              Unlock the <strong>potential</strong>
            </div>
            <div>of the new credit card</div>
          </div>
        </div>
        <img
          src={longArrow}
          alt="right pointing arrow"
          className={styles["long-arrow"]}
        />
        <div className={styles.splodge1} />
        <div className={styles.splodge2} />
        <p className={styles.info}>
          Tranfers, payments, and electronic statements,
          all of which used to require physically going to a branch.
          Online-banking you can trust.
        </p>
        <ButtonPrimary>Order a card</ButtonPrimary>
        <ButtonSecondary>
          How it works &nbsp;
          <img src={shortArrow} alt="short arrow" />
        </ButtonSecondary>
        <div className={styles.stats}>
          <StatsBox title="Active users" number="5000+" spacer="true" />
          <StatsBox title="Downloads" number="30.3k" spacer="true" />
          <StatsBox title="Reviews" number="1200+" spacer="false" />
        </div>
        <div className="reverse-breakpoint">
          <CreditCardMobile />
        </div>
      </div>
    </div>
  );
};

export default MainContent;
