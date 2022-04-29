/*
Четвертая задача:

Создайте файл task04.js

Необходимо написать функцию, которая принимает 2 параметра n и m

И возвращает массив с високосными годами в диапазоне между n и m

Алгоритм определения високосного года следует найти в интернете самостоятельно или спросите у куратора

Учтите, что n и m могут быть отрицательными, а также может быть n > m или n < m.
 */

'use strict';

const years = (firstYear, secondYear) => {
  const array = new Array(secondYear-firstYear);

  if (secondYear < firstYear) {
    for (let i = secondYear; i <= firstYear; i++) {
      if (checkLeapYear(i)) {
        array.push(i)
      }
    }
  } else if (firstYear < secondYear) {
    for (let i = firstYear; i <= secondYear; i++) {
      if (checkLeapYear(i)) {
        array.push(i)
      }
    }
  }

  return array;
}

const checkLeapYear = (year) => {
  if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
    return true;
  } else {
    return false;
  }
}

console.log(years(1950, 2022));
