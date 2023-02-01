import { Trash } from "phosphor-react";
import { AppButtonPanel } from "../../components/Buttons/AppButtonPanel";
import { AppCloseButton } from "../../components/Buttons/AppCloseButton";
import styles from "./ProjectCreatorModal.module.css";

export const ProjectCreatorModal = ({
    isActive,
    toggleModal,
}: {
    isActive: boolean;
    toggleModal: Function;
}) => {
    if (!isActive) return null;
    return (
        <div
            className={styles["project-creator-background"]}
            onClick={() => {
                toggleModal(!isActive);
            }}
        >
            <div
                className={styles["project-creator"]}
                onClick={(e) => {
                    e.stopPropagation();
                }}
            >
                <AppCloseButton isActive={isActive} toggleModal={toggleModal} />
                <h3>Create a new project</h3>
                <div className={styles["project-creator-main"]}>
                    <div >
                        Project Title
                        <input type="text" />
                    </div>
                    <div >
                        Deadline
                        <input type="date" />
                    </div>
                    <div >
                        Description
                        <textarea />
                    </div>
                </div>

                <div className={styles["project-creator-tasks"]}>
                    <h3>Add Tasks</h3>
                    <div className={styles["creator-task-input"]}>
                        <input type="text" placeholder="Task title" />
                        <select>
                            <option value="low">Low Priority</option>
                            <option value="medium">Medium Priority</option>
                            <option value="high">High Priority</option>
                        </select>
                    </div>
                    <div className={styles["creator-tasks-preview"]}>
                        <div className={styles["task-card"]} >
                            <div className={styles["card-maininfo"]}>
                                <strong>Drink Water</strong>
                                <span>Low Priority</span>
                            </div>
                            <div className={styles["card-icons"]} >
                                <Trash size={24}  />
                            </div>
                        </div>
                        <div className={styles["task-card"]} >
                            <div className={styles["card-maininfo"]}>
                                <strong>Drink Water</strong>
                                <span>Low Priority</span>
                            </div>
                            <div className={styles["card-icons"]} >
                                <Trash size={24}  />
                            </div>
                        </div>
                        <div className={styles["task-card"]} >
                            <div className={styles["card-maininfo"]}>
                                <strong>Drink Water</strong>
                                <span>Low Priority</span>
                            </div>
                            <div className={styles["card-icons"]} >
                                <Trash size={24}  />
                            </div>
                        </div>
                    </div>
                </div>
                <AppButtonPanel 
                     isActive={isActive}
                     toggleModal={toggleModal}
                />
            </div>
        </div>
    );
};
