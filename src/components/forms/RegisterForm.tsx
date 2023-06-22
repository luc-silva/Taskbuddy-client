import { TextInput } from "inputify/dist";
import { ChangeEvent, FormEventHandler } from "react";
import styles from "./Form.module.css";

export const RegisterForm = ({
    form,
    onSubmit,
    setForm,
}: {
    form: IRegisterForm;
    setForm: Function;
    onSubmit: FormEventHandler<HTMLFormElement>;
}) => {
    function handleChange(event: ChangeEvent) {
        let target = event.target;
        if (target instanceof HTMLInputElement) {
            setForm({ ...form, [target.name]: target.value });
        }
    }
    return (
        <>
            <form action="POST" onSubmit={onSubmit} className={styles["form"]}>
                <div className={styles["input-container"]}>
                    <TextInput
                        inputName="name"
                        label
                        labelText="Name"
                        placeholder
                        placeholderText="John Doe"
                        onChange={handleChange}
                        inputType="text"
                        stateValue={form.name}
                        required
                    />
                </div>
                <div className={styles["input-container"]}>
                    <TextInput
                        inputName="email"
                        label
                        labelText="Email"
                        placeholder
                        placeholderText="j.doe@user.com"
                        inputType="email"
                        onChange={handleChange}
                        stateValue={form.email}
                        required
                    />
                </div>
                <div className={styles["input-container"]}>
                    <TextInput
                        inputName="password"
                        label
                        labelText="Password"
                        placeholder
                        placeholderText="123"
                        onChange={handleChange}
                        inputType="text"
                        stateValue={form.password}
                        required
                    />
                </div>
                <div className={styles["submit-input-container"]}>
                    <input type="submit" value="Create Account"/>
                </div>
            </form>
        </>
    );
};
