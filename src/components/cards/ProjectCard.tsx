import { useEffect } from "react";

import { format } from "date-fns";
import { Trash } from "phosphor-react";

import { ProjectTask } from "./ProjectTask";
import { ProjectModel, ProjectTaskModel } from "./ProjectPageModels";
import { User } from "../../userData";

import styles from "./ProjectCard.module.css";

interface ProjectCardModel extends ProjectModel {
    modifyUser: Function;
    user: User;
    projectIndex: number;
}

export const ProjectCard = ({
    user,
    projectTitle,
    projectDeadline,
    projectStatus,
    projectDescription,
    projectTasks,
    modifyUser,
    projectIndex,
}: ProjectCardModel) => {
    useEffect(() => {
        if (getCompletedTasksTotal() === projectTasks.length) {
            modifyUser({ ...user, projectList: setProjectStatus("Finished") });
        } else {
            modifyUser({
                ...user,
                projectList: setProjectStatus("Unfinished"),
            });
        }
    }, [projectTasks]);

    function setProjectStatus(status: string) {
        return user.projectList.map((project: ProjectModel, index: number) => {
            if (projectIndex === index)
                return { ...project, projectStatus: status };
            return project;
        });
    }

    function getCompletedTasksTotal() {
        return projectTasks.filter((task: ProjectTaskModel, index: number) => {
            if (task.taskCompleted) return task;
        }).length;
    }
    function handleDeleteBtn() {
        modifyUser({
            ...user,
            projectList: user.projectList.filter(removeProject),
        });
    }
    function removeProject(project: ProjectModel, index: number) {
        if (projectIndex !== index) return project;
    }
    return (
        <div className={styles["project-card"]}>
            <div>
                <div className={styles["card-title"]}>{projectTitle}</div>
                <div className={styles["card-maininfo"]}>
                    <span className={styles["maininfo-counter"]}>
                        Tasks completed
                        <strong>
                            {getCompletedTasksTotal()}/{projectTasks.length}
                        </strong>
                    </span>
                    <span className={styles["maininfo-extra"]}>
                        <span>
                            Deadline:
                            <strong>
                                {format(projectDeadline, "MM/dd/yyyy")}
                            </strong>
                        </span>
                        <span>
                            Status:
                            <strong>{projectStatus}</strong>
                        </span>
                        <Trash
                            size={30}
                            color="red"
                            weight="regular"
                            onClick={() => {
                                handleDeleteBtn();
                            }}
                        />
                    </span>
                </div>
            </div>
            <div className={styles["card-description"]}>
                <strong>Description:</strong>
                {projectDescription}
            </div>

            <div className={styles["card-tasks"]}>
                <strong>Tasks:</strong>
                <div className={styles["tasks-container"]}>
                    {projectTasks.map(
                        ({ taskCompleted, taskPriority, taskTitle }, index) => {
                            return (
                                <ProjectTask
                                    user={user}
                                    modifyUser={modifyUser}
                                    taskCompleted={taskCompleted}
                                    taskPriority={taskPriority}
                                    taskTitle={taskTitle}
                                    projectIndex={projectIndex}
                                    index={index}
                                    key={index}
                                />
                            );
                        }
                    )}
                </div>
            </div>
        </div>
    );
};
