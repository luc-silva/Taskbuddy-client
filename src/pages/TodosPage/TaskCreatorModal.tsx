import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { AppButtonPanel } from "../../components/Buttons/AppButtonPanel";
import { AppCloseButton } from "../../components/Buttons/AppCloseButton";
import styles from "./TaskCreatorModal.module.css";
import { TaskModel } from "./TaskModel";

export const TaskCreatorModal = ({
    user,
    modifyUser,
    toggleModal,
    isActive,
}: {
    user: any;
    modifyUser: Function;
    toggleModal: Function;
    isActive: boolean;
}) => {
    let [taskTitle, setTaskTitle] = useState("");
    let [taskDeadline, setTaskDeadline] = useState("2023-02-09");

    function handleTaskCreator() {
        if(taskTitle){
            modifyUser({
                ...user,
                todoList: [
                    ...user.todoList,
                    createTask()
                ],
            });
        }
        toggleModal(!isActive)
        
    }
    function createTask(){
        return {
            taskTitle,
            taskDeadline: new Date(taskDeadline),
            taskConcluded: false,
        }
    }

    if (!isActive) {
        return null;
    } else {
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
                    <AppCloseButton
                        toggleModal={toggleModal}
                        isActive={isActive}
                    />

                    <div className={styles["input-container"]}>
                        <div className={styles["input-div"]}>
                            Task
                            <input
                                type="text"
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
                            <select>
                                <option>Low Priority</option>
                                <option>Medium Priority</option>
                                <option>High Priority</option>
                                <option>Urgent</option>
                                <option>You should do it NOW!</option>
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
    }
};
