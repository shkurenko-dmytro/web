const form = document.querySelector('#form');
const taskInput = document.querySelector('#taskInput');
const taskList = document.querySelector('#task-list');
const emptyList = document.querySelector('#empty-list');

form.addEventListener('submit', addTask);

taskList.addEventListener('click', deleteTask);

taskList.addEventListener('click', doneTask);

function addTask(event) {
    event.preventDefault();

    const taskText = taskInput.value;

    const taskHTML = `
                <li class="tasks__item item">
                    <p class="item__text">${taskText}</p>
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

    taskInput.value = '';
    taskInput.focus();

    if (taskList.children.length > 1) {
        emptyList.classList.add('none');
    }
};

function deleteTask(event) {
    if(event.target.dataset.action !== 'delete') return;

    const itemBlock = event.target.closest('.item');
    itemBlock.remove();

    if (taskList.children.length === 1) {
        emptyList.classList.remove('none');
    }
}

function doneTask(event) {
    if(event.target.dataset.action !== 'done') return;

    const itemBlock = event.target.closest('.item');
    const itemText = itemBlock.querySelector('.item__text');

    itemText.classList.toggle('done');
}

