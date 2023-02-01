import { useState } from "react";
import { AppAddButton } from "../../components/Buttons/AppAddButton";
import { ProjectCard } from "./ProjectCard";
import { ProjectModel } from "./ProjectPageModels";

import styles from "./ProjectsPage.module.css";

export const ProjectPage = ({
    isActive,
    toggleProjectCreator,
}: {
    isActive: boolean;
    toggleProjectCreator: Function;
}) => {
    let projects: ProjectModel[] = [
        {
            projectTitle: "Trip to london",
            projectDeadline: "31312",
            projectDescription:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat voluptatum labore, temporibus eius quia rem odio voluptatem mollitia corporis eaque esse ratione delectus repellendus atque cum odit impedit tenetur inventore!",
            projectStatus: "Unfinished",
            projectTasks: [{ taskPriority: "urgent", taskTitle: "sleep" }],
        },
    ];

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
                        },
                        index
                    ) => {
                        return (
                            <ProjectCard
                                projectTitle={projectTitle}
                                projectDeadline={projectDeadline}
                                projectStatus={projectStatus}
                                projectDescription={projectDescription}
                                projectTasks={projectTasks}
                            />
                        );
                    }
                )}
            </div>
        </div>
    );
};
