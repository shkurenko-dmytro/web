// Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.

// Пример вызовов:

// min(2, 5) == 2
// min(3, -1) == -1
// min(1, 1) == 1
'use strict';

let a = +prompt('Ввести число №1', 0);
let b = +prompt('Ввести число №2', 0);
function min(a, b){
    return (a < b) ? a : b;
}
alert(`Найменше з цих чисел: ${min(a, b)}`);