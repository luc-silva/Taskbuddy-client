import { Link } from "react-router-dom";
import styles from "./ImportantTasksDisplay.module.css";
import { useEffect, useState } from "react";
import UserService from "../../services/UserService";
import { ImportantTodoCard } from "../cards/ImportantTodoCard";

export const ImportantTasksDisplay = ({ user }: { user: IUserSession }) => {
    let [todos, setTodos] = useState([] as ITodo[]);
    useEffect(() => {
        UserService.listUserImportantTodos(user.id).then(setTodos);
    }, [user]);
    return (
        <>
            <div className={styles["display__title"]}>
                <h3>Important tasks to complete</h3>
                <p>
                    Track what you have to do. Go to{" "}
                    <Link to="/tasks">to-dos</Link> for more details
                </p>
            </div>
            <div className={styles["display__container"]}>
                {todos.map(({ id }) => {
                    return <ImportantTodoCard id={id} />;
                })}
            </div>
        </>
    );
};
