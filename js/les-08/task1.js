'use strict';
/*

Задание I (+1 балл)


Создайте файл cart.js, подключите к html-файлу

Создайте объект cart — корзина

Объект будет содержать следующие свойства:

items = пустой массив - это товары
totalPrice = 0 - общая стоимость корзины
count = 0 - количество товаров
и методы

getTotalPrice - получить общую стоимость товаров
add - добавить товар
increaseCount - увеличить количество товаров
calculateItemPrice - посчитать общую стоимость товаров
clear - очистить корзину
print - распечатать корзину


Далее описание каждого метода

getTotalPrice()

метод возвращает значение свойства totalPrice



calculateItemPrice()

пересчитывает стоимость всей корзины и записывает значение в totalPrice



increaseCount()

Принимает один параметр(число)

Увеличивает свойство count на это число



add()

Принимает три параметра:

название товара
цену товара
количество товара (опциональный параметр, по умолчанию 1 товар)
этот метод формирует объект из полученных параметров и добавляет его в свойство items

так же вызывает все необходимые методы чтобы свойства count и totalPrice были актуальные



clear()

Очищает полностью нашу корзину, возвращает все значения в изначальные



print()

Выводит в консоль JSON строку из массива items и на следующей строке выводит общую стоимость корзины







Для проверки работы функционала добавить 3 или более товаров в корзину



После вызвать метод print для вывода информации в консоль



 */

const cart = {
  items: [],
  totalPrice: `0`,
  count: `0`,

  get totalPrice() {
    return this.calculateItemPrice();
  },

  /*
  get calculateItemPrice() {
    return this.calculateItemPrice();
  }
   */

  add(name, price, count) {
  increaseCount(count);
  calculateItemPrice();

  item, {
      name: this.name,
      price: this.price,
      count: this.count,
  }

  return this.items.push(item);
  },

  increaseCount(number) {
    return this.count += number;
  },

  calculateItemPrice() {
  const length = this.items.length;
  const newCount = this.count;
  const newTotalPrice = length * newCount;
  return newTotalPrice;
  },

  clear() {
  return this.items.removeAllRanges() ;
  },

  print() {
  const aboutItems = JSON.stringify(this.items);
  console.log(`json: , ${aboutItems}`);
  console.log(`totalPrice: , ${getTotalPrice()}`);
  },
};


cart.add('Масло', 80, 2);
cart.add('Квас', 100, 3);
cart.add('Хлем', 45, 1);
cart.print();
