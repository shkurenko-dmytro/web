const btn = document.querySelector('.js-btn');
const inputValue = document.querySelector('.js-value');
const inCurrency = document.querySelector('.js-in-currency');
const outCurrency = document.querySelector('.js-out-currency');
const resultNode = document.querySelector('.js-result');

btn.addEventListener('click', function(){
    const valueNode = inputValue.value;
    const inCurrencyValue = inCurrency.value;
    const outCurrencyValue = outCurrency.value;

    let result = whatValue(valueNode, inCurrencyValue, outCurrencyValue);
    resultNode.innerHTML = result;
})