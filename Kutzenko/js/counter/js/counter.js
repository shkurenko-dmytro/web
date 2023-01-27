function createCounter(initialCounter){
    return{
        counter: initialCounter,
        get(){
            return this.counter;
        },
        increment(){
            return this.counter++;
        },
        decrement(){
            return this.counter--;
        },
        reset(){
            return this.counter = initialCounter;
        }
    };
};