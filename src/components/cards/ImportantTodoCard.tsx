import { useEffect, useState } from "react";
import TodoService from "../../services/TodoService";
import { todoInitialValues } from "../../constants/initial-values";
import { format } from "date-fns";

import styles from "./ImportantTodoCard.module.css";

export const ImportantTodoCard = ({ id }: { id: number }) => {
    let [todo, setTodo] = useState(todoInitialValues)

    useEffect(() => {
        TodoService.get(id).then(setTodo)
    }, [id])
    return (
        <div className={styles["important-task"]}>
            <strong>{todo.text}</strong>
            <p>{format(new Date(todo.deadline), "MM/dd/yyyy")}</p>
        </div>
    );
};
