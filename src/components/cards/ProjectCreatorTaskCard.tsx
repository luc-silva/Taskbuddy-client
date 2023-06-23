import { Trash } from "phosphor-react";

import styles from "./ProjectCreatorTaskCard.module.css";

export const ProjectCreatorTaskCard = ({
    index,
    task,
    tasks,
    setProjectTasks,
}: {
    index: number;
    task: IProjectTask;
    tasks: IProjectTask[];
    setProjectTasks: React.Dispatch<React.SetStateAction<IProjectTask[]>>;
}) => {
    function removeTask() {
        setProjectTasks(tasks.filter((_, taskIndex) => taskIndex !== index));
    }
    return (
        <div className={styles["task-card"]}>
            <div className={styles["card-maininfo"]}>
                <strong>{task.title}</strong>
                <span>Priority: {task.priority} </span>
            </div>
            <div className={styles["card-icons"]} onClick={removeTask}>
                <Trash size={20} />
            </div>
        </div>
    );
};
