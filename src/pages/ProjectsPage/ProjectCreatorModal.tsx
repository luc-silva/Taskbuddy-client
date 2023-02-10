import { ChangeEvent, useState } from "react";
import { AppButtonPanel } from "../../components/Buttons/AppButtonPanel";
import { AppCloseButton } from "../../components/Buttons/AppCloseButton";
import { ProjectModel, ProjectTaskModel } from "./ProjectPageModels";
import { User } from "../../userData";

import styles from "./ProjectCreatorModal.module.css";
import { ProjectCreatorTasks } from "./ProjectCreatorTasks";

export const ProjectCreatorModal = ({
    isToastActive,
    toggleToast,
    user,
    modifyUser,
    isActive,
    toggleModal,
}: {
    isToastActive: boolean;
    toggleToast: Function;
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
        if (projectTitle && projectTasks.length > 0) {
            modifyUser({
                ...user,
                projectList: [...user.projectList, createNewProject()],
            });
            clearModal()
            toggleModal(!isActive);
        } else {
            !isToastActive && toggleToast(!isToastActive);
        }
    }
    function createNewProject(): ProjectModel {
        return {
            projectTitle,
            projectDeadline: new Date(projectDeadline),
            projectStatus: "Unfinished",
            projectDescription: projectDescription
                ? projectDescription
                : "None provided",
            projectTasks,
        };
    }
    function clearModal(){
        setProjectDeadline("2023-02-09")
        setProjectDescription("")
        setProjectTitle("")
        setProjectTasks([])
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
                    isToastActive={isToastActive}
                    toggleToast={toggleToast}
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
