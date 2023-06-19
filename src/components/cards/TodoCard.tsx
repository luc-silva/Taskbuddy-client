import { Trash } from "phosphor-react";
import { format } from "date-fns";
import styles from "./TodoCard.module.css";
import { useEffect, useState } from "react";
import TodoService from "../../services/TodoService";
import { todoInitialValues } from "../../constants/initial-values";

export const TodoCard = ({
    id,
    updateTodos,
}: {
    id: number;
    updateTodos: Function;
}) => {
    let [todo, setTodo] = useState(todoInitialValues);

    async function handleDelete() {
        await TodoService.delete(id).then((data) => {
            //showToast
            updateTodos();
        });
    }
    async function handleCheckbox() {
        await TodoService.update(id, {
            ...todo,
            concluded: !todo.concluded,
        }).then(() => {
            updateCard();
        });
    }
    async function updateCard() {
        await TodoService.get(id).then((data) => {
            setTodo(data);
        });
    }
    useEffect(() => {
        updateCard();
    }, [id]);

    return (
        <div className={styles["todo"]}>
            <div className={styles["todo__main"]}>
                <div className={styles["todo__checkbox"]}>
                    <input
                        type="checkbox"
                        checked={todo.concluded}
                        onChange={handleCheckbox}
                    />
                </div>
                <div className={styles["todo__title"]}>
                    Task:
                    <strong>{todo.text}</strong>
                </div>
                <div className={styles["todo__priority"]}>
                    Priority:
                    <strong>{todo.priority}</strong>
                </div>
            </div>
            <div className={styles["todo__details"]}>
                <div className={styles["todo__deadline"]}>
                    <strong>Deadline:</strong>
                    <span>{format(new Date(todo.deadline), "MM/dd/yyyy")}</span>
                </div>
                <div className={styles["todo__btn-panel"]}>
                    <button
                        className={styles["delete-btn"]}
                        onClick={handleDelete}
                    >
                        <Trash size={30} color="red" weight="regular" />
                    </button>
                </div>
            </div>
        </div>
    );
};
