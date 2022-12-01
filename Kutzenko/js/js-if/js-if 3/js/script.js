// Перепишите конструкцию if с использованием условного оператора '?':
// let result;
// if (a + b < 4) {
//   result = 'Мало';
// } else {
//   result = 'Много';
// }
'use strict'

let result;
let a = prompt('Введите число номер 1', 0);
let b = prompt('Введите число номер 2', 0);
result = (+a + +b < 4) ? 'Мало' : 'Много';
alert(result);