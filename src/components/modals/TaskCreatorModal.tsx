import TodoService from "../../services/TodoService";

import { ChangeEvent, useState } from "react";
import { DateInput, SelectInput, TextInput } from "inputify/dist";
import { selectOptions, todoInitialValues } from "../../constants/initial-values";
import styles from "./TaskCreatorModal.module.css";


export const TaskCreatorModal = ({
    isToastActive,
    toggleToast,
    toggleModal,
    isActive,
}: {
    isToastActive: boolean;
    toggleToast: Function;
    toggleModal: Function;
    isActive: boolean;
}) => {
    let [taskForm, setTaskForm] = useState(todoInitialValues);

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        let target = event.target;
        setTaskForm({ ...taskForm, [target.name]: target.value });
    }

    function handleSubmit(event:SubmitEvent) {
        TodoService.create(1, taskForm)
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

                <div className={styles["input-container"]}>
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
                            stateValue={""}
                            options={selectOptions}
                        />
                    </div>
                </div>

            </div>
        </div>
    );
};
