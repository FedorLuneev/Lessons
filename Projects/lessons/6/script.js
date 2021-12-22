//Простые данные

//числа

let number = 5;
let number2 = 5.5;

console.log (4/0);
console.log ('string' * 9);

//строчки

const person = "Alex"; //ковычки любые '',"",``

//логический (булиновый) тип

const bool = true;
const bool2 = false;


//не существующих обьект и не имеет значение

console.log (somthing);

let und;
console.log (und);


//тип данных комплексные

//объект со свойствами
const obj = {
    name: "Ivan",
    age: 31,
    isMarried: true,
}; 

console.log( obj.name); //обращаемся к конкретному свойству обьекта
console.log( obj['name']); //равнозначная конструкция обращения к свойству обьекта, не забываем ставить '' для свойства в этом случае

//массив (отдельный тип обьекта)

let arr = ['fig.png', 'amk.jpg', 'apple.bmp', 6, true, 'ivan', [], {}]; //элементы размещены строго по порядку, можно также размещать любой тип данных
console.log (arr[4]); // в программировании нумерация начинается не с 1, а 0