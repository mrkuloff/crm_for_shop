"use strict";
/*
Задание II - обязательное (+1 балл)

Создайте файл game01.js

Написать простой игровой бот, который умеет следующее:

  Загадывает число от 1 до 100;
предлагает пользователю ввести свой вариант отгадки;
если пользовательское число больше, чем загаданное, то бот выводит “Меньше!” и предлагает ввести новый вариант;
если пользовательское число меньше, чем загаданное, то бот выводит “Больше!” и предлагает ввести новый вариант;
если пользователь вводит правильное число, то бот выводит “Правильно!”;
если пользователь ввел не число, то выводит “Введи число!”;
если пользователь нажимает “Отмена”, то игра заканчивается.
*/

const getRandomInt = (n, m) => {
  return Math.floor(Math.random() * (m - n) + n);
}

const writeNumber = () => {
  let userNumber = prompt("enter", 50);
  if (Number.isInteger(userNumber)) {
    return userNumber;
  } else {
    console.log(`please try next`);
  }
}


const game = () => {
  let randomNumber = getRandomInt();
  let number = writeNumber();

  while (number != randomNumber) {
    if (number > randomNumber) {
      console.log('Меньше!');
      number = writeNumber();
    } else if (number < randomNumber) {
      console.log('Больше!');
      number = writeNumber();
    } else if (number == randomNumber) {
      console.log('Правильно');
    }
  }
}

console.log(game());

