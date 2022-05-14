'use strict';
const getRandomInt = (n, m) => {
  return Math.floor(Math.random() * (m - n) + n);
}

const writeNumber = () => {
  let userNumber = prompt("enter", 50);
  if (!Number.isNaN(userNumber)) {
    console.log('userNumber', userNumber);
    return userNumber;
  } else {
    console.log(`please try next`);
  }
}

let randomNumber = getRandomInt(1,100);
console.log('randomNumber', randomNumber);

const game = () => {
  let number = writeNumber();
  console.log('number', number);

  if (number > randomNumber) {
    console.log('Меньше!');
    game();
  } else if (number < randomNumber) {
    console.log('Больше!');
    game();
  } else if (number == randomNumber) {
    console.log('Правильно');
  }
}

game();
