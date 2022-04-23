'use strict';

const rain = Math.round(Math.random() * 10);

if (rain===1) {
  console.log(`Пошел дождь. Возьми зонт!`);
} else if (rain===0) {
  console.log(`Дождя нет`)
}

//АРТУР, нужно набрать 265 баллов
const math = parseInt(prompt('Математика', 0), 10);
const russian = parseInt(prompt('Русский' , 0), 10);
const informatik = parseInt(prompt('Информатика' , 0), 10);

if (math + russian + informatik >= 265) {
  console.log(`Вы на бюджете! :D`);
} else {
  console.log(`Вы не набрали нужного количества баллов. Ваш балл ${math + russian + informatik}`);
}


//человек и банкомат
const money = prompt('Сколько вы хотите снять дерег?', "0");

if (money / 100 | 0) {
  console.log(`Запускается процесс снятия купюр`);
} else {
  console.log(`Мы не можем выдать сумму, введите другое число`);
}
