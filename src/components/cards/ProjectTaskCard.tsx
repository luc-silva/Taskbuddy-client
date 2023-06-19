import { ChangeEvent, useEffect, useState } from "react";
import styles from "./ProjectTask.module.css";
import { projectTaskInitialValues } from "../../constants/initial-values";
import ProjectTaskService from "../../services/ProjectTaskService";

export const ProjectTaskCard = ({ data }: { data: IProjectTask }) => {
    let [taskDetails, setTaskDetails] = useState(projectTaskInitialValues);
    function handleCheckbox(event: ChangeEvent<HTMLInputElement>) {
        setTaskDetails({ ...taskDetails, completed: !taskDetails.completed });
        ProjectTaskService.update(taskDetails.id, taskDetails)
    }

    async function update() {
        await ProjectTaskService.get(data.id).then((data) => {
            setTaskDetails(data);
        });
    }
    useEffect(() => {
        update();
    }, [data]);

    return (
        <div className={styles["task-card"]}>
            <div className={styles["task-card-main"]}>
                <div>
                    <input
                        type="checkbox"
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
