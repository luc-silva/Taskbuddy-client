import UserService from "../services/UserService";
import { ChangeEvent, FormEvent, useState } from "react";

import { LoginForm } from "../components/forms/LoginForm";
import { HeroText } from "../components/misc/HeroText";
import { loginFormInitialValues } from "../constants/initial-values";

import styles from "./Login.module.css";
import { FooterText } from "../components/misc/FooterText";
import { useNavigate } from "react-router-dom";

export const Login = ({ setUser }: { setUser: Function }) => {
    let [userForm, setUserForm] = useState(loginFormInitialValues);
    let navigate = useNavigate();

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        UserService.login(userForm).then((data: IUser) => {
            setUser({ ...data, isLogged: true });
            navigate("/project")
        });
    }
    return (
        <main className={styles["login"]}>
            <section className={styles["login__main"]}>
                <div className={styles["login__hero"]}>
                    <HeroText />
                </div>
                <div className={styles["login__form-container"]}>
                    <div className={styles["form-container"]}>
                        <h2>Log in</h2>
                    </div>
                    <div className={styles["form-container__form"]}>
                        <LoginForm
                            form={userForm}
                            setForm={setUserForm}
                            onSubmit={handleSubmit}
                        />
                    </div>
                </div>
            </section>
            <div className={styles["login__footer"]}>
                <FooterText />
            </div>
        </main>
    );
};