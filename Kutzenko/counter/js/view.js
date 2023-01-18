function createView({
    onIncrement,
    onDecrement,
    onReset
}){
    const counterNode = document.querySelector('.js-counter');
    const incrementBtnNode = document.querySelector('.js-increment-btn');
    const decrementBtnNode = document.querySelector('.js-decrement-btn');
    const resetBtnNode = document.querySelector('.js-reset-btn');

    incrementBtnNode.addEventListener('click', onIncrement);
    decrementBtnNode.addEventListener('click', onDecrement);
    resetBtnNode.addEventListener('click', onReset);
    
    return {
        render({counter}){
            counterNode.innerHTML = counter;
        }
    }
}