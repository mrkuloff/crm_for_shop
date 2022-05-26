'use strict';

(() => {
  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const FIGURES_RUS = ['камень', 'ножницы', 'бумага', 'Компьютер: ', 'Игрок: ', 'Ничья', 'Победил игрок', 'Победил ПК', 'Продолжаем!!!!', 'Хотите еще сыграть?'];

  let count = 0;

  const getRandomFigureOfPC = (lang) => FIGURES_RUS[getRandomIntInclusive(0, 2)];

  const getMessageFromUser = (message) => FIGURES_RUS.find(item => item.includes(message));

  const getSign = (message) => {
    const word = getMessageFromUser(message);
    return word[0];
  };

  const resultMessage = () => confirm(FIGURES_RUS[8]);
  const resultMessageMarble = () => confirm(FIGURES_RUS[9]);

  const motion = (messagePC, messageUser, resultRPS) => {
    if (messageUser === messagePC) {
      alert(FIGURES_RUS[3] + messagePC + '\n' + FIGURES_RUS[4] + messageUser + '\n' + FIGURES_RUS[5]);
      console.log(getSign(messagePC) + ' ' + getSign(messageUser));
      resultRPS.computer += 1;
      resultRPS.player += 1;
      if (resultMessage(lang)) {
        RPS(resultRPS);
      } else (
        RPS(resultRPS)
      );
    } else if ((messagePC === FIGURES_RUS[0] && messageUser === FIGURES_RUS[1]) || (messagePC === FIGURES_RUS[1] && messageUser === FIGURES_RUS[2]) || (messagePC === FIGURES_RUS[2] && messageUser === FIGURES_RUS[0])) {
      alert(FIGURES_RUS[3] + messagePC + '\n' + FIGURES_RUS[4] + messageUser + '\n' + FIGURES_RUS[6]);
      console.log(getSign(messagePC) + ' ' + getSign(messageUser));
      resultRPS.player += 1;
      count++;
    } else {
      alert(FIGURES_RUS[3] + messagePC + '\n' + FIGURES_RUS[4] + messageUser + '\n' + FIGURES_RUS[7]);
      console.log(getSign(messagePC) + ' ' + getSign(messageUser));
      reresultRPSsult.computer += 1;
      count++;
    }
  };

  const RPS = (resultRPS) => {
    const message = prompt(FIGURES_RUS[0] + ',' + FIGURES_RUS[1] + ',' + FIGURES_RUS[2] + '?');
    const messagePC = getRandomFigureOfPC();
    const messageUser = getMessageFromUser(message);

    motion(messagePC, messageUser, resultRPS);
  }

  const game = (language) => {
    const result = {
      player: 5,
      bot: 5,
    };

    const resultRPS = {
      player: 0,
      computer: 0,
    };

    return function start() {
      RPS(resultRPS);

      if (count > 0) {
        if (resultRPS.player > resultRPS.computer) {
          const ball = prompt('Загадайте число');
          const ballUser = getRandomIntInclusive(1, result.player);
          const ballBot = getRandomIntInclusive(1, result.bot);
        } else {
          const ballBot = getRandomIntInclusive(1, result.bot);
          const ball = prompt('Загадайте число');
          const ballUser = getRandomIntInclusive(1, result.player);
        }
      }

      const evenOrOdd = prompt('Четное или нечетное число у бота');
      if (evenOrOdd % 2 === 0) {
        result.player+=ballBot;
      } else {
        result.player-=ballBot;
      }

      if (ballBot===ballUser) {
        result.bot+=ballBot;
        result.player-=ballBot;
      } else {
        result.bot-=ballBot;
        result.player+=ballBot;
      }

      if (result.bot===0 || result.player===0) {
        if (result.bot > result.player) {
          alert('Победил бот');
          if (resultMessageMarble(lang)) {
            start();
          } else {
            alert('Результат:\nПК:' + result.bot + '\n' + 'Вы:' + result.player);
          }
        } else {
          alert('Победил игрок');
        }
      } else {
        start();
      }
    };
  };

  window.Marble = game;
})();
