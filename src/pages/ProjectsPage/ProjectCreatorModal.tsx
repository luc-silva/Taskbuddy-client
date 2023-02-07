import { ChangeEvent, useState } from "react";
import { AppButtonPanel } from "../../components/Buttons/AppButtonPanel";
import { AppCloseButton } from "../../components/Buttons/AppCloseButton";
import { ProjectModel, ProjectTaskModel } from "./ProjectPageModels";
import { User } from "../../userData";

import styles from "./ProjectCreatorModal.module.css";
import { ProjectCreatorTasks } from "./ProjectCreatorTasks";

export const ProjectCreatorModal = ({
    user,
    modifyUser,
    isActive,
    toggleModal,
}: {
    user: User;
    modifyUser: Function;
    isActive: boolean;
    toggleModal: Function;
}) => {
    let [projectTitle, setProjectTitle] = useState("");
    let [projectDescription, setProjectDescription] = useState("");
    let [projectDeadline, setProjectDeadline] = useState("2023-02-09");
    let [projectTasks, setProjectTasks] = useState<Array<ProjectTaskModel>>([]);

    function handleProjectInclusion() {
        modifyUser({
            ...user,
            projectList: [...user.projectList, createNewProject()],
        });
    }
    function createNewProject(): ProjectModel {
        return {
            projectTitle,
            projectDeadline: new Date(projectDeadline),
            projectStatus: "Unfinished",
            projectDescription,
            projectTasks,
        };
    }
    if (!isActive) return null;
    return (
        <div
            className={styles["project-creator-background"]}
            onClick={() => {
                toggleModal(!isActive);
            }}
        >
            <div
                className={styles["project-creator"]}
                onClick={(e) => {
                    e.stopPropagation();
                }}
            >
                <AppCloseButton isActive={isActive} toggleModal={toggleModal} />
                <h3>Create a new project</h3>
                <div className={styles["project-creator-main"]}>
                    <div>
                        Project Title
                        <input
                            type="text"
                            value={projectTitle}
                            onChange={(
                                event: ChangeEvent<HTMLInputElement>
                            ) => {
                                setProjectTitle(event.target.value);
                            }}
                        />
                    </div>
                    <div>
                        Deadline
                        <input
                            type="date"
                            value={projectDeadline}
                            onChange={(event: ChangeEvent<HTMLDataElement>) => {
                                setProjectDeadline(event.target.value);
                            }}
                        />
                    </div>
                    <div>
                        Description
                        <textarea
                            value={projectDescription}
                            onChange={(
                                event: ChangeEvent<HTMLTextAreaElement>
                            ) => {
                                setProjectDescription(event.target.value);
                            }}
                        />
                    </div>
                </div>
                <ProjectCreatorTasks
                    projectTasks={projectTasks}
                    setProjectTasks={setProjectTasks}
                />
                <AppButtonPanel
                    handleFunc={handleProjectInclusion}
                    isActive={isActive}
                    toggleModal={toggleModal}
                />
            </div>
        </div>
    );
};
