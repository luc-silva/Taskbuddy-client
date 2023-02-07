export interface ProjectModel {
    projectTitle: string;
    projectDeadline: Date;
    projectStatus: "Unfinished" | "Concluded";
    projectDescription: string;
    projectTasks: ProjectTaskModel[] ;
} 
export interface ProjectTaskModel {
    taskTitle: string;
    taskPriority: string;
}