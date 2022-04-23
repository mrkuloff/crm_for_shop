'use strict';

const rain = Math.round(Math.random() * 10);

if (rain===1) {
  console.log(`Пошел дождь. Возьми зонт!`);
} else if (rain===0) {
  console.log(`Дождя нет`)
}
