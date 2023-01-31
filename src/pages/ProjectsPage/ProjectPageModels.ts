export interface ProjectModel {
    projectTitle: string;
    projectDeadline: string;
    projectStatus: string;
    projectDescription: string;
    projectTasks: ProjectTaskModel[];
} 
export interface ProjectTaskModel {
    taskTitle: string;
    taskPriority: string;
}