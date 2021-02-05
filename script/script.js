'use strict';

const week = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];

let now = new Date().getDay();

for (let i = 0; i < week.length; i++) {

   let everyDay = document.createElement('div');

   
   if (i === 5 || i === 6 ) {
      everyDay.className = "italic";
      everyDay.style.fontStyle = 'italic';
   } else {
      everyDay.className = "text";
      everyDay.style.fontSize = '20px';
   }
   
   if ((now - 1) === i) {
      everyDay.classList.add('nowDay');
      everyDay.style.fontWeight = 'bold';
   }

   if (now === 0  && i === 6) {
      everyDay.classList.add('nowDay');
      everyDay.style.fontWeight = 'bold';
   }



   everyDay.innerHTML = week[i];
   document.body.append(everyDay);

}



