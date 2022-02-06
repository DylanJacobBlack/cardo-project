import ButtonTertiary from "../UI/ButtonTertiary";
import styles from "./FooterCard.module.css";

const FooterCard = () => {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>Feature #1</h3>
      <p className={styles.text}>
        Aenean consequat ligula vitae orci suscipit luctus. Sed sagittis ligula
        sit amet quam vulputate congue.
      </p>
      <ButtonTertiary>Learn more</ButtonTertiary>
    </div>
  );
};

export default FooterCard;
