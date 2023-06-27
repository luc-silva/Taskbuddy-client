import { Trash } from "phosphor-react";
import TodoService from "../../services/TodoService";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import { todoInitialValues } from "../../constants/initial-values";
import styles from "./TodoCard.module.css";

export const TodoCard = ({
    id,
    updateTodos,
    handleDelete,
}: {
    id: number;
    updateTodos: Function;
    handleDelete: Function;
}) => {
    let [todo, setTodo] = useState(todoInitialValues);

    async function handleCheckbox() {
        let data = { ...todo, concluded: !todo.concluded };
        setTodo(data);
        await TodoService.update(id, data).then(() => {
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
                    <div
                        className={styles["delete-btn"]}
                        onClick={() => {
                            handleDelete(id);
                        }}
                    >
                        <Trash size={30} color="red" weight="regular" />
                    </div>
                </div>
            </div>
        </div>
    );
};
