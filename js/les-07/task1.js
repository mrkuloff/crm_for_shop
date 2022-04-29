"use strict";

/*
Первая задача:
Напишите функцию генератор  массива случайных чисел в файле task01.js

Функция принимает один обязательный параметр это количество элементов в массиве
И возвращает массив со случайными числами от одного до 100 включительно;
*/

const randomArray = (length) => {
  const newArray = [length];
  for (let i=0; i<length; i++) {
    newArray.push(getRandomInt());
  }
  return newArray;
}

const getRandomInt = () => {
  return Math.floor(Math.random() * 100);
}

console.log(randomArray(5));


