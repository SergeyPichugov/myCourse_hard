'use strict';

const arg = '    123456789012345678901234567890123456789     ';

const result = function(arg) {

   if (typeof arg === 'string') {
      (arg.length > 30) ? console.log(arg.trim().slice(0, 30) + '...') : console.log(arg.trim());
   } else {
      console.log('введите строку');
   }
};

result(arg);
