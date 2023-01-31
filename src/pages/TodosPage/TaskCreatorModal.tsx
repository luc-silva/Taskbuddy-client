import { ChangeEvent, FormEvent, useState } from "react";
import { AppButtonPanel } from "../../components/Buttons/AppButtonPanel";
import { AppCloseButton } from "../../components/Buttons/AppCloseButton";
import styles from "./TaskCreatorModal.module.css";

export const TaskCreatorModal = ({
    toggleModal,
    isActive,
}: {
    toggleModal: Function;
    isActive: boolean;
}) => {
    let [taskTitle, setTaskTitle] = useState("");
    let [test, setTest] = useState("");
    let [deadline, setDeadline] = useState("");
    let [priority, setPriority] = useState("");

    let [tasks, setTasks] = useState([]);

    function titleInputHandle(event: ChangeEvent<HTMLInputElement>) {
        setTest(event.target.value);
    }
    function deadlineInputHandle(event: ChangeEvent<HTMLInputElement>) {
        setDeadline(event.target.value);
    }
    function prioritySelectHandle(event: ChangeEvent<HTMLSelectElement>) {
        setPriority(event.target.value);
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
                                value={test}
                                onChange={(event) => {
                                    titleInputHandle(event);
                                }}
                            />
                        </div>
                        <div className={styles["input-div"]}>
                            Deadline
                            <input
                                type="date"
                                value={deadline}
                                onChange={(event) => {
                                    deadlineInputHandle(event);
                                }}
                            />
                        </div>
                        <div className={styles["input-div"]}>
                            Priority
                            <select
                                onChange={(event) => {
                                    prioritySelectHandle(event);
                                }}
                            >
                                <option>Low Priority</option>
                                <option>Medium Priority</option>
                                <option>High Priority</option>
                                <option>Urgent</option>
                                <option>You should do it NOW!</option>
                            </select>
                        </div>
                    </div>

                    <AppButtonPanel
                        toggleModal={toggleModal}
                        isActive={isActive}
                    />
                </div>
            </div>
        );
    }
};
