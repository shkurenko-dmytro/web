// Напишите функцию randomInteger(min, max), которая генерирует случайное целое (integer) число от min до max (включительно).

// Любое число из интервала min..max должно появляться с одинаковой вероятностью.

// Пример работы функции:

// alert( randomInteger(1, 5) ); // 1
// alert( randomInteger(1, 5) ); // 3
// alert( randomInteger(1, 5) ); // 5

'use strict';

function randomInteger(min, max){
    return Math.floor(Math.random() * (max + 1 - min) + min);
}

alert('Випадкове число від 3 до 9:  ' + randomInteger(3, 9) );
alert('Випадкове число від 3 до 9:  ' + randomInteger(3, 9) );
alert('Випадкове число від 3 до 9:  ' + randomInteger(3, 9) );