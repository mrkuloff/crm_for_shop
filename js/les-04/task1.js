'use strict';

/*
Напишите функцию конвертер, которая на вход принимает стоимость покупки в евро и выводит результат в рублях

1 евро = 1.2 доллара,

1 доллар = 73 рубля.
 */

let task1 = (cost) => {
  let euro = cost;

  return euro * 87.6;
};

let task1_1 = (cost) => {
  let euro = cost;

  let dollar = euro * 1.2;

  let rubl = dollar * 73;

  return rubl;
};

console.log(task1(1));
console.log(task1_1(1));
