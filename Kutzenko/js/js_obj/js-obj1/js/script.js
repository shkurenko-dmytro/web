// У нас есть объект, в котором хранятся зарплаты нашей команды:

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }
// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.

// Если объект salaries пуст, то результат должен быть 0.

'use strict';

function whatSum(obj){
    let sumFunc = 0;
    for (let key in obj){
        sumFunc+= obj[key];
    }
    return sumFunc;
}

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
let salaries2 = {};

let sum = whatSum(salaries);
let sum2 = whatSum(salaries2);

alert(sum);
alert(sum2);