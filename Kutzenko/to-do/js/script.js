const btnTodo = document.querySelector('.to-do__text-btn');
const taskNode = document.querySelector('.to-do__task-block');
const tasksBlock = document.querySelector('.to-do__tasks');
const inputNode = document.querySelector('.to-do__input');

function cloneBlock(block) {
    const cloneTask = block.cloneNode(true);
    cloneTask.classList.remove('_completed');

    return cloneTask;
};

//Добавление задачи
btnTodo.addEventListener('click', function(){
    if(taskNode.classList.contains('_active')){
        const cloneTask = cloneBlock(taskNode);
        tasksBlock.append(cloneTask);

        const whatTask = cloneTask.querySelector('.to-do__task');
        whatTask.innerText = inputNode.value;
        inputNode.value = '';
    }

    if(!taskNode.classList.contains('_active')) {
        taskNode.classList.add('_active');

        const whatTask = taskNode.querySelector('.to-do__task');
        whatTask.innerText = inputNode.value;
        inputNode.value = '';
    } 
});

//Задача выполнена
tasksBlock.addEventListener('click', function(event){
    if(event.target.closest('.to-do__task-icon')){
        event.target.parentElement.classList.toggle('_completed');
    }
});

//Удаление выполненых задач
const clearAllBtn = document.querySelector('.to-do__clear-btn');

clearAllBtn.addEventListener('click', function(){
    const allTasks = document.querySelectorAll('.to-do__task-block');
    allTasks.forEach(function(item){
        if(item.classList.contains('_completed')){
            item.classList.remove('_active');
        }
    });
});

//Удаление одной задачи
tasksBlock.addEventListener('click', function(event){
    
    if(event.target.closest('.to-do__delete-block')){
        event.target.parentElement.classList.remove('_active');
    }
    if(event.target.closest('.to-do__delete-span')){
        event.target.parentElement.parentElement.classList.remove('_active');
    }
})