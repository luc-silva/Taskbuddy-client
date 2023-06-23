import { ChangeEvent, useEffect, useState } from "react";
import styles from "./ProjectTaskCard.module.css";
import { projectTaskInitialValues } from "../../constants/initial-values";
import ProjectTaskService from "../../services/ProjectTaskService";

export const ProjectTaskCard = ({ data }: { data: IProjectTask }) => {
    let [taskDetails, setTaskDetails] = useState(projectTaskInitialValues);

    async function handleCheckbox(event: ChangeEvent<HTMLInputElement>) {
        setTaskDetails({ ...taskDetails, completed:!taskDetails.completed });
        await ProjectTaskService.update(taskDetails.id, { ...taskDetails, completed:!taskDetails.completed })
    }

    useEffect(() => {
        ProjectTaskService.get(data.id).then(setTaskDetails);
    }, [data.id]);

    return (
        <div className={styles["task-card"]}>
            <div className={styles["task-card-main"]}>
                <div>
                    <input
                        type="checkbox"
                        name="completed"
                        checked={taskDetails.completed}
                        onChange={handleCheckbox}
                    />
                </div>
                <strong>{taskDetails.title}</strong>
            </div>
            <div className={styles["task-card-priority"]}>
                Priority:
                <strong>{taskDetails.priority}</strong>
            </div>
        </div>
    );
};
