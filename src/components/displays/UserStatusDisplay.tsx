import styles from "./UserStatusDisplay.module.css";

export const UserStatusDisplay = ({
}: {
}) => { 
    return (
        <div className={styles["status-container"]}>
            <div className={styles["status-container-title"]}>
                <h3>Status</h3>
                <p>All your history in this app!</p>
            </div>
            <div className={styles["status-container-info"]}>
                <div className={styles["status-type"]}>
                    <strong>Projects</strong>
                    <div>
                        Projects planned:
                        <span>{0}</span>
                    </div>
                    <div>
                        Projects conclusion rate:
                        <span>{0}%</span>
                    </div>
                    <div>
                        Average project tasks:
                        <span>{0}</span>
                    </div>
                </div>

                <div className={styles["status-type"]}>
                    <strong>To-dos</strong>
                    <div>
                        To-dos created:
                        <span>{0}</span>
                    </div>
                    <div>
                        To-dos conclusion rate:
                        <span>{0}%</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
