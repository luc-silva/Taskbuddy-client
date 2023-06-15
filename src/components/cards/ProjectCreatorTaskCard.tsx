import { ProjectTaskModel } from "./ProjectPageModels";
import { Trash } from "phosphor-react";

import styles from "./ProjectCreatorTaskCard.module.css";

interface ProjectTaskCardModel extends ProjectTaskModel {
    index: number;
    removeProjectTask: Function;
}

export const ProjectCreatorTaskCard = ({
    taskTitle,
    taskPriority,
    index,
    removeProjectTask,
}: ProjectTaskCardModel) => {
    return (
        <div className={styles["task-card"]}>
            <div className={styles["card-maininfo"]}>
                <strong>{taskTitle}</strong>
                <span>{taskPriority} Priority</span>
            </div>
            <div
                className={styles["card-icons"]}
                onClick={() => {
                    removeProjectTask(index);
                }}
            >
                <Trash size={24} />
            </div>
        </div>
    );
};
