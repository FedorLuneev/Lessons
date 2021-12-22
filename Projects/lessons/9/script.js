"use strict";

console.log('arr' + "-object");
console.log(4 + +"5"); // конактинация, знак + перед значение строки превращает строку в число
//+перед значение - это унарный плюс, т.к. использует один аргумент для своей работы

//Инкримент и дикримент
let incr = 10,
    decr = 10;

//incr++; //префиксный способ записи
//++incr; //постфиксный способ записи
//decr--;

//console.log(incr);
//console.log(decr);
//console.log(incr + decr);

// оператор ++ -это инкримент прибаляет единицу к существующему значению
// оператор -- -это декримент вычитает единицу из существующего значения

console.log(++incr);


// оператор % возвращает остаток при делении одного числа на другое

console.log(5%2); //вернется 1

// оператор = это присваивание
// оператор == это равно

console.log(2*4 == 8); //действительно ли 2умноженное на 4 равно 8, возвращается true
console.log(2*4 == '8'); //действительно ли 2умноженное на 4 равно 8, возвращается true, т.к. сравнение идет по значению, не по типу данных

//=== - строгое равенство
console.log(2*4 === '8'); //строгое сравнение, вернется false
// && - и
// || - или


const isCheked = true,
      isClose = false;

console.log(isCheked || isClose == true);
console.log(isCheked && !isClose);

// ! оператор отрицания