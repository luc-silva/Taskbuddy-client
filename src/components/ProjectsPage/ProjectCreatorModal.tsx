export const ProjectCreatorModal = () => {
    return (
        <div>
            <h3>Create a new project</h3>
            <div className="project-creator-titlebox">
                <div className="project-title-div">
                    Project Title
                    <input type="text" className="project-title-input" />
                </div>
                <div className="project-deadline-div">
                    Deadline
                    <input type="text" className="project-deadline-input"/>
                </div>
            </div>
            <div className="project-creator-descbox">
                Description 
                <textarea className="project-description-text-area"/>
            </div>
            <div>
                <h3>Add Tasks</h3>
                <div className="project-tasks-preview"></div>
                <div className="already-added-tasks"></div>
            </div>
            <button className="create-project-button">Create Project</button>
        </div>
    );
};
