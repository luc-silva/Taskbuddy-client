import { setPriority } from "os";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { AppButtonPanel } from "../../components/Buttons/AppButtonPanel";
import { AppCloseButton } from "../../components/Buttons/AppCloseButton";
import styles from "./TaskCreatorModal.module.css";
import { TaskModel } from "./TaskModel";

export const TaskCreatorModal = ({
    isToastActive,
    toggleToast,
    user,
    modifyUser,
    toggleModal,
    isActive,
}: {
    isToastActive: boolean;
    toggleToast: Function;
    user: any;
    modifyUser: Function;
    toggleModal: Function;
    isActive: boolean;
}) => {
    let [taskTitle, setTaskTitle] = useState("");
    let [taskDeadline, setTaskDeadline] = useState("2023-02-09");
    let [taskPriority, setTaskPriority] = useState("Low Priority");

    function handleTaskCreator() {
        if (taskTitle) {
            modifyUser({
                ...user,
                todoList: [...user.todoList, createTask()],
            });
            clearModal();
            toggleModal(!isActive);
        } else {
            !isToastActive && toggleToast(!isToastActive);
        }
    }
    function createTask() {
        return {
            taskTitle,
            taskDeadline: new Date(taskDeadline),
            taskConcluded: false,
            taskPriority: taskPriority,
        };
    }
    function clearModal() {
        setTaskDeadline("2023-02-09");
        setTaskPriority("Low Priority");
        setTaskTitle("");
    }
    if (!isActive) return null;
    return (
        <div
            className={styles["task-creator-background"]}
            onClick={() => {
                toggleModal(!isActive);
            }}
        >
            <div
                className={styles["task-creator"]}
                onClick={(event) => {
                    event.stopPropagation();
                }}
            >
                <AppCloseButton toggleModal={toggleModal} isActive={isActive} />

                <div className={styles["input-container"]}>
                    <div className={styles["input-div"]}>
                        Task
                        <input
                            type="text"
                            maxLength={20}
                            value={taskTitle}
                            onChange={(event) => {
                                setTaskTitle(event.target.value);
                            }}
                        />
                    </div>

                    <div className={styles["input-div"]}>
                        Deadline
                        <input
                            type="date"
                            value={taskDeadline}
                            onChange={(event) => {
                                setTaskDeadline(event.target.value);
                            }}
                        />
                    </div>

                    <div className={styles["input-div"]}>
                        Priority
                        <select
                            value={taskPriority}
                            onChange={(
                                event: ChangeEvent<HTMLSelectElement>
                            ) => {
                                setTaskPriority(event.target.value);
                            }}
                        >
                            <option value="Low Priority">Low Priority</option>
                            <option value="Medium Priority">
                                Medium Priority
                            </option>
                            <option value="High Priority">High Priority</option>
                            <option value="Urgent">Urgent</option>
                            <option value="You should do it NOW!">
                                You should do it NOW!
                            </option>
                        </select>
                    </div>
                </div>

                <AppButtonPanel
                    handleFunc={handleTaskCreator}
                    toggleModal={toggleModal}
                    isActive={isActive}
                />
            </div>
        </div>
    );
};
