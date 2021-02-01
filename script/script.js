'use strict';

let lang = 'ru';

const ruCalendar = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'],
      enCalendar = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'],
      multiArr = [['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'],
                  ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']];

const result = lang === 'ru' ? console.log(...multiArr[0]) : console.log(...multiArr[1]);

if (lang === 'ru') {
   for (let i = 0; i < ruCalendar.length; i++) {
      console.log(ruCalendar[i]);
   }
} else if (lang === 'en') {
   for (let i = 0; i < enCalendar.length; i++) {
      console.log(enCalendar[i]);
   }
} else {
   console.log('что-то пошло не так...');
}


switch (lang) {
   case 'ru': 
      for (let i = 0; i < ruCalendar.length; i++) {
         console.log(ruCalendar[i]);
      }
      break;
   case 'en':
      for (let i = 0; i < enCalendar.length; i++) {
         console.log(enCalendar[i]);
      }
      break;
   default:
      console.log('что-то пошло не так...');
}

////////////////////////////....part 2....////////////////////////
const namePerson = 'Максим';

const hello = namePerson === 'Артем' ? console.log('директор') : 
            namePerson === 'Максим' ? console.log('преподаватель') : console.log('студент');