import { User } from "../../userData";
import { ProjectModel, ProjectTaskModel } from "./ProjectPageModels";

import styles from "./ProjectTask.module.css";

interface ProjectCardTasks extends ProjectTaskModel {
    projectIndex: number;
    user: User;
    modifyUser: Function;
    index: number;
}

export const ProjectTask = ({
    user,
    modifyUser,
    taskCompleted,
    taskTitle,
    taskPriority,
    index,
    projectIndex,
}: ProjectCardTasks) => {
    function handleCheckbox() {
        modifyUser({
            ...user,
            projectList: user.projectList.map(
                (project: ProjectModel, id: number) => {
                    if (id === projectIndex) {
                        return {
                            ...project,
                            projectTasks:
                                project.projectTasks.map(changeTaskChecked),
                        };
                    } else {
                        return project;
                    }
                }
            ),
        });
    }

    function changeTaskChecked(
        task: ProjectTaskModel,
        taskIndex: number
    ): ProjectTaskModel {
        return index === taskIndex
            ? { ...task, taskCompleted: !taskCompleted }
            : task;
    }

    return (
        <div className={styles["task-card"]}>
            <span className={styles["task-card-main"]}>
                <span>
                    <strong>{index + 1}#</strong>
                    <input
                        type="checkbox"
                        checked={taskCompleted}
                        onChange={() => {
                            handleCheckbox();
                        }}
                    />
                </span>
                <strong>{taskTitle}</strong>
            </span>
            <span className={styles["task-card-priority"]}>
                Priority:
                <strong>{taskPriority}</strong>
            </span>
        </div>
    );
};
