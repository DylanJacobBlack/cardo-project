import styles from "./ButtonTertiary.module.css";

const ButtonTertiary = (props) => {
  return (
    <a href ={props.link}>
      <button className={styles.btn}>{props.children}</button>
    </a>
  );
};

export default ButtonTertiary;
