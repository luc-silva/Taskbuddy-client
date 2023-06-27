import { NavLink } from "react-router-dom";
import { ListChecks } from "phosphor-react";
import styles from "./AsideButtons.module.css";
import { useState } from "react";

export const TodoLinkButton = ({
    isMenuFocused,
}: {
    isMenuFocused: boolean;
}) => {
    let [isTabActive, toggleTab] = useState(false);
    return (
        <NavLink
            className={({ isActive }) => {
                toggleTab(isActive);
                return styles["navbar-btn"];
            }}
            to="/tasks"
        >
            {isTabActive && <div className={styles["active-tab-detail"]} />}
            <ListChecks className={styles["navbar-btn-icon"]} size={24} />
            {isMenuFocused && <span>To-do</span>}
        </NavLink>
    );
};
