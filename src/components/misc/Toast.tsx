import { Info, Warning } from "phosphor-react";
import { useEffect } from "react";

import styles from "./Toast.module.css";

export const Toast = ({
    isActive,
    toggleToast,
    type,
    message,
}: {
    isActive: boolean;
    toggleToast: Function;
    type: "error" | "info";
    message: string;
}) => {
    useEffect(() => {
        let timer = setInterval(() => {
            toggleToast(false);
        }, 8000);

        return () => {
            clearTimeout(timer);
        };
    }, [isActive, message]);

    if (!isActive) return null;
    return (
        <div
            className={styles["toast"]}
            style={{ backgroundColor: type === "error" ? "#e17070" :"var(--main-color)" }}
        >
            <div className={styles["icon"]}>
                {(type === "error" && (
                    <Warning size={24}  />
                )) || <Info size={24}  />}
            </div>
            <div className={styles["message"]}>
                <p>{message}</p>
            </div>
        </div>
    );
};
