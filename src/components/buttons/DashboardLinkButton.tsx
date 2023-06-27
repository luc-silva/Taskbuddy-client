import { Gauge } from "phosphor-react";
import { NavLink } from "react-router-dom";
import styles from "./AsideButtons.module.css";
import { useState } from "react";


export const DashboardLinkButton = ({
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
            to="/dashboard"
        >
            {isTabActive && <div className={styles["active-tab-detail"]} />}
            <Gauge className={styles["navbar-btn-icon"]} size={24} />
            {isMenuFocused && <span>Dashboard</span>}
        </NavLink>
    );
};
