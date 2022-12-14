// Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.

// Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка.

// Например:

// truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) = "Вот, что мне хотело…"

// truncate("Всем привет!", 20) = "Всем привет!"

'use strict';

function truncate(str, maxlength){
    if(str.length > maxlength){
        return str = str.slice(0, maxlength - 3) + '...';
    }else return str;
}

alert(truncate('Дмитро', 20));
alert(truncate('Дмитро не вміє грать у баскетбол', 20));