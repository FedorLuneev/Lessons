"use strict";

//интерполяция

const category = 'toys';
const category1 = 'toys1';
console.log('http://muspace.com/' + category + ''); //построение строки с использованием +
console.log(`http://muspace.com/${category}/${category1}`); // интерполяция

const user = "Ivan";
alert(`Привет, ${user}`);
