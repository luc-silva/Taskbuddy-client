import styles from "./TodosPage.module.css";

export const TodosPage = () => {
    return (
        <div className={styles["todo-display"]}>
            <div className={styles["tasks-button-panel"]}>
                <button className={styles["add-task-btn"]}>Add task</button>
            </div>
            <div className={styles["tasks-container"]}>
                <div className={styles["todo-card"]}>
                    <div className={styles["card-task"]}>
                        <div className={styles["card-task-container"]}>
                            <input type="checkbox" className={styles["todo-checkbox"]} />
                            <div>
                                Task:
                                <h3></h3>
                            </div>
                        </div>
                    </div>
                    <div className={styles["todo-card-details"]}>
                        <div className={styles["right-part"]}>
                            <div className={styles["card-deadline"]}>
                                <strong>Deadline</strong>
                                1233213123
                            </div>
                            <div className={styles["todo-delete-btn"]}>Delete</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
