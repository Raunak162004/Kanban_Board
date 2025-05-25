function createTaskElement(taskText){
    const taskElement = document.createElement('div');
    taskElement.textContent = taskText;
    taskElement.classList.add('card');
    return taskElement;
}

function addTask(columnId){
    const input = document.getElementById(`${columnId}-input`);
    const taskText = input.value.trim();
    
    if(taskText === ""){
        return;
    }

    const taskElement = createTaskElement(taskText);

    document.getElementById(`${columnId}-tasks`).appendChild(taskElement);
    input.value = "";
}