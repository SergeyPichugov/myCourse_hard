"use strict";

const num = 266219;

function multi(num) {
   let answer = 1;
   let tmp = 0;
      while (num ) {
         
         tmp = num % 10;
         num = (num - tmp) / 10;
         answer = answer * tmp; 
         
      } return answer;
} 

console.log(multi(266219));


const power = (multi(266219)) ** 3;
console.log('power: ', power);



console.log(power.toString().substring(0,2));

