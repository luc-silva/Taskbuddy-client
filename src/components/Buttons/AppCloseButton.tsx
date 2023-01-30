import { X } from "phosphor-react";
import styles from "./AppCloseButton.module.css";

export const AppCloseButton = ({
    toggleModal,
    isActive,
}: {
    toggleModal: Function;
    isActive: boolean;
}) => {
    return (
        <button className={styles["app-close-btn"]} onClick={() => {
            toggleModal(!isActive)
        }}>
            <X size={30}/>
        </button>
    );
};
