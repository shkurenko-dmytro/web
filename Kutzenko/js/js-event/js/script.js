const inputSearch = document.querySelector('.js-input');
const inputIcon = document.querySelector('.js-icon');
const inputBlock = document.querySelector('.js-block');
const counterBlock = document.querySelector('.js-block-counter');
const counter = document.querySelector('.js-counter');

document.addEventListener('click', function(event){
    if(event.target.closest('.js-icon')){
        inputBlock.classList.toggle('_active');
    }
    if(!event.target.closest('.js-block')){
        inputBlock.classList.remove('_active');
    }
})

document.addEventListener('keydown', function(event){
    if(event.code === 'Escape'){
        inputBlock.classList.remove('_active');
    }
})

inputSearch.addEventListener('keyup', function(){
    counter.innerHTML = inputSearch.value.length;
})
inputSearch.addEventListener('keydown', function(event){
    if(event.repeat) counter.innerHTML = inputSearch.value.length;
})