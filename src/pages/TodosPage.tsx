import TodoService from "../services/TodoService";
import UserService from "../services/UserService";
import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import { Button } from "../components/buttons/Button";
import { TodoCard } from "../components/cards/TodoCard";

import styles from "./TodosPage.module.css";

export const TodosPage = ({
    user,
    toggleTaskCreator,
    toggleToast,
    isTaskCreatorActive,
}: {
    user: IUserSession;
    toggleTaskCreator: Function;
    toggleToast: toggleToastCallback;

    isTaskCreatorActive: boolean;
}) => {
    let [todos, setTodos] = useState([] as ITodo[]);
    const navigate = useNavigate();

    async function listTodos() {
        await UserService.listUserTodos(user.id).then((data) => {
            setTodos(data);
        });
    }

    async function deleteTodo(id: number) {
        await TodoService.delete(id).then((data) => {
            toggleToast(data.message, 200);
            listTodos();
        });
    }

    useEffect(() => {
        listTodos();
    }, [user.id]);

    useEffect(() => {
        if (!user.isLogged) {
            navigate("/login");
        }
    }, [user]);

    return (
        <>
            <Outlet context={listTodos} />
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
                        <TodoCard
                            handleDelete={deleteTodo}
                            updateTodos={listTodos}
                            id={id}
                            key={index}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};
