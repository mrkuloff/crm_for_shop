'use strict';

(() => {
  const FIGURES_ENG = ['rock', 'scissors', 'paper', 'PC: ', 'User: ', 'DRAW', 'win USER', 'win PC', 'Else?'];
  const FIGURES_RUS = ['камень', 'ножницы', 'бумага', 'Компьютер: ', 'Игрок: ', 'Ничья', 'Победил игрок', 'Победил ПК', 'Еще?'];


  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const getRandomFigureOfPC = (lang) => lang[getRandomIntInclusive(0, 2)];

  const getMessageFromUser = (message, lang) => lang.find(item => item.includes(message));

  const getSign = (message, lang) => {
    const word = getMessageFromUser(message, lang);
    return word[0];
  };

  const resultMessage = (lang) => confirm(lang[8]);

  const motion = (messagePC, messageUser, lang, result) => {
    if (messageUser === messagePC) {
      alert(lang[3] + messagePC + '\n' + lang[4] + messageUser + '\n' + lang[5]);
      console.log(getSign(messagePC, lang) + ' ' + getSign(messageUser, lang));
      result.computer += 1;
      result.player += 1;
    } else if ((messagePC === lang[0] && messageUser === lang[1]) || (messagePC === lang[1] && messageUser === lang[2]) || (messagePC === lang[2] && messageUser === lang[0])) {
      alert(lang[3] + messagePC + '\n' + lang[4] + messageUser + '\n' + lang[6]);
      console.log(getSign(messagePC, lang) + ' ' + getSign(messageUser, lang));
      result.player += 1;
    } else {
      alert(lang[3] + messagePC + '\n' + lang[4] + messageUser + '\n' + lang[7]);
      console.log(getSign(messagePC, lang) + ' ' + getSign(messageUser, lang));
      result.computer += 1;
    }
  };

  const game = (language) => {
    const result = {
      player: 0,
      computer: 0,
    };
    const lang = language === 'EN' || language === 'ENG' ? FIGURES_ENG : FIGURES_RUS;

    return function start() {
      const message = prompt(lang[0] + ',' + lang[1] + ',' + lang[2] + '?');
      const messagePC = getRandomFigureOfPC(lang);
      const messageUser = getMessageFromUser(message, lang);

      motion(messagePC, messageUser, lang, result);
      if (resultMessage(lang)) {
        start();
      } else {
        alert('Результат:\nПК:' + result.computer + '\n' + 'Вы:' + result.player);
      }
    };
  };

  window.RPS = game;
})();

/*

input ->
Компьютер: (что он выбрал)
Пользователь: (что вы выбрали)
Результат  игры: (ничья или пк, или вы победили)

После каждой игры в чат выводить `б б`
После -> log(ЕЩе?) если "ок", то продолжаем. Если "Отмена", то выводится:
Результат ПК: кол-во,
          Игрок: кол-во;


Необходимо реализовать функционал игры "Камень ножницы бумага"

Функционал продемонстрирован видео в уроке!


Нужно использовать 2 файла:

game.js, котором будет происходить действия игры
script.js в котором эта игра будет запускаться


Пригодится функция getRandomIntInclusive, чтобы помочь сделать ход компьютеру.


Как будет написана программа внутри IIFE модуля, решать только вам, важно выполнить определенные требования


1) В функции game() реализуется сам механизм игры.

2) Результат поединка и выбранный язык должны храниться в замыкании и реализация данной игры должна быть сделана с помощью рекурсии без единого цикла


Если пользователь нажимает "отмена" переспрашиваем его "точно ли он хочет выйти?"

Если да то выводится результат всех игр (сколько очков у пользователя и у компьютера)

Если пользователь передумал выходить, то игра продолжается дальше сохраняя прежние очки


 */
