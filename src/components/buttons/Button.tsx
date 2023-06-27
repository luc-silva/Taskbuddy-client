import { Plus } from "phosphor-react";
import styles from "./Button.module.css";
import { MouseEventHandler } from "react";
import { useNavigate } from "react-router-dom";

export const Button = ({
    text,
    toggleModal,
    isModalActive,
}: {
    text: string;
    toggleModal: Function;
    isModalActive: boolean;
}) => {
    let navigate = useNavigate()
    return (
        <button
            className={styles["add-btn"]}
            onClick={() => {
                toggleModal(!isModalActive);
                navigate("create")
            }}
        >
            <Plus size={20} />
            <span className={styles["btn-text"]}>{text}</span>
        </button>
    );
};
