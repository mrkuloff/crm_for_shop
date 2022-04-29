'use strict';
/*
Третья задача:

Скопируйте код task02.js в task03.js

Добавьте 4-ый опциональный параметр у функции


 4-ый опциональный параметр это строка:

если функция получает 'even', то функция возвращает массив чётных чисел
если функция получает 'odd', то функция возвращает массив нечётных чисел
 */

const randomArray = (length, n, m, option) => {
  const newArray = [length];
  for (let i=0; i<length; i++) {
    newArray.push(getRandomInt(n, m));
  }
  let array;

  if (option==="even") {
    array = newArray.filter(item => !(item%2));
  } else if (option==="odd") {
    array = newArray.filter(item => item%2);
  }


  return array;
}

const getRandomInt = (n, m) => {
  return Math.floor(Math.random() * (m - n) + n);
}

console.log(`нечетные`);
console.log(randomArray(20, 0, 100, "odd"));
console.log(`четные`);
console.log(randomArray(20, 0, 100, "even"));

