import styles from "./AppHeader.module.css";

export const AppHeader = () => {
    return (
        <header className={styles["app-header"]}>
            <h1>Lucas' Todo-List</h1>
            <a href="https://github.com/luc-silva" target={"_blank"}>
                Github
            </a>
        </header>
    );
};
