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

