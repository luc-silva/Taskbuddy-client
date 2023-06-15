import { ProjectModel } from "./components/ProjectsPage/ProjectPageModels";
import { TaskModel } from "./components/TodosPage/TaskModel";

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
