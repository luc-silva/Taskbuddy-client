import { ProjectModel } from "./pages/ProjectsPage/ProjectPageModels";
import { TaskModel } from "./pages/TodosPage/TaskModel";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import { SideNavbar } from "./components/SideNavbar/SideNavbar";
import { ProjectPage } from "./pages/ProjectsPage/ProjectsPage";
import { TodosPage } from "./pages/TodosPage/TodosPage";
import { TaskCreatorModal } from "./pages/TodosPage/TaskCreatorModal";
import { ProjectCreatorModal } from "./pages/ProjectsPage/ProjectCreatorModal";
import { AppHeader } from "./components/AppHeader/AppHeader";

import { userData } from "./userData";
import "./global.css";
import { DashboardPage } from "./pages/DashboardPage/DashboardPage";

function App() {
    let [loggedUser, setLoggedUser] = useState(userData);

    let [isTaskCreatorActive, toggleTaskCreator] = useState(false);
    let [isProjectCreatorActive, toggleProjectCreator] = useState(false);

    return (
        <div className="App">
            <ProjectCreatorModal
                user={loggedUser}
                modifyUser={setLoggedUser}
                isActive={isProjectCreatorActive}
                toggleModal={toggleProjectCreator}
            />
            <TaskCreatorModal
                user={loggedUser}
                modifyUser={setLoggedUser}
                isActive={isTaskCreatorActive}
                toggleModal={toggleTaskCreator}
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
