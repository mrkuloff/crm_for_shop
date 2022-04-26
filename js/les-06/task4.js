"use strict";

const getAveragePriceGoods = ([...goods]) => {
  const [x, y] = goods;

  let countGoods = 0;
  let sumGoods = 0;

  for (let i=0; i < goods.length; i++) {
    countGoods += x;
  }

  for (let i=0; i < goods.length; i++) {
    sumGoods += y;
  }

  return (sumGoods / countGoods);
}

const allCashbox = [
  [12, 4500],
  [7, 3210],
  [4, 650],
  [3, 1250],
  [9, 7830],
  [1, 990],
  [6, 13900],
  [1, 370]
];

console.log(getAveragePriceGoods(allCashbox));
