import { useState } from "react";
import { AppAddButton } from "../../components/Buttons/AppAddButton";
import { User } from "../../userData";
import { ProjectCard } from "./ProjectCard";
import { ProjectModel } from "./ProjectPageModels";

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
                                projectTitle={projectTitle}
                                projectDeadline={projectDeadline}
                                projectStatus={projectStatus}
                                projectDescription={projectDescription}
                                projectTasks={projectTasks}
                                key={index}
                            />
                        );
                    }
                )}
            </div>
        </div>
    );
};
