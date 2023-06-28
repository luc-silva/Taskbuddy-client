interface IUserSession extends IUser {
    isLogged: boolean;
}

interface IUser {
    name?: string;
    email?: string;
    id: number;
}

interface IUserStatus {
    todo_total: number;
    todo_concluded: number;
    todo_conclusion_rate: number;
    project_total: number;
    project_concluded: number;
    project_conclusion_rate: number;
    project_tasks_average: number;
}

interface IProjectTask {
    id: number;
    title: string;
    priority: string;
    completed: boolean;
}

interface IMessageResponse {
    message: string;
}

interface IErrorMessageResponse {
    message: string;
    status: string;
    status_code: number;
}

type toggleToastCallback = (str: string, status?: number) => void;

interface IProject {
    id: number;
    title: string;
    description: string;
    deadline: string;
    priority: string;
    user: IUser;
    concluded: boolean;
    projectTasks: IProjectTask[];
}

interface ITodo {
    id: number;
    text: string;
    concluded: boolean;
    deadline: string;
    priority: string;
    user: IUser;
}

interface ILoginForm {
    email: string;
    password: string;
}

interface IRegisterForm extends ILoginForm {
    name: string;
}

declare module "*.module.css" {
    const classes: { [key: string]: string };
    export default classes;
}
