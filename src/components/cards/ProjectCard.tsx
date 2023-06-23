import ProjectService from "../../services/ProjectService";
import { projectInitialValues } from "../../constants/initial-values";
import { useEffect, useState } from "react";

import { ProjectTasksDisplay } from "../displays/ProjectTasksDisplay";
import { ProjectAboutDisplay } from "../displays/ProjectAboutDisplay";

import styles from "./ProjectCard.module.css";

export const ProjectCard = ({ id, handleDelete }: { id: number, handleDelete:Function }) => {
    let [project, setProject] = useState(projectInitialValues);

    function getCompletedTasksTotal() {
        let tasks = [...project.projectTasks];
        return tasks.filter((task: IProjectTask, index: number) => {
            if (task.completed) return task;
        }).length;
    }
    

    useEffect(() => {
        ProjectService.get(id).then((data) => {
            setProject(data);
        });
    }, [id]);
    return (
        <div className={styles["project"]}>
            <div className={styles["project__main"]}>
                <div className={styles["project__title"]}>
                    <h2>{project.title}</h2>
                </div>
                <div className={styles["project__about"]}>
                    <div className={styles["about__counter"]}>
                        Tasks completed
                        <strong>
                            {getCompletedTasksTotal()}/
                            {project.projectTasks.length}
                        </strong>
                    </div>
                    <div className={styles["about__extra"]}>
                        <ProjectAboutDisplay
                            data={project}
                            handleDelete={() => {
                                handleDelete(project.id)
                            }}
                        />
                    </div>
                </div>
            </div>
            <div className={styles["project__description"]}>
                <strong>Description:</strong>
                {project.description}
            </div>
            <div className={styles["project__tasks"]}>
                <ProjectTasksDisplay tasks={project.projectTasks} />
            </div>
        </div>
    );
};
