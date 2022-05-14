'use strict';

const rectangle = {
  width: '0',
  height: '0',

  set setWidth(value) {
    if (Number.isInteger(value)){
    return this.width+=value;
    } else {
      return 0;
    }
  },

  set setHeight(value) {
    if (Number.isInteger(value)){
      return this.height+=value;
    } else {
      return 0;
    }
  },

  get perimetr() {
    return 2*(this.width+this.height) + "см";
  },

  get square() {
    return this.width*this.height + "см";
  },
};

rectangle.setWidth = 5;
rectangle.setHeight = 5;
console.log(rectangle.perimetr);
console.log(rectangle.square);
