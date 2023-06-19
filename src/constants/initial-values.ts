export const userInitialValues: IUser = {
    email: "",
    id: 0,
    name: "",
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
