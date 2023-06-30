import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { ProgressionStatusDisplay } from "../components/displays/ProgressionStatusDisplay";
import { GreetingsDisplay } from "../components/displays/GreetingsDisplay";
import { ImportantTasksDisplay } from "../components/displays/ImportantTasksDisplay";
import { ExternalLinks } from "../components/misc/ExternalLinks";
import { UserStatusDisplay } from "../components/displays/UserStatusDisplay";
import { RedirectUser } from "../utils/RedirectUser";

import styles from "./DashboardPage.module.css";

export const DashboardPage = ({ user }: { user: IUserSession }) => {
    return (
        <main className={styles["dashboard"]}>
            <RedirectUser user={user} />
            <section className={styles["dashboard__main"]}>
                <div className={styles["greetings"]}>
                    <GreetingsDisplay user={user} />
                </div>
                <div className={styles["container-counter"]}>
                    <ProgressionStatusDisplay user={user}/>
                </div>
                <div className={styles["important-tasks__display"]}>
                    <ImportantTasksDisplay user={user}/>
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
                    <UserStatusDisplay user={user}/>
                </div>
            </aside>
        </main>
    );
};
