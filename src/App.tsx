import { userSessionInitialValues } from "./constants/initial-values";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { ProjectPage } from "./pages/ProjectsPage";
import { TodosPage } from "./pages/TodosPage";
import { DashboardPage } from "./pages/DashboardPage";
import { ProjectCreatorModal } from "./components/modals/ProjectCreatorModal";
import { TaskCreatorModal } from "./components/modals/TaskCreatorModal";
import { AppHeader } from "./components/misc/AppHeader";
import { SideNavbar } from "./components/misc/SideNavbar";
import { Toast } from "./components/misc/Toast";

import styles from "./taskbuddy.module.css";

function App() {
    let [user, setUser] = useState(userSessionInitialValues);

    let [isTaskCreatorActive, toggleTaskCreator] = useState(false);
    let [isProjectCreatorActive, toggleProjectCreator] = useState(true);

    let [isToastActive, toggleToast] = useState(false);
    let [toastMsg, setToastMsg] = useState("");
    let [toastType, setToastType] = useState("info" as "info" | "error");

    function showToast(str: string, status?: number) {
        if (status && status >= 400) {
            setToastType("error");
        } else {
            setToastType("info");
        }
        setToastMsg(str);
        toggleToast(true);
    }

    return (
        <div className={styles["taskbuddy"]}>
            <Toast
                type={toastType}
                message={toastMsg}
                isActive={isToastActive}
                toggleToast={toggleToast}
            />
            <AppHeader />
            <main className={styles["pages"]}>
                <Router>
                    <SideNavbar setUser={setUser} />
                    <Routes>
                        <Route
                            path="/login"
                            element={
                                <Login
                                    toggleToast={showToast}
                                    setUser={setUser}
                                />
                            }
                        />
                        <Route
                            path="/register"
                            element={<Register toggleToast={showToast} />}
                        />

                        <Route
                            path="/dashboard"
                            element={<DashboardPage user={user} />}
                        />
                        <Route
                            path="/projects"
                            element={
                                <ProjectPage
                                    user={user}
                                    isActive={isProjectCreatorActive}
                                    toggleToast={showToast}
                                    toggleProjectCreator={toggleProjectCreator}
                                />
                            }
                        >
                            <Route
                                path="create"
                                element={
                                    <ProjectCreatorModal
                                        toggleToast={showToast}
                                        user={user}
                                        isActive={isProjectCreatorActive}
                                        toggleModal={toggleProjectCreator}
                                    />
                                }
                            />
                        </Route>
                        <Route
                            path="/tasks"
                            element={
                                <TodosPage
                                    user={user}
                                    toggleTaskCreator={toggleTaskCreator}
                                    toggleToast={showToast}
                                    isTaskCreatorActive={isTaskCreatorActive}
                                />
                            }
                        >
                            <Route
                                path="create"
                                element={
                                    <TaskCreatorModal
                                        toggleToast={showToast}
                                        user={user}
                                        isActive={isTaskCreatorActive}
                                        toggleModal={toggleTaskCreator}
                                    />
                                }
                            />
                        </Route>
                    </Routes>
                </Router>
            </main>
        </div>
    );
}

export default App;
