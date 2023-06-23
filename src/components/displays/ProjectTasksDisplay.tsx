import { ProjectTaskCard } from "../cards/ProjectTaskCard";
import styles from "./ProjectTasksDisplay.module.css";

export const ProjectTasksDisplay = ({ tasks }: { tasks: IProjectTask[] }) => {
    return (
        <div className={styles["card-tasks"]}>
            <strong>Tasks:</strong>
            <div className={styles["tasks-container"]}>
                {tasks.map((item, index) => {
                    return <ProjectTaskCard data={item} key={index} />;
                })}
            </div>
        </div>
    );
};
