import TodoService from "../../services/TodoService";

import { ChangeEvent, FormEvent, useState } from "react";
import { DateInput, SelectInput, TextInput } from "inputify/dist";
import {
    selectOptions,
    todoInitialValues,
} from "../../constants/initial-values";
import styles from "./TaskCreatorModal.module.css";

export const TaskCreatorModal = ({
    user,
    isToastActive,
    toggleToast,
    toggleModal,
    isActive,
}: {
    user: IUserSession;
    isToastActive: boolean;
    toggleToast: Function;
    toggleModal: Function;
    isActive: boolean;
}) => {
    let [taskForm, setTaskForm] = useState(todoInitialValues);

    function closeModal() {
        toggleModal(!isActive);
    }

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        let target = event.target;
        setTaskForm({ ...taskForm, [target.name]: target.value });
    }

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();
        await TodoService.create(user.id, taskForm).then(closeModal);
    }

    if (!isActive) return null;
    return (
        <div className={styles["task-creator-background"]} onClick={closeModal}>
            <div
                className={styles["task-creator"]}
                onClick={(event) => {
                    event.stopPropagation();
                }}
            >
                <div className={styles["input-container"]}>
                    <form action="POST" onSubmit={handleSubmit}>
                        <div className={styles["input-div"]}>
                            <TextInput
                                inputName="text"
                                stateValue={taskForm.text}
                                label
                                labelText="Title"
                                placeholder
                                placeholderText="Do something..."
                                maxLength={50}
                                required
                                onChange={handleChange}
                            />
                        </div>

                        <div className={styles["input-div"]}>
                            <DateInput
                                inputName="deadline"
                                onChange={handleChange}
                                stateValue={taskForm.deadline}
                                label
                                labelText="Deadline"
                                required
                            />
                        </div>

                        <div className={styles["input-div"]}>
                            <SelectInput
                                inputName="priority"
                                onChange={handleChange}
                                label
                                labelText="Priority"
                                required
                                stateValue={taskForm.priority}
                                options={selectOptions}
                            />
                        </div>
                        <div className={styles["submit-input-div"]}>
                            <input type="submit" value="Create Todo" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
