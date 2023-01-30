import { TodoCard } from "./TodoCard";
import styles from "./TodosPage.module.css";

export const TodosPage = () => {
    return (
        <div className={styles["todos-page"]}>
            <div className={styles["tasks-button-panel"]}>
                <button className={styles["add-task-btn"]}>Add task</button>
            </div>
            <div className={styles["tasks-container"]}>
                <TodoCard />
                <TodoCard />
                <TodoCard />
                <TodoCard />
                <TodoCard />
                <TodoCard />
                <TodoCard />
                <TodoCard />
                <TodoCard />
                <TodoCard />
                <TodoCard />
                <TodoCard />
                <TodoCard />
                <TodoCard />
                <TodoCard />
                <TodoCard />
            </div>
        </div>
    );
};
