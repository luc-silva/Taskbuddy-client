import { Plus } from "phosphor-react";
import styles from "./AppAddButton.module.css";

export const AppAddButton = ({
    text,
    toggleModal,
    isModalActive,
}: {
    text: string;
    toggleModal: Function;
    isModalActive: boolean;
}) => {
    return (
        <button
            className={styles["add-btn"]}
            onClick={() => {
                toggleModal(!isModalActive);
            }}
        >
            <Plus size={20} />
            <span className={styles["btn-text"]}>{text}</span>
        </button>
    );
};
