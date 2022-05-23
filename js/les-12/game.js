'use strict';

(() => {
  const FIGURES_ENG = ['rock', 'scissors', 'paper'];
  const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];

  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const getRandomFigureOfPC = () => {
    const randomInt = getRandomIntInclusive(1, 3);
    if (randomInt === 1) {
      return FIGURES_RUS[1];
    } else if (randomInt === 2) {
      return FIGURES_RUS[2];
    } else if (randomInt === 3) {
      return FIGURES_RUS[3];
    };
  };

  const getMessageFromUser = (message) => {
    let mes = message;
    if (FIGURES_RUS[0].includes(mes)) {
      return FIGURES_RUS[0];
    } else if (FIGURES_RUS[1].includes(mes)) {
      return FIGURES_RUS[1];
    } else if (FIGURES_RUS[2].includes(mes)) {
      return FIGURES_RUS[2];
    }
  };

  const getSign = (message) => {
    if (message===FIGURES_RUS[0]) {
      return 'к';
    } else if (message===FIGURES_RUS[1]) {
      return 'н';
    } else if (message===FIGURES_RUS[2]) {
      return 'б';
    }
  };

  const resultMessage = () => {
    const result = confirm('Еще?');
    if (result===true) {
      return true;
    } else {
      return false;
    }
  };

  const getSignEng = (message) => {
    if (message===FIGURES_RUS[0]) {
      return 'r';
    } else if (message===FIGURES_ENG[1]) {
      return 's';
    } else if (message===FIGURES_ENG[2]) {
      return 'p';
    }
  };

  const getRandomFigureOfPCEng = () => {
    const randomInt = getRandomIntInclusive(1, 3);
    if (randomInt === 1) {
      return FIGURES_ENG[1];
    } else if (randomInt === 2) {
      return FIGURES_ENG[2];
    } else if (randomInt === 3) {
      return FIGURES_ENG[3];
    };
  };

  const getMessageFromUserEng = (message) => {
    let mes = message;
    if (FIGURES_ENG[0].includes(mes)) {
      return FIGURES_ENG[0];
    } else if (FIGURES_ENG[1].includes(mes)) {
      return FIGURES_ENG[1];
    } else if (FIGURES_ENG[2].includes(mes)) {
      return FIGURES_ENG[2];
    }
  };

  const resultMessageEng = () => {
    const result = confirm('More?');
    if (result===true) {
      return true;
    } else {
      return false;
    }
  };

  const game = (language) => {
    const result = {
      player: 0,
      computer: 0,
    };
    const lang = language === 'EN' || language === 'ENG' ? FIGURES_ENG : FIGURES_RUS;

    return function start() {
      if (lang === FIGURES_ENG) {
        const message = prompt('rock, scissors, paper?');
        const messagePC = getRandomFigureOfPCEng();
        const messageUser = getMessageFromUserEng(message);

        if (messageUser===messagePC) {
          alert('PC: ' + messagePC + '\n' + 'You: ' + messageUser + '\ndraw');
          console.log(getSignEng(messagePC) + ' ' + getSignEng(messageUser));
          result.computer+=1;
          result.player+=1;
          if (resultMessageEng()) {
            start();
          } else {
            alert('Result:\nPC:' + result.computer + '\n' + 'You:' + result.player);
          }
        } else if ((messageUser==='rock' && messagePC==='scissors') || (messageUser==='scissors' && messagePC==='paper') || (messageUser==='paper' && messagePC==='rock')) {
          alert('PC: ' + messagePC + '\n' + 'You: ' + messageUser + '\ndraw');
          console.log(getSignEng(messagePC) + ' ' + getSignEng(messageUser));
          result.player+=1;
          if (resultMessageEng()) {
            start();
          } else {
            alert('Result:\nPC:' + result.computer + '\n' + 'You:' + result.player);
          }
        } else if ((messagePC==='rock' && messageUser==='scissors') || (messagePC==='scissors' && messageUser==='paper') || (messagePC==='paper' && messageUser==='rock')) {
          alert('PC: ' + messagePC + '\n' + 'You: ' + messageUser + '\ndraw');
          console.log(getSign(messagePC) + ' ' + getSign(messageUser));
          result.computer+=1;
          if (resultMessageEng()) {
            start();
          } else {
            alert('Result:\nPC:' + result.computer + '\n' + 'You:' + result.player);
          }
        }
      } else {
        const message = prompt('камень, ножницы, бумага?');
        const messagePC = getRandomFigureOfPC();
        const messageUser = getMessageFromUser(message);

        if (messageUser===messagePC) {
          alert('ПК: ' + messagePC + '\n' + 'Вы: ' + messageUser + '\nНичья');
          console.log(getSign(messagePC) + ' ' + getSign(messageUser));
          result.computer+=1;
          result.player+=1;
          if (resultMessage()) {
            start();
          } else {
            alert('Результат:\nПК:' + result.computer + '\n' + 'Вы:' + result.player);
          }
        } else if ((messageUser==='камень' && messagePC==='ножницы') || (messageUser==='ножницы' && messagePC==='бумага') || (messageUser==='бумага' && messagePC==='камень')) {
          alert('ПК: ' + messagePC + '\n' + 'Вы: ' + messageUser + '\nВы победили');
          console.log(getSign(messagePC) + ' ' + getSign(messageUser));
          result.player+=1;
          if (resultMessage()) {
            start();
          } else {
            alert('Результат:\nПК:' + result.computer + '\n' + 'Вы:' + result.player);
          }
        } else if ((messagePC==='камень' && messageUser==='ножницы') || (messagePC==='ножницы' && messageUser==='бумага') || (messagePC==='бумага' && messageUser==='камень')) {
          alert('ПК: ' + messagePC + '\n' + 'Вы: ' + messageUser + '\nПК победил');
          console.log(getSign(messagePC) + ' ' + getSign(messageUser));
          result.computer+=1;
          if (resultMessage()) {
            start();
          } else {
            alert('Результат:\nПК:' + result.computer + '\n' + 'Вы:' + result.player);
          }
        }
      }
    }

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
