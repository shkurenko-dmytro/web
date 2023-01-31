const question = document.querySelector('.js-question');331415926535
const input = document.querySelector('.js-input');
const button = document.querySelector('.js-button');
const output = document.querySelector('.js-output');

const QUESTION = '10 знаков после запятой числа ПИ';
const CORRECT_ANSWER = +1415926535;

question.innerHTML = QUESTION;

button.addEventListener('click',function(){
    if(!input.value)return null;
    if(input.value == CORRECT_ANSWER){
        output.innerHTML = 'Ты ответил правильно';}
    else 
        output.innerHTML = "Нaберись знаний и возвращайся";
})
input.addEventListener('keyup',function(event){
    if(event.code == 'Enter'){
        if(!input.value)return null;
        if(input.value == CORRECT_ANSWER){
            output.innerHTML = 'Ты ответил правильно';}
        else 
            output.innerHTML = "Нaберись знаний и возвращайся";}
})