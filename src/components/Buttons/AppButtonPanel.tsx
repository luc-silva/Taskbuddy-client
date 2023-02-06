import styles from "./AppButtonPanel.module.css";

export const AppButtonPanel = ({
    handleFunc,
    toggleModal,
    isActive,
}: {
    handleFunc: Function;
    toggleModal: Function;
    isActive: boolean;
}) => {
    return (
        <div className={styles["button-panel"]}>
            <button
                className={styles["add-btn"]}
                onClick={() => {
                    handleFunc();
                }}
            >
                Add
            </button>
            <button
                className={styles["close-btn"]}
                onClick={() => {
                    toggleModal(!isActive);
                }}
            >
                Close
            </button>
        </div>
    );
};
