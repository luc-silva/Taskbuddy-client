import ProjectService from "../../services/ProjectService";
import { AxiosError } from "axios";
import { useOutletContext } from "react-router-dom";
import { extractErrorMessage } from "../../utils/tools";
import {  useState } from "react";

import { projectInitialValues } from "../../constants/initial-values";
import { ProjectCreatorForm } from "../forms/ProjectCreatorForm";
import { AddTaskDisplay } from "../displays/AddTaskDisplay";

import styles from "./ProjectCreatorModal.module.css";

export const ProjectCreatorModal = ({
    toggleToast,
    user,
    isActive,
    toggleModal,
}: {
    toggleToast: Function;
    user: IUserSession;
    isActive: boolean;
    toggleModal: Function;
}) => {
    let [project, setProject] = useState(projectInitialValues);
    let [tasks, setTasks] = useState([] as IProjectTask[]);
    let update:Function = useOutletContext()

    function closeModal() {
        toggleModal(!isActive);
    }

    async function handleSubmit() {
        let projectData = {
            ...project,
            user: { id: user.id },
            concluded:false,
            projectTasks: tasks,
        };

        await ProjectService.create(projectData).then((data) => {
            toggleToast(data.message)
            setProject(projectInitialValues)
            setTasks([])
            closeModal()
            update()
        })
        .catch((response: AxiosError<IErrorMessageResponse>) => {
            toggleToast(extractErrorMessage(response), 400)
        });
    }

    if (!isActive) return null;
    return (
        <div
            className={styles["project-creator-background"]}
            onClick={closeModal}
        >
            <div
                className={styles["project-creator"]}
                onClick={(e) => {
                    e.stopPropagation();
                }}
            >
                <div className={styles["project-creator__title"]}>
                    <h3>Create a new project</h3>
                </div>
                <section className={styles["project-creator-main"]}>
                    <ProjectCreatorForm form={project} setForm={setProject} />
                </section>
                <section className={styles["project-creator__task-display"]}>
                    <AddTaskDisplay
                        setProjectTasks={setTasks}
                        projectTasks={tasks}
                        toggleToast={toggleToast}
                    />
                </section>
                <div className={styles["project-creator__footer"]}>
                    <button onClick={handleSubmit}> Create Project</button>
                </div>
            </div>
        </div>
    );
};
