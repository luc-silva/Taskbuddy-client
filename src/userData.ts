import { ProjectModel } from "./pages/ProjectsPage/ProjectPageModels";
import { TaskModel } from "./pages/TodosPage/TaskModel";

export interface User{
    firstName: string
    projectList: ProjectModel[]
    todoList: TaskModel[]
}

export const userData = {
    firstName: "Lucas",
    projectList: [
        {
            projectTitle: "Trip to london",
            projectDeadline: "31312",
            projectDescription:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat voluptatum labore, temporibus eius quia rem odio voluptatem mollitia corporis eaque esse ratione delectus repellendus atque cum odit impedit tenetur inventore!",
            projectStatus: "Unfinished",
            projectTasks: [
                { taskPriority: "urgent", taskTitle: "sleep" },
                { taskPriority: "urgent", taskTitle: "sleep" },
            ],
        },
        {
            projectTitle: "Trip to london",
            projectDeadline: "31312",
            projectDescription:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat voluptatum labore, temporibus eius quia rem odio voluptatem mollitia corporis eaque esse ratione delectus repellendus atque cum odit impedit tenetur inventore!",
            projectStatus: "Unfinished",
            projectTasks: [
                { taskPriority: "urgent", taskTitle: "sleep" },
                { taskPriority: "urgent", taskTitle: "sleep" },
            ],
        },
    ],
    todoList: [

    ],
};
