import UserService from "../../services/UserService";
import { userStatusInitialValues } from "../../constants/initial-values";
import { useEffect, useState } from "react";

import styles from "./ProgressionStatusDisplay.module.css";

export const ProgressionStatusDisplay = ({ user }: { user: IUserSession }) => {
    let [status, setStatus] = useState(userStatusInitialValues);

    useEffect(() => {
        UserService.getUserStatus(user.id).then(setStatus);
    }, [user]);
    return (
        <>
            <div className={styles["counter-display"]}>
                <strong>{status.todo_concluded}</strong>
                <p>of {status.todo_total} tasks done!</p>
            </div>
            <div className={styles["counter-display"]}>
                <strong>{status.project_concluded}</strong>
                <p>of {status.project_total} projects done!</p>
            </div>
        </>
    );
};
