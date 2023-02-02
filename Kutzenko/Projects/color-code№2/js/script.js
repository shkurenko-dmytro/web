const CODEOFCOLOR = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F'
];

const outputCode = document.querySelector('.output__text');
const btn = document.querySelector('.btn');

outputCode.innerText = 'FFFFFF';
document.body.style.backgroundColor = '#FFFFFF';

btn.addEventListener('click', function(){
    outputCode.innerText = getRandomValue(CODEOFCOLOR);
    document.body.style.backgroundColor = '#' + getRandomValue(CODEOFCOLOR);
})

document.addEventListener('keydown', function(event){
    if(event.code === 'Enter'){
        outputCode.innerText = getRandomValue(CODEOFCOLOR);
        document.body.style.backgroundColor = '#' + getRandomValue(CODEOFCOLOR);
        btn.classList.add('_active');
    }
})
document.addEventListener('keyup', function(event){
    if(event.code === 'Enter'){
        btn.classList.remove('_active');
    }
})

function getRandomValue(array){
    let code = '';

    for(let i = 0; i < 6; i++){
        let randomIndex = Math.floor(Math.random() * array.length);

        code += array[randomIndex];
    }

    return code;
}