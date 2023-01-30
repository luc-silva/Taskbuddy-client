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
        <nav
            style={{ width: navWidth }}
            className={ navActive ? styles["side-navbar"] : styles["closed-side-navbar"]}
        >
            {(navActive && (
                <CaretDoubleLeft
                    className={styles["navbar-btn-icon"]}
                    size={24}
                    onClick={() => {
                        toggleNav(!navActive);
                    }}
                />
            )) || (
                <List
                    className={styles["navbar-btn-icon"]}
                    size={24}
                    onClick={() => {
                        toggleNav(!navActive);
                    }}
                />
            )}

            <ul>
                <li>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? styles["navbar-btn-active"] : undefined
                        }
                        to="/dashboard"
                    >
                        <Gauge
                            className={styles["navbar-btn-icon"]}
                            size={24}
                        />
                        {navActive && <span>Dashboard</span>}
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? styles["navbar-btn-active"] : undefined
                        }
                        to="/projects"
                    >
                        <Flag className={styles["navbar-btn-icon"]} size={24} />
                        {navActive && <span>Projects</span>}
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? styles["navbar-btn-active"] : undefined
                        }
                        to="/tasks"
                    >
                        <ListChecks
                            className={styles["navbar-btn-icon"]}
                            size={24}
                        />
                        {navActive && <span>To-do</span>}
                    </NavLink>
                </li>

                {/* mostrar titulo dos 3 principais projetos, mostra porcentagem */}
                {/* todo dessa semana, proximo mes, ano q vem */}
            </ul>
        </nav>
    );
};
