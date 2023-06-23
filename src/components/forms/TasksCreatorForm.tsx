import {  useState } from "react";

import {
    projectTaskInitialValues,
    selectOptions,
} from "../../constants/initial-values";

import styles from "./TasksCreatorForm.module.css";
import { SelectInput, TextInput } from "inputify/dist";

export const TasksCreatorForm = ({
    setTasks,
    tasks
}: {
    setTasks: React.Dispatch<React.SetStateAction<IProjectTask[]>>;
    tasks: readonly IProjectTask[];
}) => {
    let [task, setTask] = useState(projectTaskInitialValues);

    function handleChange(event: React.ChangeEvent<HTMLElement>) {
        let target = event.target;
        if (
            target instanceof HTMLSelectElement ||
            target instanceof HTMLInputElement
        ) {
            setTask({ ...task, [target.name]: target.value });
        }
    }

    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();
        setTasks([...tasks, task]);
    }
    return (
        <form action="POST" className={styles["tasks-creator__form"]} onSubmit={handleSubmit}>
            <div className={styles["form-container"]}>
                <div className={styles["input-container"]}>
                    <TextInput
                        inputName="title"
                        onChange={handleChange}
                        stateValue={task.title}
                        maxLength={50}
                        label
                        labelText="Title"
                        placeholder
                        placeholderText="Bake something tasty"
                        required
                    />
                </div>
                <div className={styles["input-container"]}>
                    <SelectInput
                        inputName="priority"
                        onChange={handleChange}
                        label
                        labelText="Priority"
                        options={selectOptions}
                        stateValue={task.priority}
                        required
                    />
                </div>
            </div>

            <div className={styles["submit-input-container"]}>
                <input type="submit" value="Create Task" />
            </div>
        </form>
    );
};
