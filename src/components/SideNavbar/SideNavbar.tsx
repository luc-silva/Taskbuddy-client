import { Flag, Gauge, List, ListChecks, CaretDoubleLeft } from "phosphor-react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import styles from "./SideNavbar.module.css";

export const SideNavbar = () => {
    let [navActive, toggleNav] = useState(false);
    let [navWidth, setNavWidth] = useState("5vw");

    useEffect(() => {
        if (navActive) {
            setNavWidth("10vw");
        } else {
            setNavWidth("5vw");
        }
    }, [navActive, navWidth]);

    return (
        <nav style={{ width: navWidth }} className={styles["side-navbar"]}>
            {(navActive && (
                <CaretDoubleLeft
                    className={styles["navbar-btn"]}
                    size={20}
                    onClick={() => {
                        toggleNav(!navActive);
                    }}
                />
            )) || (
                <List
                    className={styles["navbar-btn"]}
                    size={20}
                    onClick={() => {
                        toggleNav(!navActive);
                    }}
                />
            )}

            <ul>
                <li>
                    <NavLink to="/dashboard">
                        <Gauge
                            className={styles["navbar-btn-icon"]}
                            size={20}
                        />
                        {navActive && (
                            <span className={styles["dashboard-btn"]}>
                                Dashboard
                            </span>
                        )}
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/projects">
                        <Flag className={styles["navbar-btn-icon"]} size={20} />
                        {navActive && (
                            <span className={styles["projects-btn"]}>
                                Projects
                            </span>
                        )}
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/tasks">
                        <ListChecks
                            className={styles["navbar-btn-icon"]}
                            size={20}
                        />
                        {navActive && (
                            <span className={styles["tasks-btn-icon"]}>
                                To-do
                            </span>
                        )}
                    </NavLink>
                </li>

                {/* mostrar titulo dos 3 principais projetos, mostra porcentagem */}
                {/* todo dessa semana, proximo mes, ano q vem */}
            </ul>
        </nav>
    );
};
