import UserService from "../services/UserService";
import { AxiosError } from "axios";
import { extractErrorMessage } from "../utils/tools";
import { FormEvent, useState } from "react";
import { registerFormInitialValues } from "../constants/initial-values";

import { HeroText } from "../components/misc/HeroText";
import { RegisterForm } from "../components/forms/RegisterForm";
import { FooterText } from "../components/misc/FooterText";
import { useNavigate } from "react-router-dom";

import styles from "./Register.module.css";

export const Register = ({
    toggleToast,
}: {
    toggleToast: toggleToastCallback;
}) => {
    let [dataForm, setDataForm] = useState(registerFormInitialValues);
    let navigate = useNavigate();

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        UserService.create(dataForm)
            .then((data: IMessageResponse) => {
                navigate("/login");
            })
            .catch((response: AxiosError<IErrorMessageResponse>) => {
                toggleToast(extractErrorMessage(response), 400)
            });
    }
    return (
        <main className={styles["register"]}>
            <section className={styles["register__main"]}>
                <div className={styles["register__hero"]}>
                    <HeroText />
                </div>
                <div className={styles["register__form-container"]}>
                    <div className={styles["form-container"]}>
                        <h2>Create Account</h2>
                    </div>
                    <div className={styles["form-container__form"]}>
                        <RegisterForm
                            form={dataForm}
                            setForm={setDataForm}
                            onSubmit={handleSubmit}
                        />
                    </div>
                </div>
            </section>
            <div className={styles["register__footer"]}>
                <FooterText />
            </div>
        </main>
    );
};
