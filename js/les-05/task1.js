'use strict';

const degree = () => {
  for (let i=2; i<10;i++){
    console.log('------------------------');
    for (let j=0; j< 10;j++) {
      console.log(`${i} ^ ${j} = ${Math.pow(i, j)}`);
    }
  }
};

degree();
