export const userInitialValues: IUser = {
    email: "",
    id: 0,
    name: "",
};

export const userSessionInitialValues: IUserSession = {
    ...userInitialValues,
    isLogged: false,
};

export const userStatusInitialValues:IUserStatus = {
    todo_total: 1,
	todo_concluded: 0,
	todo_conclusion_rate: 0.0,
	project_total: 1,
	project_concluded: 0,
	project_conclusion_rate: 0.0,
	project_tasks_average: 0.0
}

export const projectInitialValues: IProject = {
    deadline: "2023-06-15T00:00:00.000+00:00",
    description: "",
    id: 0,
    priority: "LOW",
    projectTasks: [],
    concluded: false,
    title: "",
    user: { ...userInitialValues },
};

export const projectTaskInitialValues: IProjectTask = {
    completed: false,
    id: 0,
    priority: "LOW",
    title: "",
};

export const todoInitialValues: ITodo = {
    id: 0,
    concluded: false,
    deadline: "2023-06-15T00:00:00.000+00:00",
    priority: "LOW",
    text: "",
    user: { ...userInitialValues },
};

//forms
export const loginFormInitialValues: ILoginForm = {
    email: "",
    password: "",
};

export const registerFormInitialValues: IRegisterForm = {
    email: "",
    password: "",
    name: "",
};

export const selectOptions = ["LOW","MEDIUM","HIGH","URGENT",]