import { ProjectCreatorTaskCard } from "../cards/ProjectCreatorTaskCard";
import { TasksCreatorForm } from "../forms/TasksCreatorForm";

import styles from "./AddTaskDisplay.module.css";

export const AddTaskDisplay = ({
    toggleToast,
    projectTasks,
    setProjectTasks,
}: {
    toggleToast: Function;
    projectTasks: IProjectTask[];
    setProjectTasks: React.Dispatch<React.SetStateAction<IProjectTask[]>>;
}) => {
    return (
        <section className={styles["tasks-creator"]}>
            <div className={styles["tasks-creator__title"]}>
                <h3>Add Tasks</h3>
            </div>
            <div className={styles["tasks-creator__form-container"]}>
                <TasksCreatorForm
                    setTasks={setProjectTasks}
                    tasks={projectTasks}
                />
            </div>
            <div className={styles["tasks-preview"]}>
                {projectTasks.map((item, index) => {
                    return (
                        <ProjectCreatorTaskCard
                            index={index}
                            task={item}
                            tasks={projectTasks}
                            setProjectTasks={setProjectTasks}
                            key={index}
                        />
                    );
                })}
            </div>
        </section>
    );
};
