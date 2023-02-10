import { Trash } from "phosphor-react";
import { format } from "date-fns";
import styles from "./TodoCard.module.css";
import { TaskModel } from "./TaskModel";

interface TodoCardModel extends TaskModel {
    index: number;
    user: any;
    modifyUser: Function;
}

export const TodoCard = ({
    index,
    taskConcluded,
    taskTitle,
    taskDeadline,
    taskPriority,
    user,
    modifyUser,
}: TodoCardModel) => {
    function handleDelete() {
        modifyUser({
            ...user,
            todoList: user.todoList.filter((task: TaskModel, id: number) => {
                if (index !== id) {
                    return task;
                }
            }),
        });
    }
    function handleCheckbox() {
        modifyUser({
            ...user,
            todoList: user.todoList.map(setConclusion),
        });
    }
    function setConclusion(task: TaskModel, i: number) {
        return index === i ? { ...task, taskConcluded: !taskConcluded } : task;
    }

    return (
        <div className={styles["todo-card"]}>
            <div className={styles["card-task"]}>
                <input
                    type="checkbox"
                    checked={taskConcluded}
                    onChange={() => {
                        handleCheckbox();
                    }}
                />

                <div className={styles["card-title"]}>
                    Task:
                    <strong>{taskTitle}</strong>
                </div>
                <div className={styles["card-priority"]}>
                    Priority:
                    <strong>{taskPriority}</strong>
                </div>
            </div>

            <div className={styles["card-details"]}>
                <div className={styles["card-deadline"]}>
                    <strong>Deadline:</strong>
                    <span>{format(taskDeadline, "MM/dd/yyyy")}</span>
                </div>
                <button
                    className={styles["delete-btn"]}
                    onClick={() => {
                        handleDelete();
                    }}
                >
                    <Trash size={30} color="red" weight="regular" />
                </button>
            </div>
        </div>
    );
};
