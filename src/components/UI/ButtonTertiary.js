import styles from "./ButtonTertiary.module.css";

const ButtonTertiary = (props) => {
  return <button className={styles.btn}>{props.children}</button>;
};

export default ButtonTertiary;

