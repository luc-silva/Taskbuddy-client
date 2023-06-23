import { DateInput, TextInput, TextareaInput } from "inputify/dist";
import styles from "./Form.module.css";

export const ProjectCreatorForm = ({
    form,
    setForm,
}: {
    form: IProject;
    setForm: React.Dispatch<React.SetStateAction<IProject>>;
}) => {
    function handleChange(event: React.ChangeEvent<HTMLElement>) {
        let target = event.target;
        if (
            target instanceof HTMLInputElement ||
            target instanceof HTMLTextAreaElement
        ) {
            setForm({ ...form, [target.name]: target.value });
        }
    }

    return (
        <form action="POST" className={styles["project-creator-main"]}>
            <div className={styles["input-container"]}>
                <TextInput
                    inputName="title"
                    maxLength={50}
                    label
                    labelText="Title"
                    placeholder
                    placeholderText="Do something with my family"
                    onChange={handleChange}
                    stateValue={form.title}
                />
            </div>
            <div className={styles["input-container"]}>
                <DateInput
                    inputName="deadline"
                    label
                    labelText="Deadline"
                    onChange={handleChange}

                    stateValue={form.deadline}

                />
            </div>
            <div className={styles["input-container"]}>
                <TextareaInput
                    inputName="description"
                    maxLength={260}
                    label
                    labelText="Description"
                    placeholder
                    placeholderText="lorem ipsum..."
                    onChange={handleChange}
                    stateValue={form.description}

                />
            </div>
        </form>
    );
};
