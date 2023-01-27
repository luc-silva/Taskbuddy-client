import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppHeader } from "./components/AppHeader/AppHeader";
import { ProjectPage } from "./components/ProjectsPage/ProjectPage";
import { SideNavbar } from "./components/SideNavbar/SideNavbar";

import "./global.css";

function App() {
    return (
        <div className="App">
            <AppHeader />
                <Router>
                    <SideNavbar />
                    {/* <Routes>
                        <Route path="/" element={<ProjectPage />} />
                    </Routes> */}
                </Router>
            </div>
    );
}

export default App;
