import { ChangeEvent, useState } from "react";
import { ProjectCreatorTaskCard } from "./ProjectCreatorTaskCard";
import styles from "./ProjectCreatorTasks.module.css";
import { ProjectTaskModel } from "./ProjectPageModels";

export const ProjectCreatorTasks = ({
    isToastActive,
    toggleToast,
    projectTasks,
    setProjectTasks,
}: {
    isToastActive: boolean;
    toggleToast: Function;
    projectTasks: ProjectTaskModel[];
    setProjectTasks: Function;
}) => {
    let [taskTitle, setTaskTitle] = useState("");
    let [taskPriority, setTaskPriority] = useState("Low");

    function handleTaskInclusion() {
        if (taskTitle) {
            setProjectTasks([...projectTasks, createNewProjectTask()]);
        } else {
            !isToastActive && toggleToast(!isToastActive);
        }
    }

    function createNewProjectTask(): ProjectTaskModel {
        return {
            taskTitle: taskTitle,
            taskPriority: taskPriority,
        };
    }

    function removeProjectTask(taskIndex: number) {
        setProjectTasks(
            projectTasks.filter((task, index) => {
                if (index !== taskIndex) {
                    return task;
                }
            })
        );
    }

    return (
        <div className={styles["project-creator-tasks"]}>
            <h3>Add Tasks</h3>
            <div className={styles["creator-task-input"]}>
                <div>
                    <input
                        type="text"
                        placeholder="Task title"
                        value={taskTitle}
                        onChange={(event: ChangeEvent<HTMLInputElement>) => {
                            setTaskTitle(event.target.value);
                        }}
                    />
                    <button
                        className={styles["add-task-btn"]}
                        onClick={() => {
                            handleTaskInclusion();
                        }}
                    >
                        Add
                    </button>
                </div>
                <select onChange={(event: ChangeEvent<HTMLSelectElement>) => {
                    setTaskPriority(event.target.value)
                }}>
                    <option value="Low">Low Priority</option>
                    <option value="Medium">Medium Priority</option>
                    <option value="High">High Priority</option>
                </select>
            </div>
            <div className={styles["creator-tasks-preview"]}>
                {projectTasks.map(
                    (
                        { taskTitle, taskPriority }: ProjectTaskModel,
                        index: number
                    ) => {
                        return (
                            <ProjectCreatorTaskCard
                                removeProjectTask={removeProjectTask}
                                taskTitle={taskTitle}
                                taskPriority={taskPriority}
                                key={index}
                                index={index}
                            />
                        );
                    }
                )}
            </div>
        </div>
    );
};
