import { ArrowSquareOut } from "phosphor-react";
import { User } from "../../userData";
import { TaskModel } from "../TodosPage/TaskModel";
import { format } from "date-fns";
import styles from "./DashboardPage.module.css";

export const DashboardPage = ({ user }: { user: User }) => {
    function getConcludedTasks() {
        let total = 0;
        for (let item of user.todoList) {
            if (item && item.taskConcluded) {
                total++;
            }
        }
        return total;
    }
    function getConcludedProjects() {
        let total = 0;
        for (let item of user.projectList) {
            if (item && item.projectStatus) {
                total++;
            }
        }
        return total;
    }

    return (
        <div className={styles["dashboard-page"]}>
            <main className={styles["info-container"]}>
                <div className={styles["container-greetings"]}>
                    <h2>Hi {user.firstName}, how are you doing?</h2>
                    <p>You currently have:</p>
                </div>
                <div className={styles["container-counter"]}>
                    <span>
                        {getConcludedTasks()} of {user.todoList.length}
                        tasks done!
                    </span>
                    <span>
                        {getConcludedProjects()} of {user.projectList.length}
                        projects done!
                    </span>
                </div>

                <div className={styles["expiring-tasks"]}>
                    <div className={styles["expiring-tasks-title"]}>
                        <h3>Close to expire tasks</h3>
                        <p>Track what you have to do</p>
                    </div>
                    <div className={styles["expiring-tasks-container"]}>
                        {user.todoList.map((task: TaskModel, index: number) => {
                            if (index > 4) return null;
                            return (
                                <div className={styles["expiring-task"]}>
                                    <strong>{task.taskTitle}</strong>
                                    <p>
                                        {format(
                                            task.taskDeadline,
                                            "MM/dd/yyyy"
                                        )}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </main>

            <aside className={styles["extras-container"]}>
                <div className={styles["links-container"]}>
                    <div className={styles["links-container-title"]}>
                        <h3>Links</h3>
                        <p>Looking for more?</p>
                    </div>
                    <ul>
                        <li>
                            <a href="https://github.com/luc-silva">
                                Github
                                <ArrowSquareOut
                                    size={18}
                                    color="var(--main-color)"
                                />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/silva-luc/">
                                LinkedIn
                                <ArrowSquareOut
                                    size={18}
                                    color="var(--main-color)"
                                />
                            </a>
                        </li>
                    </ul>
                </div>

                <div className={styles["status-container"]}>
                    <div className={styles["status-container-title"]}>
                        <h3>Status</h3>
                        <p>All your history in this app!</p>
                    </div>
                    <div>
                        <div>
                            Projects planned:
                            {user.projectList.length}
                        </div>
                        <div>
                            To-dos created:
                            {user.todoList.length}
                        </div>
                    </div>
                </div>
            </aside>
        </div>
    );
};
