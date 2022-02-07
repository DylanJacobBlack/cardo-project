import ButtonTertiary from "../UI/ButtonTertiary";
import styles from "./FooterCard.module.css";

const FooterCard = (props) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{props.title}</h3>
      <p className={styles.text}>{props.description}</p>
      <ButtonTertiary link={props.button.link}>{props.button.text}</ButtonTertiary>
    </div>
  );
};

export default FooterCard;
