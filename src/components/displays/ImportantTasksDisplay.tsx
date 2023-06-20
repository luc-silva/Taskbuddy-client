import { Link } from "react-router-dom";
import styles from "./ImportantTasksDisplay.module.css";

export const ImportantTasksDisplay = () => {
    return (
        <>
            <div className={styles["display__title"]}>
                <h3>Important tasks to complete</h3>
                <p>
                    Track what you have to do. Go to{" "}
                    <Link to="/tasks">to-dos</Link> for more details
                </p>
            </div>
            <div className={styles["display__container"]}>
                {/* filter for important tasks */}
            </div>
        </>
    );
};
