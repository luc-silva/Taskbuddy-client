export const userInitialValues: IUser = {
    email: "",
    id: 0,
    name: "",
};

export const userSessionInitialValues: IUserSession = {
    ...userInitialValues,
    isLogged: false,
};

export const projectInitialValues: IProject = {
    deadline: "",
    description: "",
    id: 0,
    priority: "",
    projectTasks: [],
    title: "",
    user: { ...userInitialValues },
};

export const projectTaskInitialValues: IProjectTask = {
    completed: false,
    id: 0,
    priority: "",
    title: "",
};

export const todoInitialValues: ITodo = {
    id: 0,
    concluded: false,
    deadline: "",
    priority: "",
    text: "",
    user: { ...userInitialValues },
};

export const loginFormInitialValues: ILoginForm = {
    email: "",
    password: "",
};

export const registerFormInitialValues: IRegisterForm = {
    email: "",
    password: "",
    name: "",
};
