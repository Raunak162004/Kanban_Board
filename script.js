let draggedCard = null;

function createTaskElement(taskText){
    const taskElement = document.createElement('div');
    taskElement.setAttribute('draggable', true);
    taskElement.addEventListener('dragstart', dragStart);
    taskElement.addEventListener('dragend', dragEnd);
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

function dragStart(){
    this.classList.add('dragging');
    draggedCard = this;
}
function dragEnd(){
    this.classList.remove('dragging');
    draggedCard = null;
}

function dragOver(event){
    event.preventDefault();
    this.appendChild(draggedCard);
}


const columns = document.querySelectorAll('.column .tasks');

columns.forEach((column) => {
    column.addEventListener('dragover', dragOver)
})
