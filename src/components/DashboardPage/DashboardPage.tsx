import styles from "./DashboardPage.module.css"

export const DashboardPage = () => {
    return (
        <div className={styles["dashboard-page"]}>
            <div className={styles["dashboard-greetings"]}>
                <h2>Hello there, user</h2>
                <p>Currently, you have...</p>
            </div>
            <div className={styles["dashboard-status-display"]}>
                <div className={styles["dashboard-tasks-completed-display"]}>
                    Tasks Completed:
                    <div className={styles["completed-value-container"]}>
                        <div className={styles["completed-value"]}>3124</div>
                        <div className={styles["total-value"]}>of 32</div>
                    </div>
                </div>
                <div className={styles["dashboard-projects-completed-display"]}>
                    Project Completed:
                    <div className={styles["completed-value-container"]}>
                        <div className={styles["completed-value"]}>312</div>
                        <div className={styles["total-value"]}>of 32</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
