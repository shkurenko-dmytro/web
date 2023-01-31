const input = document.querySelector('.js-input');
const selectCurrency = document.querySelector('.js-select');
const outputResult = document.querySelector('.js-output');

input.addEventListener( 'input',function () {
    outputResult.innerHTML = (convert(selectCurrency.value,+input.value).toFixed(2));
});

selectCurrency.addEventListener( 'change',function () {
    outputResult.innerHTML = (convert(selectCurrency.value,+input.value).toFixed(2));
});
