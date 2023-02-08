import { ProjectTaskModel } from "./ProjectPageModels";

import styles from "./ProjectTask.module.css";

interface ProjectCardTasks extends ProjectTaskModel {
    index: number;
}

export const ProjectTask = ({ taskTitle, taskPriority, index }: ProjectCardTasks) => {
    return (
        <div className={styles["task-card"]}>
            <span className={styles["task-card-main"]}>
                <span>
                    <strong>{index + 1}#</strong>
                    <input type="checkbox" />
                </span>
                <strong>{taskTitle}</strong>
            </span>
            <span className={styles["task-card-priority"]}>
                Priority:
                <strong>{taskPriority}</strong>
            </span>
        </div>
    );
};
