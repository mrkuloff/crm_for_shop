"use strict";

const isPrime = (a) => {
  if (a > 1) {
    for (let i=2; i < a; i++) {
      if (a % i === 0){
        return false;
      }
      return true;
    }
  } else {
    return false;
  }


  return false;
};

console.log(isPrime(151));
