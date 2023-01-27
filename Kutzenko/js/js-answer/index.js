const CORRECT_ANSWERS = ['Yes', 'yes', 'Да', 'да', 'Так', 'так', '+'];
const CORRECT_TEXT = 'Правильна відповідь!';
const ERROR_TEXT = 'Подумай краще'

const questionNode = document.querySelector('.js-question');
const inputNode = document.querySelector('.js-input');
const btn = document.querySelector('.js-button');
const outputNode = document.querySelector('.js-output');

function compare(){
    const answer = inputNode.value;
    let output = ERROR_TEXT;

    if(!answer) return;

    for(let item of CORRECT_ANSWERS){
        if(answer === item){
            output = CORRECT_TEXT;
        }else continue;
    }

    outputNode.innerText = output;
}

btn.addEventListener('click', function(){
    compare();
})

document.addEventListener('keydown', function(event){
    if(event.code === 'Enter'){
        compare();
    }
})