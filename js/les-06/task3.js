"use strict";

const addPrefix = (array, parametr) => {
  const newArray = [...array];
  for (let i=0; i < newArray.length; i++) {
    newArray[i] = parametr + ' ' + newArray[i];
  }

  return newArray;
}

const names= ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];

console.log(addPrefix(names, `Mr`));
