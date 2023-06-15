import { TaskModel } from "../TodosPage/TaskModel";

import { format } from "date-fns";
import styles from "./DashboardImportantTask.module.css";

export const DashboardImportantTask = ({ taskTitle, taskDeadline }: TaskModel) => {
    return (
        <div className={styles["important-task"]}>
            <strong>{taskTitle}</strong>
            <p>{format(taskDeadline, "MM/dd/yyyy")}</p>
        </div>
    );
};
