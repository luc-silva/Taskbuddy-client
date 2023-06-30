import { useEffect, useState } from "react";
import {   useLocation, useNavigate } from "react-router-dom";
import { userInitialValues } from "../../constants/initial-values";
import {
    List,
    CaretDoubleLeft,
    SignOut,
} from "phosphor-react";

import styles from "./SideNavbar.module.css";
import { DashboardLinkButton } from "../buttons/DashboardLinkButton";
import { ProjectLinkButton } from "../buttons/ProjectLinkButton";
import { TodoLinkButton } from "../buttons/TodoLinkButton";

export const SideNavbar = ({ setUser }: { setUser: Function }) => {
    let path = useLocation();
    let navigate = useNavigate();

    let [isActive, toggleNav] = useState(false);
    let [isFocused, toggleFocus] = useState(false);

    function logOut() {
        setUser({ ...userInitialValues });
        navigate("/login");
    }

    function getClass(condition: boolean) {
        return condition
            ? [styles["navbar"], styles["navbar--open"]].join(" ")
            : styles["navbar"];
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
        <nav className={getClass(isFocused)}>
            {/* open/close navbar btn */}
            <div className={styles["main-btn__container"]}>
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
            </div>

            {/* other links */}
            <ul className={styles["pages__link__container"]}>
                <li>
                    <DashboardLinkButton isMenuFocused={isFocused} />
                </li>

                <li>
                    <ProjectLinkButton isMenuFocused={isFocused} />
                </li>
                <li>
                    <TodoLinkButton isMenuFocused={isFocused} />
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
