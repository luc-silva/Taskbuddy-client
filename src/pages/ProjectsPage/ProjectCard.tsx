import { ProjectModel } from "./ProjectPageModels";
import { ProjectTask } from "./ProjectTask";

import styles from "./ProjectCard.module.css";
import { format } from "date-fns";


export const ProjectCard = ({
    projectTitle,
    projectDeadline,
    projectStatus,
    projectDescription,
    projectTasks,
}: ProjectModel) => {
    return (
        <div className={styles["project-card"]}>
            <div>
                <div className={styles["card-title"]}>{projectTitle}</div>
                <div className={styles["card-maininfo"]}>
                    <span className={styles["maininfo-counter"]}>
                        Tasks completed
                        <strong>0/1</strong>
                    </span>
                    <span className={styles["maininfo-extra"]}>
                        <span>
                            Deadline:
                            <strong>{format(projectDeadline, "MM/dd/yyyy")}</strong>
                        </span>
                        <span>
                            Status:
                            <strong>{projectStatus}</strong>
                        </span>
                    </span>
                </div>
            </div>
            <div className={styles["card-description"]}>
                <strong>Description:</strong>
                {projectDescription}
            </div>

            <div className={styles["card-tasks"]}>
                <strong>Tasks:</strong>
                <div className={styles["tasks-container"]}>
                    {projectTasks.map(({ taskPriority, taskTitle }, index) => {
                        return (
                            <ProjectTask
                                taskPriority={taskPriority}
                                taskTitle={taskTitle}
                                key={index}
                                index={index}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
