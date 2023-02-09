export interface ProjectModel {
    projectTitle: string;
    projectDeadline: Date;
    projectStatus: "Unfinished" | "Finished";
    projectDescription: string;
    projectTasks: ProjectTaskModel[] ;
} 
export interface ProjectTaskModel {
    taskCompleted: boolean;
    taskTitle: string;
    taskPriority: string;
}