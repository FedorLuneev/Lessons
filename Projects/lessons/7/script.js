"use strict";


//alert('Hellow'); //сообщение пользователю

//спрашиваем пользователя да/нет булиновое значение
//const resalt = confirm("ты тут?");
//console.log(resalt);

//const answer = +prompt("вам у же есть 18", "да есть 18"); // если добавить оператор +, то значение будет записано числовое
//console.log(typeof(answer));   //оператор typeof показывает какой тип данных у нас в переменной -  в данном случае строка string

//Важно, любая инфомрация которая приходит от пользователя будет в виде строк

//console.log(answer + 5);

//создадим пустой массив

//const answers = [];
//answers[0] = prompt('как вас зовут?', '');
//answers[1] = +prompt('сколько вам лет', '');
//answers[2] = +prompt('ваш рост', '');
//answers[3] = +prompt('ваш вес', '');
//console.log(answers);






const answers = {
//    name1:'ivan',
//    age:'18',
//   height:'22',
//  isMarried:true,

};



answers.name1 = prompt('как вас зовут?', '');
answers.age = +prompt('сколько вам лет', '');
answers.height = +prompt('ваш рост', '');
answers.isMarried = confirm('вы женаты', '');
document.write(answers.name1, answers.age, answers.isMarried);
console.log(answers);