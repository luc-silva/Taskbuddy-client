import { useEffect } from "react";
import { GreetingsDisplay } from "../components/displays/GreetingsDisplay";
import { ImportantTasksDisplay } from "../components/displays/ImportantTasksDisplay";
import { UserStatusDisplay } from "../components/displays/UserStatusDisplay";
import { ExternalLinks } from "../components/misc/ExternalLinks";
import { useNavigate } from "react-router-dom";

import styles from "./DashboardPage.module.css";

export const DashboardPage = ({ user }: { user: IUserSession }) => {
    const navigate = useNavigate()
    useEffect(() => {
        if(!user.isLogged){
            navigate("/login")
        }
    }, [user])
    return (
        <main className={styles["dashboard"]}>
            <section className={styles["dashboard__main"]}>
                <div className={styles["greetings"]}>
                    <GreetingsDisplay user={user} />
                </div>
                <div className={styles["container-counter"]}>
                    <div className={styles["counter-display"]}>
                        <div>
                            <strong>{10}</strong>
                            {/* of {user.todoList.length} tasks done! */}
                        </div>
                    </div>
                    <div className={styles["counter-display"]}>
                        <div>
                            <strong>{20}</strong>
                            {/* of {user.projectList.length} projects done! */}
                        </div>
                    </div>
                </div>
                <div className={styles["important-tasks__display"]}>
                    <ImportantTasksDisplay />
                </div>
            </section>

            <aside className={styles["extras-container"]}>
                <div className={styles["external-links"]}>
                    <div className={styles["external-links__title"]}>
                        <h3>Links</h3>
                        <p>Looking for more?</p>
                    </div>
                    <ul>
                        <ExternalLinks />
                    </ul>
                </div>

                <div className={styles["status__display"]}>
                    <UserStatusDisplay />
                </div>
            </aside>
        </main>
    );
};
