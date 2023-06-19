/**
 * Check if a project has been concluded by its tasks.
 * @param tasks Project tasks
 * @returns True or false
 */
export function isProjectCompleted(tasks:IProjectTask[]){
    return tasks.every((task) => task.completed)
}