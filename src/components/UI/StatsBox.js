import styles from "./StatsBox.module.css";

const StatsBox = (props) => {
  const mode = (props.spacer === "true") ? styles.spacer : styles["no-spacer"]

  return (
    <div className={mode}>
      <p className={styles.title}>{props.title}</p>
      <h2 className={styles.number}>{props.number}</h2>
    </div>
  );
};

export default StatsBox;
