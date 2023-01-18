const INITIAL_COUNTER = 0;

const counter = createCounter(INITIAL_COUNTER);
const view = createView({
    onIncrement: handleIncrement,
    onDecrement: handleDecrement,
    onReset: handleReset
});

view.render({
    counter: counter.get()
});

function handleIncrement(){
    counter.increment();
    view.render({
        counter: counter.get()
    });
};
function handleDecrement(){
    counter.decrement();
    view.render({
        counter: counter.get()
    });
};
function handleReset(){
    counter.reset();
    view.render({
        counter: counter.get()
    });
};