'use strict';
/*
Перевернуть строки
 */

const task3 = (str) => {
  let string = str;
  return string.split("").reverse().join("");
}

console.log(task3("Привет мир ура"));
