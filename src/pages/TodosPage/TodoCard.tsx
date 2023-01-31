import { NotePencil, Trash } from "phosphor-react";
import { format } from "date-fns";
import styles from "./TodoCard.module.css";

interface Task {
    taskConcluded: boolean;
    taskTitle: string;
    taskDeadline: Date;
}

export const TodoCard = ({ taskConcluded, taskTitle, taskDeadline }: Task) => {
    return (
        <div className={styles["todo-card"]}>
            <div className={styles["card-task"]}>
                <input type="checkbox" checked={taskConcluded}/>
                <div className={styles["card-title"]}>
                    Task:
                    <strong>{taskTitle}</strong>
                </div>
            </div>

            <div className={styles["card-details"]}>
                <div className={styles["card-deadline"]}>
                    <strong>Deadline:</strong>
                    <span>{format(taskDeadline, "MM/dd/yyyy")}</span>
                </div>
                <button className={styles["delete-btn"]}>
                    <Trash size={30} color="red" weight="regular" />
                    <NotePencil size={30} color="royalblue" weight="regular" />
                </button>
            </div>
        </div>
    );
};
