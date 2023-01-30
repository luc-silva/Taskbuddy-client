import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppHeader } from "./components/AppHeader/AppHeader";
import { SideNavbar } from "./components/SideNavbar/SideNavbar";

import { ProjectPage } from "./components/ProjectsPage/ProjectPage";
import { TodosPage } from "./components/Todos/TodosPage";

import "./global.css";

function App() {
    return (
        <div className="App">
            <Router >
                <SideNavbar />
                <Routes>
                    <Route path={"/dashboard"} element={<TodosPage />} />
                    {/* <Route path="/" element={<ProjectPage />} /> */}
                </Routes>
            </Router>
        </div>
    );
}

export default App;
