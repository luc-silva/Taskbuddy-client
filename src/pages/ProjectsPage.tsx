import UserService from "../services/UserService";
import ProjectService from "../services/ProjectService";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "../components/buttons/Button";
import { ProjectCard } from "../components/cards/ProjectCard";

import styles from "./ProjectsPage.module.css";

export const ProjectPage = ({
    isActive,
    toggleProjectCreator,
    user,
}: {
    isActive: boolean;
    toggleProjectCreator: Function;
    user: IUserSession;
}) => {
    let [projects, setProjects] = useState([] as IProject[]);
    const navigate = useNavigate();

    function handleDelete(id: number) {
        ProjectService.delete(id).then((data: IMessageResponse) => {
            console.log(data.message);
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
    useEffect(() => {
        if (!user.isLogged) {
            navigate("/login");
        }
    }, [user]);
    return (
        <div className={styles["projects"]}>
            <div className={styles["button-panel"]}>
                <Button
                    text="Add Project"
                    isModalActive={isActive}
                    toggleModal={toggleProjectCreator}
                />
            </div>
            <div className={styles["projects__container"]}>
                {projects.length === 0 && <p>You dont have any project yet.</p>}
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
    );
};
