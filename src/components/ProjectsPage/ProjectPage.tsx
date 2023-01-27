import styles from "./ProjectPage.module.css"

export const ProjectPage = () => {
    return (
        <div className={styles["project-page"]}>
            <div className={styles["project-button-panel"]}>
                <button className={styles["add-project-btn"]}>Add Project</button>
            </div>
            <div className={styles["project-display"]}>
                <div className={styles["project-container"]}>
                    <div>
                        <div className={styles["project-name"]}></div>
                        <div className={styles["project-info"]}></div>
                    </div>
                    <div className={styles["project-details"]}>
                        <strong>Details:</strong>
                        asdas
                    </div>
                    <div className={styles["project-tasks"]}>
                        <strong>Tasks:</strong>
                        <div className={styles["project-tasks-container"]}>
                            <div className={styles["project-task-card"]}>
                                <div className={styles["project-task-maininfo"]}></div>
                                <div className={styles["project-task-priority"]}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}