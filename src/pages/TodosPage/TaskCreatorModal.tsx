import { X } from "phosphor-react";
import { AppButtonPanel } from "../../components/Buttons/AppButtonPanel";
import { AppCloseButton } from "../../components/Buttons/AppCloseButton";
import styles from "./TaskCreatorModal.module.css";

export const TaskCreatorModal = ({
    toggleModal,
    isActive,
}: {
    toggleModal: Function;
    isActive: boolean;
}) => {
    if (!isActive) {
        return null;
    } else {
        return (
            <div
                className={styles["task-creator-background"]}
                onClick={() => {
                    toggleModal(!isActive);
                }}
            >
                <div
                    className={styles["task-creator"]}
                    onClick={(event) => {
                        event.stopPropagation();
                    }}
                >
                    <AppCloseButton
                        toggleModal={toggleModal}
                        isActive={isActive}
                    />

                    <div className={styles["input-container"]}>
                        <div className={styles["input-div"]}>
                            Task
                            <input type="text" />
                        </div>
                        <div className={styles["input-div"]}>
                            Deadline
                            <input type="text" />
                        </div>
                        <div className={styles["input-div"]}>
                            Priority
                            <select >
                                <option>Low Priority</option>
                                <option>Medium Priority</option>
                                <option>High Priority</option>
                                <option>Urgent</option>
                                <option>You should do it NOW!</option>
                            </select>
                        </div>
                    </div>

                    <AppButtonPanel />
                </div>
            </div>
        );
    }
};
