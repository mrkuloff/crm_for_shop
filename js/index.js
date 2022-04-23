'use strict';

const nameGood = prompt('Наименование товара', "defaultName");
const amountGood = parseInt(prompt('Количество товара' , 0), 10);
const categoryGood = prompt('Категория товара' , 'defaultCategory');
const priceGood = parseInt(prompt('Цена товара' , 0), 10);

if (Number.isInteger(amountGood) && Number.isInteger(priceGood)) {
  console.log("Введено число");
  console.log(`На складе ${amountGood} единицы товара "${nameGood}" на сумму ${priceGood} деревянных"`);
} else {
  console.log("Вы ввели некорректные данные");
}
