import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { SideNavbar } from "./components/SideNavbar/SideNavbar";
import { ProjectPage } from "./pages/ProjectsPage/ProjectsPage";
import { TodosPage } from "./pages/TodosPage/TodosPage";

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
