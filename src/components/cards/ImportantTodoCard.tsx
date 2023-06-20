import { format } from "date-fns";
import styles from "./DashboardImportantTask.module.css";

export const ImportantTodoCard = ({ text, deadline }: ITodo) => {
    return (
        <div className={styles["important-task"]}>
            <strong>{text}</strong>
            <p>{format(new Date(deadline), "MM/dd/yyyy")}</p>
        </div>
    );
};
