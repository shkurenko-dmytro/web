const inputA = document.querySelector('.js-input-number-a');
const inputB = document.querySelector('.js-input-number-b');
const operation = document.querySelector('.js-select-operation');
const result = document.querySelector('.js-output-result')

inputA,inputB = addEventListener('input',function op() {
    const a = +inputA.value;
    const b = +inputB.value;
    const operationValue = operation.value;
    
    const res = calculate(a,b,operationValue);
    if ( isNaN(res) || res == Infinity){
        result.innerHTML = "Невозможно выполнить эту операцию";
    }
    else
        result.innerHTML = res;
});