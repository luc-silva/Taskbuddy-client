import { isProjectCompleted } from "../../utils/tools";
import { format } from "date-fns";
import { Trash } from "phosphor-react";
import styles from "./ProjectAboutDisplay.module.css";

export const ProjectAboutDisplay = ({
    data,
    handleDelete,
}: {
    data: IProject;
    handleDelete: Function;
}) => {
    function setProjectStatus(): string {
        return isProjectCompleted(data.projectTasks)
            ? "Completed"
            : "Unfinished";
    }
    return (
        <>
            <div className={styles["container"]}>
                Deadline:
                <strong>{format(new Date(data.deadline), "MM/dd/yyyy")}</strong>
            </div>
            <div className={styles["container"]}>
                Status:
                <strong>{setProjectStatus()}</strong>
            </div>
            <Trash
                size={30}
                color="red"
                weight="regular"
                onClick={() => {
                    handleDelete();
                }}
            />
        </>
    );
};
