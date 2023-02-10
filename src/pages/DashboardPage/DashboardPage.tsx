import { ArrowSquareOut } from "phosphor-react";
import { User } from "../../userData";
import { TaskModel } from "../TodosPage/TaskModel";
import { compareAsc, compareDesc, format } from "date-fns";
import styles from "./DashboardPage.module.css";
import { DashboardStatus } from "./DashboardStatus";
import { DashboardImportantTask } from "./DashboardImportantTask";

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
            if (item && item.projectStatus === "Finished") {
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
                    <div className={styles["counter-display"]}>
                        <div>
                            <strong>{getConcludedTasks()}</strong>
                            of {user.todoList.length} tasks done!
                        </div>
                    </div>
                    <div className={styles["counter-display"]}>
                        <div>
                            <strong>{getConcludedProjects()}</strong>
                            of {user.projectList.length} projects done!
                        </div>
                    </div>
                </div>

                <div className={styles["expiring-tasks"]}>
                    <div className={styles["expiring-tasks-title"]}>
                        <h2>Important tasks to completed</h2>
                        <p>Track what you have to do</p>
                    </div>
                    <div className={styles["important-tasks-container"]}>
                        {user.todoList
                            .filter((task) => {
                                if (
                                    task.taskPriority !== "Low Priority" &&
                                    task.taskPriority !== "Medium Priority"
                                ) {
                                    return task
                                }
                            })
                            .map(
                                (
                                    {
                                        taskTitle,
                                        taskDeadline,
                                        taskConcluded,
                                        taskPriority,
                                    }: TaskModel,
                                    index: number
                                ) => {
                                    return (
                                        <DashboardImportantTask
                                            taskTitle={taskTitle}
                                            taskDeadline={taskDeadline}
                                            taskConcluded={taskConcluded}
                                            taskPriority={taskPriority}
                                            key={index}
                                        />
                                    );
                                }
                            )}
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

                <DashboardStatus
                    todoList={user.todoList}
                    projectList={user.projectList}
                />
            </aside>
        </div>
    );
};
