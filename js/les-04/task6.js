"use strict";

const min = (a, b) => {
  return (a + b - Math.abs(a-b)) / 2;
}

console.log(min(0, 5));
