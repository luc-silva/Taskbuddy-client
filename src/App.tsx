import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { userData } from "./userData";

import { ProjectPage } from "./pages/ProjectsPage";
import { TodosPage } from "./pages/TodosPage"; 
import { DashboardPage } from "./pages/DashboardPage";

import { ProjectCreatorModal } from "./components/modals/ProjectCreatorModal";
import { TaskCreatorModal } from "./components/modals/TaskCreatorModal";
import { ErrorToast } from "./components/misc/ErrorToast";
import { AppHeader } from "./components/misc/AppHeader";
import { SideNavbar } from "./components/misc/SideNavbar";
import "./taskbuddy.css";


function App() {
    let [loggedUser, setLoggedUser] = useState(userData);

    let [isTaskCreatorActive, toggleTaskCreator] = useState(false);
    let [isProjectCreatorActive, toggleProjectCreator] = useState(false);
    let [isErrorToastActive, toggleErrorToast] = useState(false);

    return (
        <div className="App">
            <ProjectCreatorModal
                isToastActive={isErrorToastActive}
                toggleToast={toggleErrorToast}
                user={loggedUser}
                modifyUser={setLoggedUser}
                isActive={isProjectCreatorActive}
                toggleModal={toggleProjectCreator}
            />
            <TaskCreatorModal
                isToastActive={isErrorToastActive}
                toggleToast={toggleErrorToast}
                user={loggedUser}
                modifyUser={setLoggedUser}
                isActive={isTaskCreatorActive}
                toggleModal={toggleTaskCreator}
            />
            <ErrorToast
                message="Invalid input values"
                isActive={isErrorToastActive}
                toggleToast={toggleErrorToast}
            />
            <AppHeader />
            <main className="app-structure">
                <Router>
                    <SideNavbar />
                    <Routes>
                        <Route
                            path="/dashboard"
                            element={<DashboardPage user={loggedUser} />}
                        />
                        <Route
                            path="/projects"
                            element={
                                <ProjectPage
                                    user={loggedUser}
                                    modifyUser={setLoggedUser}
                                    projects={loggedUser.projectList}
                                    isActive={isProjectCreatorActive}
                                    toggleProjectCreator={toggleProjectCreator}
                                />
                            }
                        />
                        <Route
                            path="/tasks"
                            element={
                                <TodosPage
                                    user={loggedUser}
                                    modifyUser={setLoggedUser}
                                    tasks={loggedUser.todoList}
                                    toggleTaskCreator={toggleTaskCreator}
                                    isTaskCreatorActive={isTaskCreatorActive}
                                />
                            }
                        />
                    </Routes>
                </Router>
            </main>
        </div>
    );
}

export default App;
