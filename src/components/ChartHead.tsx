import styles from "@/styles/ChartHead.module.css";

export const ChartHead = () => (
  <header className={`${styles.chartHeader}`}>
    <h2 className={styles.stockLevelTitle}>Stock Level</h2>
    <div className={styles.descriptionSlot}>
      <h3 className={styles.chip}>
        <i className={styles.chipDecoration}></i>Live Marketing Campaign
      </h3>
      <ul className={styles.chartKey}>
        <li className={styles.keyItem}>
          <i className={styles.keyExample + " " + styles.actual}></i>
          <span className={styles.keyText}>Actual Stocks</span>
        </li>
        <li className={styles.keyItem}>
          <i className={styles.keyExample + " " + styles.projected}></i>
          <span className={styles.keyText}>Projected Stocks</span>
        </li>
        <li className={styles.keyItem}>
          <i className={styles.keyExample + " " + styles.demand}></i>
          <span className={styles.keyText}>Demand</span>
        </li>
      </ul>
    </div>
  </header>
);
