const output = document.querySelector('.js-output');
const incrementBtn = document.querySelector('.js-btn-inc');
const decrementBtn = document.querySelector('.js-btn-dec');
const resetBtn = document.querySelector('.js-btn-res');

output.textContent = 0;
let value = +output.textContent;
output.innerHTML = value;

incrementBtn.addEventListener('click',function(){
    output.innerHTML = ++value;
});
decrementBtn.addEventListener('click',function(){
    output.innerHTML = --value;
});
resetBtn.addEventListener('click',function(){
    value = 0;
    output.innerHTML = value;
});


