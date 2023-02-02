const btnTodo = document.querySelector('.to-do__text-btn');
const taskNode = document.querySelector('.to-do__task-block');
const tasksBlock = document.querySelector('.to-do__tasks');
const inputNode = document.querySelector('.to-do__input');

//Клонирование блока
function cloneBlock(block) {
    const cloneTask = block.cloneNode(true);
    cloneTask.classList.remove('_completed');

    return cloneTask;
};

//Добавление задачи
function getTask(){
    if(taskNode.classList.contains('_active')){
        const cloneTask = cloneBlock(taskNode);
        tasksBlock.prepend(cloneTask);

        const whatTask = cloneTask.querySelector('.to-do__task');
        whatTask.innerText = inputNode.value;
        inputNode.value = '';
    }

    if(!taskNode.classList.contains('_active')) {
        taskNode.classList.remove('_completed');
        taskNode.classList.add('_active');
        
        const whatTask = taskNode.querySelector('.to-do__task');
        whatTask.innerText = inputNode.value;
        inputNode.value = '';
    }
}

btnTodo.addEventListener('click', getTask);

document.addEventListener('keydown', function(event){
    if(event.code === 'Enter'){
        getTask();
    }
})

//Задача выполнена
tasksBlock.addEventListener('click', function(event){
    if(event.target.closest('.to-do__task-icon')){
        event.target.parentElement.classList.toggle('_completed');
    }
});

//Удаление выполненых задач
const clearAllBtn = document.querySelector('.to-do__clear-btn');

clearAllBtn.addEventListener('click', function(){
    const allCompletedTasks = document.querySelectorAll('.to-do__task-block');
    allCompletedTasks.forEach(function(item){
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

//Удаление всех задач
const deleteAllBtn = document.querySelector('.to-do__clear-all-btn');

deleteAllBtn.addEventListener('click', function(){
    const allTasks = document.querySelectorAll('.to-do__task-block');
    allTasks.forEach(item => item.classList.remove('_active'));
})