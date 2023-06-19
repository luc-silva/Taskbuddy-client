import UserService from "../services/UserService";
import { useEffect, useState } from "react";

import { AppAddButton } from "../components/buttons/AppAddButton";
import { ProjectCard } from "../components/cards/ProjectCard";

import styles from "./ProjectsPage.module.css";

export const ProjectPage = ({
    isActive,
    toggleProjectCreator,
    user
}: {
    isActive: boolean;
    toggleProjectCreator: Function;
    user:IUser
}) => {
    let [projects, setProjects] = useState([] as IProject[])

    useEffect(() => {
        UserService.listUserProjects(user.id).then((data) => {
            setProjects(data)
        })
    }, [user.id])
    return (
        <div className={styles["projects"]}>
            <div className={styles["button-panel"]}>
                <AppAddButton
                    text="Add Project"
                    isModalActive={isActive}
                    toggleModal={toggleProjectCreator}
                />
            </div>
            <div className={styles["projects__container"]}>
                {projects.map(({ id }: IProject, index: number) => {
                    return <ProjectCard id={id} key={index} />;
                })}
            </div>
        </div>
    );
};
