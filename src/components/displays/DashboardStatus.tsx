import { User } from "../../userData";
import { ProjectModel } from "../ProjectsPage/ProjectPageModels";
import { TaskModel } from "../TodosPage/TaskModel";
import styles from "./DashboardStatus.module.css";

export const DashboardStatus = ({
    todoList,
    projectList,
}: {
    todoList: TaskModel[];
    projectList: ProjectModel[];
}) => {
    function getProjectConclusionRate() {
        let projectLen = projectList.length
        if (!projectLen) return 0;

        let total = 0;
        projectList.forEach((project: ProjectModel) => {
            if (project && project.projectStatus === "Finished") {
                total++;
            }
        });

        return ((total / projectLen) * 100).toFixed(1);
    }
    function getProjectTasksAverage(){
        let projectLen = projectList.length
        if(!projectLen) return 0

        let total = 0
        projectList.forEach(({projectTasks}: ProjectModel) => {
            total += projectTasks.length
        })

        return (total / projectLen).toFixed(1)
    }

    function getTodoConclusionRate() {
        let todoLen = todoList.length
        if (!todoLen) return 0;

        let total = 0;
        todoList.forEach((task: TaskModel) => {
            if (task.taskConcluded) {
                total++;
            }
        });

        return ((total / todoLen) * 100).toFixed(1);
    }
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
                        <span>{projectList.length}</span>
                    </div>
                    <div>
                        Projects conclusion rate:
                        <span>{getProjectConclusionRate()}%</span>
                    </div>
                    <div>
                        Average project tasks:
                        <span>{getProjectTasksAverage()}</span>
                    </div>
                </div>

                <div className={styles["status-type"]}>
                    <strong>To-dos</strong>
                    <div>
                        To-dos created:
                        <span>{todoList.length}</span>
                    </div>
                    <div>
                        To-dos conclusion rate:
                        <span>{getTodoConclusionRate()}%</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
