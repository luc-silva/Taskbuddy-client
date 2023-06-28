import { useEffect, useState } from "react";
import { userStatusInitialValues } from "../../constants/initial-values";
import UserService from "../../services/UserService";
import styles from "./UserStatusDisplay.module.css";

export const UserStatusDisplay = ({ user }: { user: IUserSession }) => {
    let [status, setStatus] = useState(userStatusInitialValues);

    useEffect(() => {
        UserService.getUserStatus(user.id).then(setStatus);
    }, [user]);
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
                        <span>{status.project_total}</span>
                    </div>
                    <div>
                        Projects conclusion rate:
                        <span>{status.project_conclusion_rate}%</span>
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
                        <span>{status.todo_total}</span>
                    </div>
                    <div>
                        To-dos conclusion rate:
                        <span>{status.project_conclusion_rate}%</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
