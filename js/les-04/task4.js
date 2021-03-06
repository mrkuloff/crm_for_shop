'use strict';
/*
Напишите функцию calculate(), которая вычисляет стоимость корзины товаров после применения всех акций и скидок.
В качестве аргументов функция принимает 3 параметра:
Общая сумма корзины
Количество товаров в корзине
Промокод
Правила и порядок (порядок важен!) начисления скидок:
Если товаров больше 10, то ко всей сумме применяется скидка 3% ко всей сумме;
При сумме, превышающей 30 000, применяется скидка 15% к сумме превышения
Если промокод равен "METHED", то скидка 10%
Если промокод равен "G3H2Z1", то скидка 500 рублей, но только если сумма  корзины после предыдущих скидок превышает 2000р

Порядок применения скидок должен соблюдаться
 */

const calculate = (sumGoods, countGoods, promocode) => {
  let allSum = sumGoods;

  if (countGoods > 10) {
    allSum -= allSum*0.3;
  }

  if (allSum > 30000) {
    allSum -= allSum*0.15;
  }

  if (promocode==="METHED") {
    allSum -= allSum*0.1;
  } else if ((promocode==="G3H2Z1") && (allSum > 2000)) {
    allSum -= 500;
  }

  return allSum;
};

console.log(calculate(35000, 12, "METHED"))
