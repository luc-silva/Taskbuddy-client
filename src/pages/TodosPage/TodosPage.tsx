import { AppAddButton } from "../../components/Buttons/AppAddButton";
import { TaskModel } from "./TaskModel";
import { TodoCard } from "./TodoCard";
import { User } from "../../userData";

import styles from "./TodosPage.module.css";

export const TodosPage = ({
    user,
    modifyUser,
    toggleTaskCreator,
    isTaskCreatorActive,
    tasks,
}: {
    user: User;
    modifyUser: Function;
    toggleTaskCreator: Function;
    isTaskCreatorActive: boolean;
    tasks: TaskModel[];
}) => {
    return (
        <div className={styles["todos-page"]}>
            <div className={styles["tasks-button-panel"]}>
                <AppAddButton
                    text="Add Task"
                    toggleModal={toggleTaskCreator}
                    isModalActive={isTaskCreatorActive}
                />
            </div>
            <div className={styles["tasks-container"]}>
                {tasks.map(
                    (
                        { taskConcluded, taskTitle, taskDeadline }: TaskModel,
                        index: number
                    ) => (
                        <TodoCard
                            user={user}
                            modifyUser={modifyUser}
                            taskConcluded={taskConcluded}
                            taskTitle={taskTitle}
                            taskDeadline={taskDeadline}
                            index={index}
                            key={index}
                        />
                    )
                )}
            </div>
        </div>
    );
};
