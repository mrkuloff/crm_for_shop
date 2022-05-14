/*
Задача #2

Напишите рекурсивную функцию, которая принимает один параметр массив,  генерирует целое число от 0 до 10 включительно и добавляет его в массив.

Каждый раз после добавления нового числа проверяет сумму элементов массива, если она меньше 50 запускается снова передавая себе массив.
Если сумма больше 50-ти, то функция возвращает этот массив.


 */

'use strict';

let getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let recurs = (array) => {
  let number = getRandomIntInclusive(0,10);
  array.push(number);
  if (array.length < 50) {
    recurs(array);
  } else {
    return array;
  }
}

const array = [];

recurs(array);
