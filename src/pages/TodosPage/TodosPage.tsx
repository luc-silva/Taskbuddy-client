import { useState } from "react";
import { AppAddButton } from "../../components/Buttons/AppAddButton";
import { TaskCreatorModal } from "./TaskCreatorModal";
import { TodoCard } from "./TodoCard";
import styles from "./TodosPage.module.css";

export const TodosPage = ({
    toggleTaskCreator,
    isTaskCreatorActive,
}: {
    toggleTaskCreator: Function;
    isTaskCreatorActive: boolean;
}) => {
    interface Task {
        taskConcluded: boolean;
        taskTitle: string;
        taskDeadline: Date;
    }

    let tasks: Task[] = [
        {
            taskConcluded: false,
            taskTitle: "No idea for now",
            taskDeadline: new Date(),
        },
        {
            taskConcluded: true,
            taskTitle: "No idea, ok?",
            taskDeadline: new Date(),
        },
        {
            taskConcluded: true,
            taskTitle: "Ye, indeed",
            taskDeadline: new Date(),
        },
        {
            taskConcluded: false,
            taskTitle: "Bruh idk",
            taskDeadline: new Date(),
        },
    ];
    return (
        <div className={styles["todos-page"]}>
            <div className={styles["tasks-button-panel"]}>
                <AppAddButton
                    text="Add Task"
                    toggleModal={toggleTaskCreator}
                    isModalActive={isTaskCreatorActive}
                />
            </div>
            <div className={styles["tasks-container"]}>
                {tasks.map(
                    (
                        { taskConcluded, taskTitle, taskDeadline }: Task,
                        index: number
                    ) => (
                        <TodoCard
                            taskConcluded={taskConcluded}
                            taskTitle={taskTitle}
                            taskDeadline={taskDeadline}
                            key={index}
                        />
                    )
                )}
            </div>
        </div>
    );
};
