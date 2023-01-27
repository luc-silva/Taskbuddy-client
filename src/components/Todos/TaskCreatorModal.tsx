import styles from "./TaskCreatorModal.module.css"

export const TaskCreatorModal = () => {
    return (
    <div className={styles["task-creator-screen"]}>
            <div className={styles["task-creator-info"]}>
                <div className={styles["task-title-input-div"]}>
                    Task
                    <input type="text" className={styles["task-title-input"]}/>
                </div>
                <div className={styles["task-deadline-input-div"]}>
                    Deadline 
                    <input type="text" className={styles["task-deadline-input"]}/>
                </div>
            </div>
            <div className={styles["task-creator-description"]}>
                Description 
                <textarea name="" className={styles["task-description-textarea"]}></textarea>
            </div>
            <div className={styles["task-creator-footer"]}>
                <div>
                    Priority 
                    <select name="" id="">
                        <option className={styles["priority-input"]}></option>
                    </select>
                </div>
                <div className={styles["task-creator-btn-display"]}>
                    <button className={styles["add-btn"]} >Add</button>
                    <button className={styles["close-btn"]}>Close</button>
                </div>
            </div>
        </div>
    );
};
