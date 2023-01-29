const CODEOFCOLOR = [
    '#ffffff',
    '#0000ff',
    '#ff0000',
    '#008000',
    '#00ffff',
    '#ff00ff',
    '#808080',
    '#00ff00',
    '#800000',
    '#000080',
    '#808000',
    '#800080',
    '#c0c0c0',
    '#008080',
    '#ffff00',
    '#000000'
];

const outputCode = document.querySelector('.output__text');
const btn = document.querySelector('.btn');

outputCode.innerText = CODEOFCOLOR[0];
document.body.style.backgroundColor = CODEOFCOLOR[0];

btn.addEventListener('click', function(){
    let randomCode = getRandomValue(CODEOFCOLOR);
    while(outputCode.innerText === randomCode){
        randomCode = getRandomValue(CODEOFCOLOR);
    }
    outputCode.innerText = randomCode;
    document.body.style.backgroundColor = randomCode;
})

document.addEventListener('keydown', function(event){
    if(event.code === 'Enter'){
        let randomCode = getRandomValue(CODEOFCOLOR);
        while(outputCode.innerText === randomCode){
            randomCode = getRandomValue(CODEOFCOLOR);
        }
        outputCode.innerText = randomCode;
        document.body.style.backgroundColor = randomCode;
        btn.classList.add('_active');
    }
})
document.addEventListener('keyup', function(event){
    if(event.code === 'Enter'){
        btn.classList.remove('_active');
    }
})

function getRandomValue(array){
    const randomIndex = Math.floor(Math.random() * array.length);
    const randomValue = array[randomIndex];

    return randomValue;
}