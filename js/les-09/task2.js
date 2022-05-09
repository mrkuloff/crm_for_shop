'use strict';
/* 1 задача в прошлом уроке*/

const countRepeat = (array) => {
  console.log(array.length);

  const mySet = new Set();
  for (const numb of array) {
    mySet.add(numb);
  }

  return mySet.size;
};

const array = [1, 2, 2];

console.log(countRepeat(array));

/*
*
*
* System.out.println(array.length); // 12

Set<Integer> mySet = new HashSet<>();
for (int x : array) {
    mySet.add(x);
}
System.out.println(mySet.size()); */
