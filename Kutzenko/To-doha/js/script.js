const form = document.querySelector('#form');
const taskInput = document.querySelector('#taskInput');
const taskList = document.querySelector('#task-list');
const emptyList = document.querySelector('#empty-list');
const btnClearDone = document.querySelector('#clear-done-btn');

let tasks = [];

if(localStorage.getItem('tasks')){
    tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks.forEach((task) => renderTask(task));
}

checkEmptyList();

form.addEventListener('submit', addTask);
taskList.addEventListener('click', deleteTask);
taskList.addEventListener('click', doneTask);
btnClearDone.addEventListener('click', clearDone);

function addTask(event) {
    event.preventDefault();

    const taskText = taskInput.value;

    const newTask = {
        id: Date.now(),
        text: taskText,
        done: false
    };

    tasks.push(newTask);

    saveToLS();

    renderTask(newTask);

    taskInput.value = '';
    taskInput.focus();

    checkEmptyList();
};

function deleteTask(event) {
    if(event.target.dataset.action !== 'delete') return;

    const itemBlock = event.target.closest('.item');

    const id = Number(itemBlock.id);

    tasks = tasks.filter((task) => task.id !== id);

    saveToLS()

    itemBlock.remove();

    checkEmptyList();
}

function doneTask(event) {
    if(event.target.dataset.action !== 'done') return;

    const itemBlock = event.target.closest('.item');

    const id = Number(itemBlock.id);
    const task = tasks.find((task) => task.id === id);
    task.done = !task.done;

    saveToLS()

    const itemText = itemBlock.querySelector('.item__text');
    itemText.classList.toggle('done');
}

function checkEmptyList(){
    if (tasks.length === 0) {
        const emptyListHTML = `
        <li id="empty-list" class="tasks__empty-list empty">
            <div class="empty__image"></div>
            <p class="empty__text">Наразі задач немає</p>
        </li>`
        
        taskList.insertAdjacentHTML('afterbegin', emptyListHTML);
    }

    if (tasks.length > 0) {
        const emptyListEl = document.querySelector('#empty-list');
        emptyListEl ? emptyListEl.remove() : null;
    }
}

function saveToLS(){
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function renderTask(task){
    const cssClass = task.done ? 'item__text done' : 'item__text' ;

    const taskHTML = `
                <li id='${task.id}' class="tasks__item item">
                    <p class="${cssClass}">${task.text}</p>
                    <div class="item__buttons">
                        <button data-action="done" class="item__button item__button-1">
                            <img class="item__icon" src="./img/done.png" alt="">
                        </button>
                        <button data-action="delete" class="item__button item__button-2">
                            <img class="item__icon" src="./img/delete.png" alt="">
                        </button>
                    </div>
                </li>`;

    taskList.insertAdjacentHTML('beforeend', taskHTML);
}

function clearDone(){
    tasks = tasks.filter(task => task.done === false);

    saveToLS();

    const elements = document.querySelectorAll('.item__text');
    elements.forEach(function(elem){
        if(elem.classList.contains('done')) elem.closest('.item').remove();
    })
}

