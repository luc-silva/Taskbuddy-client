import { Flag } from "phosphor-react";
import { NavLink } from "react-router-dom";
import styles from "./AsideButtons.module.css";
import { useState } from "react";

export const ProjectLinkButton = ({
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
            to="/projects"
        >
            {isTabActive && <div className={styles["active-tab-detail"]} />}
            <Flag className={styles["navbar-btn-icon"]} size={24} />
            {isMenuFocused && <span>Projects</span>}
        </NavLink>
    );
};
