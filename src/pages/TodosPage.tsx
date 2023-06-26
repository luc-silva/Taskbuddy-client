import UserService from "../services/UserService";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "../components/buttons/Button";
import { TodoCard } from "../components/cards/TodoCard";

import styles from "./TodosPage.module.css";

export const TodosPage = ({
    user,
    toggleTaskCreator,
    isTaskCreatorActive,
}: {
    user: IUserSession;
    toggleTaskCreator: Function;
    isTaskCreatorActive: boolean;
}) => {
    let [todos, setTodos] = useState([] as ITodo[]);
    const navigate = useNavigate();

    async function updateTodos() {
        await UserService.listUserTodos(user.id).then((data) => {
            setTodos(data);
        });
    }

    useEffect(() => {
        updateTodos();
    }, [user.id]);

    useEffect(() => {
        if (!user.isLogged) {
            navigate("/login");
        }
    }, [user]);

    return (
        <div className={styles["todos-page"]}>
            <div className={styles["tasks-button-panel"]}>
                <Button
                    text="Add Task"
                    toggleModal={toggleTaskCreator}
                    isModalActive={isTaskCreatorActive}
                />
            </div>
            <div className={styles["tasks-container"]}>
                {todos.length === 0 && <p>You dont have any todos yet.</p>}
                {todos.map(({ id }: ITodo, index: number) => (
                    <TodoCard updateTodos={updateTodos} id={id} key={index} />
                ))}
            </div>
        </div>
    );
};
