"use strict";

const getAverageValue = (array) => {

  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  return Math.floor(sum/array.length);
}

const allCashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];

console.log(getAverageValue(allCashbox));
