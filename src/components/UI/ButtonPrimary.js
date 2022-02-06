import styles from "./ButtonPrimary.module.css";

const ButtonPrimary = (props) => {
  return <button className={styles.btn}>{props.children}</button>;
};

export default ButtonPrimary;
