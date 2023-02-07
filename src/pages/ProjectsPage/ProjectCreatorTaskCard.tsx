import { ProjectTaskModel } from "./ProjectPageModels";
import { Trash } from "phosphor-react";

import styles from "./ProjectCreatorTaskCard.module.css"

export const ProjectCreatorTaskCard = ({taskTitle, taskPriority }: ProjectTaskModel) => {
    return (
        <div className={styles["task-card"]}>
            <div className={styles["card-maininfo"]}>
                <strong>{taskTitle}</strong>
                <span>{taskPriority} Priority</span>
            </div>
            <div className={styles["card-icons"]}>
                <Trash size={24} />
            </div>
        </div>
    );
};
