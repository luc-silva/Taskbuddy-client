export const SideNavbar = () => {
    return (
        <aside>
            <nav>
                <ul>
                    <li className="dashboard-btn">Dashboard</li>
                    <li className="projects-btn">Projects</li>
                    {/* mostrar titulo dos 3 principais projetos, mostra porcentagem */}
                    <li className="tasks-btn">To-do</li>
                    {/* todo dessa semana, proximo mes, ano q vem */}
                </ul>
            </nav>
        </aside>
    )
}