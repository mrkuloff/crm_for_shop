'use strict';
/*
Напишите функцию, которая принимает строку и возвращает модифицированную строку
Строка начинается с большой буквы, остальные буквы маленькие

Пример:  "привет Мир" => "Привет мир"
 */

const task2 = (stroke) => {

let words = stroke;
result = words.charAt(0).toUpperCase() + words.slice(1) ;

return result;
};

console.log(task2("привет мир"))
