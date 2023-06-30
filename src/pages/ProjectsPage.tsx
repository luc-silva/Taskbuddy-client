import UserService from "../services/UserService";
import ProjectService from "../services/ProjectService";
import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import { Button } from "../components/buttons/Button";
import { ProjectCard } from "../components/cards/ProjectCard";
import { RedirectUser } from "../utils/RedirectUser";

import styles from "./ProjectsPage.module.css";

export const ProjectPage = ({
    isActive,
    toggleProjectCreator,
    toggleToast,
    user,
}: {
    isActive: boolean;
    toggleProjectCreator: Function;
    toggleToast: toggleToastCallback;
    user: IUserSession;
}) => {
    let [projects, setProjects] = useState([] as IProject[]);
    const navigate = useNavigate();

    function handleDelete(id: number) {
        ProjectService.delete(id).then((data: IMessageResponse) => {
            toggleToast(data.message, 200);
            listProjects();
        });
    }

    function listProjects() {
        UserService.listUserProjects(user.id).then((data) => {
            setProjects(data);
        });
    }

    useEffect(() => {
        if (user.id) {
            listProjects();
        }
    }, []); 
    return (
        <>
            <Outlet context={listProjects} />
            <RedirectUser user={user} />
            <div className={styles["projects"]}>
                <div className={styles["button-panel"]}>
                    <Button
                        text="Add Project"
                        isModalActive={isActive}
                        toggleModal={toggleProjectCreator}
                    />
                </div>
                <div className={styles["projects__container"]}>
                    {projects.length === 0 && (
                        <p>You dont have any project yet.</p>
                    )}
                    {projects.map(({ id }: IProject, index: number) => {
                        return (
                            <ProjectCard
                                handleDelete={handleDelete}
                                id={id}
                                key={index}
                            />
                        );
                    })}
                </div>
            </div>
        </>
    );
};
