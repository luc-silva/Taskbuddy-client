import { useState } from "react";
import { AppAddButton } from "../components/buttons/AppAddButton";
import { User } from "../userData";
import { ProjectCard } from "../components/ProjectsPage/ProjectCard";
import { ProjectModel } from "../components/ProjectsPage/ProjectPageModels";

import styles from "./ProjectsPage.module.css";

export const ProjectPage = ({
    user,
    modifyUser,
    isActive,
    toggleProjectCreator,
    projects,
}: {
    user: User;
    modifyUser: Function;
    isActive: boolean;
    toggleProjectCreator: Function;
    projects: ProjectModel[];
}) => {
    return (
        <div className={styles["project-page"]}>
            <AppAddButton
                text="Add Project"
                isModalActive={isActive}
                toggleModal={toggleProjectCreator}
            />
            <div className={styles["projects-container"]}>
                {projects.map(
                    (
                        {
                            projectTitle,
                            projectDeadline,
                            projectStatus,
                            projectDescription,
                            projectTasks,
                        }: ProjectModel,
                        index: number
                    ) => {
                        return (
                            <ProjectCard
                                user={user}
                                projectTitle={projectTitle}
                                projectDeadline={projectDeadline}
                                projectStatus={projectStatus}
                                projectDescription={projectDescription}
                                projectTasks={projectTasks}
                                modifyUser={modifyUser}
                                key={index}
                                projectIndex={index}
                            />
                        );
                    }
                )}
            </div>
        </div>
    );
};
