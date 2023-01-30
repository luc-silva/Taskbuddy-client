import styles from "./AppButtonPanel.module.css";

export const AppButtonPanel = () => {
    return (
        <div className={styles["button-panel"]}>
            <button className={styles["add-btn"]}>Add</button>
            <button className={styles["close-btn"]}>Close</button>
        </div>
    );
};
