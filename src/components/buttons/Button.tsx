import { Plus } from "phosphor-react";
import styles from "./Button.module.css";

export const Button = ({
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
