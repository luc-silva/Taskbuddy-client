class Todo{
    constructor(task, description, deadline){
        this.task = task;
        this.description = description;
        this.deadline = deadline;
    }
    
    get deadline(){
        return this._deadline
    }
    set deadline(date) {
        this._deadline = date;
    }
}

let tasktabDomManipulator = (function(){
    let globaltest = []

    let taskCreatorScreen = document.querySelector("#task-creator-screen")

    let createDiv = function(){
        return document.createElement("div")
    }
    let createBtn = function(){
        return document.createElement("button")
    }

    //Add task popups
    let backgroundPopup = document.querySelector("#popup-background")
    backgroundPopup.addEventListener("click", () => {
        removeTaskCreatorPopup()
    })
    
    let showTaskCreatorPopup = function(){
        backgroundPopup.style.display = "block"
        taskCreatorScreen.style.display = "flex"
        let addCardBtn = document.querySelector("#add-btn")
        addCardBtn.addEventListener("click", () => {
            let task = document.querySelector("#task-title-input").value
            let deadline = document.querySelector("#task-deadline-input").value
            let description = document.querySelector("#task-descript-textarea").value
            if(description = ""){
                description = "None"
            }
            globaltest.push(new Todo(task, description, deadline))
            console.log(globaltest)
        })
    }
    
    let removeTaskCreatorPopup = function(){
        backgroundPopup.style.display = "none"
        taskCreatorScreen.style.display = "none"
    }       

    //structure functions
    let createTaskAddBtn = function(){
        let div = createDiv()
        div.id = "tasks-button-panel"

        let button = createBtn()
        button.id = "add-task-btn"
        button.textContent = "Add task"

        button.addEventListener("click", () => {
            showTaskCreatorPopup()
        })
        
        div.append(button)
        return div
    }
    let createTaskContainer = function(){
        let tasksContainer = document.createElement("div")
        tasksContainer.id = "tasks-container"

        return tasksContainer
    }
    
    let createTodoElement = function(){
        let todoCard = document.createElement("span")
        todoCard.classList.add("todo-card")
        
        let cardTask = createDiv()
        cardTask.classList.add("card-task")
        cardTask.innerHTML = 'Task:<h3>Brush my Tooth</h3>'
        
        let todoCardDetails = createDiv()
        todoCardDetails.classList.add("todo-card-details")
        todoCardDetails.innerHTML = `
        <div class="card-dealine"><strong>Deadline</strong>: 21/32/3213</div>
        <div class="card-details-btn">Details</div>`
        
        todoCard.append(cardTask, todoCardDetails)
        
        return todoCard
    }
    
    return {createTodoElement, createTaskContainer, createTaskAddBtn}
})()


function initializeTaskTab(){
    let tasktab = document.querySelector("#todo-display")
    tasktab.textContent = ""
    //func para criar botoes

    tasktab.append(tasktabDomManipulator.createTaskAddBtn())

    let tasksContainer = tasktabDomManipulator.createTaskContainer()
    tasktab.append(tasksContainer)

    // todosArray.forEach(todo => {
    //     console.log(todo)
    //     tasksContainer.append(tasktabDomManipulator.createTodoElement())
    // })

}

export default initializeTaskTab;