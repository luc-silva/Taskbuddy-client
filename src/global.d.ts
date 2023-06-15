interface IUserSession extends IUser {
    isLogged: boolean;
}

interface IUser {
    name: string;
    email: string;
    id: number;
}

interface IProjectTask {
    id: number;
    title: string;
    priority: string;
    completed: false;
}

interface IProject {
    id: number;
    title: string;
    description: string;
    deadline: string;
    priority: string;
    user: IUser;
    projectTasks: IProjectTask[];
}

interface ITodo {
    text: string;
    concluded: boolean;
    deadline: string;
    priority: string;
    user: IUser;
}

declare module "*.module.css" {
    const classes: { [key: string]: string };
    export default classes;
}
