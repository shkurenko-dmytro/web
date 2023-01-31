const OPERATIONS = {
    sum: '+',
    substract: '-',
    multiply: '*',
    division: '/',
    mode: '%',
};
function calculate(a,b,operation){
    let result = null;
    switch (operation) {
        case OPERATIONS.sum:
            result=sum(a,b,operation);
            break;
        case OPERATIONS.substract:
            result=substract(a,b,operation);
            break;
        case OPERATIONS.multiply:
            result=multiply(a,b,operation);
            break;
        case OPERATIONS.division:
            result=division(a,b,operation);
            break;
        case OPERATIONS.mode:
            result=mode(a,b,operation);
            break;
    
        default:
            break;
    }
    return result;
};
