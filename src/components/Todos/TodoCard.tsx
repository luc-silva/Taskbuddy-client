import { NotePencil, Trash } from "phosphor-react";
import styles from "./TodoCard.module.css";

export const TodoCard = () => {
    return (
        <div className={styles["todo-card"]}>
            <div className={styles["card-task"]}>
                <input type="checkbox" className={styles["card-checkbox"]} />
                <div className={styles["card-title"]}>
                    Task:
                    <strong>Kill someone</strong>
                </div>
            </div>

            <div className={styles["card-details"]}>
                <div className={styles["card-deadline"]}>
                    <strong>Deadline:</strong>
                    1233213123
                </div>
                <button className={styles["delete-btn"]}>
                    <Trash size={30} color="red" weight="regular" />
                    <NotePencil size={30} color="royalblue" weight="regular" />
                </button>
            </div>
        </div>
    );
};
