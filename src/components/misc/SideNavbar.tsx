import { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { userInitialValues } from "../../constants/initial-values";
import {
    Flag,
    Gauge,
    List,
    ListChecks,
    CaretDoubleLeft,
    SignOut,
} from "phosphor-react";

import styles from "./SideNavbar.module.css";

export const SideNavbar = ({ setUser }: { setUser: Function }) => {
    let path = useLocation();
    let navigate = useNavigate();

    let [isActive, toggleNav] = useState(false);
    let [isFocused, toggleFocus] = useState(false);

    function logOut() {
        setUser({ ...userInitialValues });
        navigate("/login")
    }

    useEffect(() => {
        if (path.pathname === "/login") {
            toggleNav(false);
        } else {
            toggleNav(true);
        }

    }, [path.pathname]);

    if (!isActive) return null;
    return (
        <nav
            className={
                isFocused ? styles["side-navbar"] : styles["closed-side-navbar"]
            }
        >
            {/* open/close navbar btn */}
            {(isFocused && (
                <CaretDoubleLeft
                    className={styles["navbar-btn-icon"]}
                    size={24}
                    onClick={() => {
                        toggleFocus(!isFocused);
                    }}
                />
            )) || (
                <List
                    className={styles["navbar-btn-icon"]}
                    size={24}
                    onClick={() => {
                        toggleFocus(!isFocused);
                    }}
                />
            )}

            {/* other links */}
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
                        {isFocused && <span>Dashboard</span>}
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
                        {isFocused && <span>Projects</span>}
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
                        {isFocused && <span>To-do</span>}
                    </NavLink>
                </li>
            </ul>
            <div className={styles["log-out__container"]}>
                <button onClick={logOut} className={styles["log-out__btn"]}>
                    {isFocused && <p> Log out </p>}
                    <SignOut size={24} />
                </button>
            </div>
        </nav>
    );
};
