const btn = document.querySelector('.js-btn');
const btn2 = document.querySelector('.js-btn2');
const btn3 = document.querySelector('.js-btn3');
const form = document.querySelector('.js-form');

btn.addEventListener('click', function(){
    createForm(form);
})

btn2.addEventListener('click', function(){
    switchForm(form);
})

btn3.addEventListener('click', function(){
    deleteForm(form);
})