import { useState } from "react";
import { AppAddButton } from "../../components/Buttons/AppAddButton";
import { TaskCreatorModal } from "./TaskCreatorModal";
import { TodoCard } from "./TodoCard";
import styles from "./TodosPage.module.css";

export const TodosPage = ({
    toggleTaskCreator,
    isTaskCreatorActive
}: {
    toggleTaskCreator: Function;
    isTaskCreatorActive: boolean
}) => {
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
                {/* task.map(task => {
                    return TodoCard
                }) */}
            </div>
        </div>
    );
};
