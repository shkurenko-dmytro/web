// Следующая функция возвращает true, если параметр age больше 18.

// В ином случае она задаёт вопрос confirm и возвращает его результат.

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Родители разрешили?');
//   }
// }
// Перепишите функцию, чтобы она делала то же самое, но без if, в одну строку.

// Сделайте два варианта функции checkAge:

// Используя оператор ?
// Используя оператор ||
'use strict';

let age = prompt('Скільки вам років?', 18);
function checkAge(age){
    return (age > 18) ? true : confirm('Батьки дозволили?');
}
alert(checkAge(age));

age = prompt('Введіть ще раз', 18);
function checkAge2(age){
    return (age > 18) || confirm('Батьки точно дозволили?');
}
alert(checkAge2(age));