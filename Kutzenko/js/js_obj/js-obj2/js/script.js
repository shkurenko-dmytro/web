// Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

// Например:

//    до вызова функции
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// multiplyNumeric(menu);

//    после вызова функции
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };
// Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует напрямую изменять объект.

// P.S. Используйте typeof для проверки, что значение свойства числовое.

'use strict';

function multiplyNumeric(obj){
    for (let key in obj){
        if(typeof(obj[key]) == 'number'){
            obj[key]*= 2;
        }
    }
}
function showObj(obj){
    for (let key in obj){
        alert(`${key}: ${obj[key]}`);
    }
}

let menu = {
    width: 200,
    height: 300,
    title: 'My menu'
}

showObj(menu);
multiplyNumeric(menu);
showObj(menu);