// Создайте объект calculator (калькулятор) с тремя методами:

// read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
// sum() (суммировать) возвращает сумму сохранённых значений.
// mul() (умножить) перемножает сохранённые значения и возвращает результат.
// let calculator = {
//   ... ваш код ...
// };

// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );

'use strict';

alert('Знаходження суми та добутку двох чисел');

let calculator = {
    read() {
        this.num1 = +prompt('Введіть перше число', 0);
        this.num2 = +prompt('Введіть друге число', 0);
    },
    sum() {
        return this.num1 + this.num2;
    },
    mul() {
        return this.num1 * this.num2;
    }
}

calculator.read();
alert(`Сума чисел: ${calculator.sum()}`);
alert(`Добуток чисел: ${calculator.mul()}`);