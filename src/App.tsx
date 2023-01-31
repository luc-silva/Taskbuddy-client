import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import { SideNavbar } from "./components/SideNavbar/SideNavbar";
import { ProjectPage } from "./pages/ProjectsPage/ProjectsPage";
import { TodosPage } from "./pages/TodosPage/TodosPage";

import "./global.css";
import { TaskCreatorModal } from "./pages/TodosPage/TaskCreatorModal";

function App() {
    let [isTaskCreatorActive, toggleTaskCreator] = useState(false);

    return (
        <div className="App">
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
                    <Route path="/projects" element={<ProjectPage />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
