import { FormEventHandler } from "react";
import { PasswordInput, TextInput } from "inputify/dist"; 
import styles from "./Form.module.css";

export const LoginForm = ({
    form,
    setForm,
    onSubmit
}: {
    form: ILoginForm;
    setForm:Function;
    onSubmit:FormEventHandler<HTMLFormElement>
}) => {
    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        let target = event.target;
        setForm({ ...form, [target.name]: target.value });
    }
    return (
        <form action="POST" onSubmit={onSubmit} className={styles["form"]} >
            <div className={styles["input-container"]} >
                <TextInput
                    inputName="email"
                    label
                    labelText="Email"
                    placeholder
                    placeholderText="j.doe@user.com"
                    onChange={handleChange}
                    stateValue={form.email}
                    maxLength={50}
                    required
                />
            </div>
            <div className={styles["input-container"]} >
                <PasswordInput
                    inputName="password"
                    label
                    labelText="Password"
                    placeholder
                    placeholderText="123"
                    onChange={handleChange}
                    stateValue={form.password}
                    maxLength={20}
                    required
                />
            </div>
            <div className={styles["submit-input-container"]}>
                <input type="submit" value="Log In"/>
            </div>
        </form>
    );
};
