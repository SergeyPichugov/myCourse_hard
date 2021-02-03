'use strict';

const isNumber = function (n) {
   return !isNaN(parseFloat(n)) && isFinite(n);
};

const arr = ['15656', '25656', '35656', '45656', '55656', '65656', '75656'];

function resultArr() {
   for (let i = 0; i < arr.length; i++) {
      let tmp = arr[i];

      if (!isNumber(tmp)) {
         console.log(tmp + ' - это не число');
      } else if (tmp.indexOf(2) === 0 || tmp.indexOf(4) === 0) {
         console.log(tmp);
      }
   }
} 


resultArr(arr);

////////////////.....2 часть ...//////////////////// 


let n = 100;

let checkSimpl = function(n) {
   for (let i = 2; i < n; i++) {
      if (n % i === 0) {
         return false;
      }
   }
   return true;
};

let simplArr = function () {
   for (let i = 2; i <=n; i++) {

      if (checkSimpl(i)) {
         console.log(i + '  Делители этого числа: 1 и ' + i);
      }

   }
};

simplArr();











// function isSimple(n) {
//    if (n === 1 || n === 0) {
//       return false;
//    } else {
//       for (let i = 2; i < n; i++) {
//          if (n % i === 0) {
//             return false;
//          }
//       }
//       return true;
//    }
// }


