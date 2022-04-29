'use strict';

/*
Вторая задача:

Скопируйте код task01.js в task02.js

Продолжаем работать с предыдущей функцией

Функция принимает еще два параметра n и m

Числа m и n формируют диапазон, в пределах которого должно сгенерироваться числа для массива
m и n включительно

Учтите, что n и m могут быть отрицательными, а также может быть n > m или n < m.

 */

const randomArray = (length, n, m) => {
  const newArray = [length];
  for (let i=0; i<length; i++) {
    newArray.push(getRandomInt(n, m));
  }
  return newArray;
}

const getRandomInt = (n, m) => {
  return Math.floor(Math.random() * (m - n) + n);
}

console.log(randomArray(5, -5, 10));
