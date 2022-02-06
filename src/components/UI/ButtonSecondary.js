import styles from "./ButtonSecondary.module.css";

const ButtonSecondary = (props) => {
  return <button className={styles.btn}>{props.children}</button>;
};

export default ButtonSecondary;
