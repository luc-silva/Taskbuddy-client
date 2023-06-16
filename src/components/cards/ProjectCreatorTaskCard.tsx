import { Trash } from "phosphor-react";

import styles from "./ProjectCreatorTaskCard.module.css";

export const ProjectCreatorTaskCard = ({ 
    task,
    index,
    setProjectTask,
}: {
    task:IProjectTask
    index:number
    setProjectTask: Function;
}) => {
    function removeTask() {}
    return (
        <div className={styles["task-card"]}>
            <div className={styles["card-maininfo"]}>
                <strong>{task.title}</strong>
                <span>{task.priority} Priority</span>
            </div>
            <div className={styles["card-icons"]} onClick={removeTask}>
                <Trash size={24} />
            </div>
        </div>
    );
};
