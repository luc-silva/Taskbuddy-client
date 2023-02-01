import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import { SideNavbar } from "./components/SideNavbar/SideNavbar";
import { ProjectPage } from "./pages/ProjectsPage/ProjectsPage";
import { TodosPage } from "./pages/TodosPage/TodosPage";

import "./global.css";
import { TaskCreatorModal } from "./pages/TodosPage/TaskCreatorModal";
import { ProjectCreatorModal } from "./pages/ProjectsPage/ProjectCreatorModal";

function App() {
    let [isTaskCreatorActive, toggleTaskCreator] = useState(false);
    let [isProjectCreatorActive, toggleProjectCreator] = useState(false);

    return (
        <div className="App">
            <ProjectCreatorModal
                isActive={isProjectCreatorActive}
                toggleModal={toggleProjectCreator}
            />
            <TaskCreatorModal
                isActive={isTaskCreatorActive}
                toggleModal={toggleTaskCreator}
            />
            <Router>
                <SideNavbar />
                <Routes>
                    <Route
                        path={"/tasks"}
                        element={
                            <TodosPage
                                toggleTaskCreator={toggleTaskCreator}
                                isTaskCreatorActive={isTaskCreatorActive}
                            />
                        }
                    />
                    <Route
                        path="/projects"
                        element={
                            <ProjectPage
                                isActive={isProjectCreatorActive}
                                toggleProjectCreator={toggleProjectCreator}
                            />
                        }
                    />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
