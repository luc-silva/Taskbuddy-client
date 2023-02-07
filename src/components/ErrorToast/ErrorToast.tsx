import { Warning } from "phosphor-react";
import { useEffect } from "react";

import styles from "./ErrorToast.module.css";

export const ErrorToast = ({
    isActive,
    toggleToast,
    message,
}: {
    isActive: boolean;
    toggleToast: Function;
    message: string;
}) => {
    useEffect(() => {
        let timer = setInterval(() => {
            toggleToast(false);
        }, 8000);

        return () => {
            clearTimeout(timer);
        };
    }, [isActive]);

    if (!isActive) return null;
    return (
        <div className={styles["error-toast"]}>
            <div className={styles["error-icon"]}>
                <Warning size={38} color={"white"} />
            </div>
            <div className={styles["error-message"]}>
                <strong>Something went wrong</strong>
                <p>{message}</p>
            </div>
        </div>
    );
};
