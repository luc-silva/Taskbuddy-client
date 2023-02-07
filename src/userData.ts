import { ProjectModel } from "./pages/ProjectsPage/ProjectPageModels";
import { TaskModel } from "./pages/TodosPage/TaskModel";

export interface User {
    firstName: string;
    projectList: ProjectModel[];
    todoList: TaskModel[];
}

export const userData: User = {
    firstName: "Lucas",
    projectList: [],
    todoList: [],
};
