'use strict';

let nameGood; //Наименование товара
let amountGood; //Количество товара
let categoryGood; //Категория товара
let priceGood; //Цена товара


console.log(nameGood);

console.log(priceGood * amountGood);

nameGood = prompt('Наименование товара', "defaultName");
amountGood = parseInt(prompt('Количество товара' , '0'), 10);
categoryGood = prompt('Категория товара' , 'defaultCategory');
priceGood = parseInt(prompt('Цена товара' , '0'), 10);

console.log(`На складе ${amountGood} единицы товара "${nameGood}" на сумму ${priceGood} деревянных"`);


