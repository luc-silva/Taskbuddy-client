import styles from "./AppButtonPanel.module.css";

export const AppButtonPanel = ({
    toggleModal,
    isActive,
}: {
    toggleModal: Function;
    isActive: boolean;
}) => {
    return (
        <div className={styles["button-panel"]}>
            <button className={styles["add-btn"]}>Add</button>
            <button className={styles["close-btn"]} onClick={()=> {
                toggleModal(!isActive)
            }}>Close</button>
        </div>
    );
};
