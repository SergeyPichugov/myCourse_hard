'use strict';

let exactTime;
let exactTimePartTwo;

function myClock() {

   let    now = new Date(),
         weekDay =now.toLocaleString('ru', {weekday: 'long'}),
         mounthDay = now.toLocaleString('ru', {month: 'long'}),
         second = now.getSeconds(),
         minute = now.getMinutes(),
         hour = now.getHours(),
         year = now.getFullYear(),
         mounth = now.getMonth(),
         dateNow = now.getDate();

   weekDay = weekDay.charAt(0).toUpperCase() + weekDay.substr(1);

   const formatMonth = function(tmp){
      if (tmp.slice(-1) === 'ь' || tmp.slice(-1) === 'й') {
         return tmp.substring(0, tmp.length - 1) + 'я';
      } else {
         return tmp + 'а';
      }
   };

   const formatNum = function(n, text){
      let n1 = n % 10;
      if ( n1 === 1){
         return text[0];
      } else if ( n1 > 1 && n1 < 5){
         return text[1];
      } else if (n > 10 && n < 20){
         return text[2];
      } 
         return text[2];
      
   };

   exactTime = 'Сегодня ' + weekDay + ', ' + dateNow + ' ' + formatMonth(mounthDay) + ' ' + year + ' года, ' + hour + formatNum(hour, [' час', ' часа', ' часов']) + ' ' + minute + formatNum(minute, [' минута', ' минуты', ' минут']) + ' ' + second + formatNum(second, [' секунда', ' секунды', ' секунд']);


      

   function formatTime() {
      second = (second < 10) ? '0' + second : second;
      minute = (minute < 10) ? '0' + minute : minute;
      hour = (hour < 10) ? '0' + hour : hour;
      mounth = (mounth + 1 < 10) ? '0' + (mounth + 1) : (mounth + 1);
      dateNow = (dateNow < 10) ? '0' + dateNow : dateNow;

   }
   formatTime();

   exactTimePartTwo = dateNow + '.' + mounth + '.' + year + ' - ' + hour + ':' + minute + ':' + second;
   
}

myClock();


setInterval(myClock, 1000);

let time = document.createElement('div');
time.style.color = 'red';
time.style.fontSize = '30px';


let timePartTwo = document.createElement('div');
timePartTwo.style.color = 'red';
timePartTwo.style.fontSize = '30px';


function vision(){
   time.innerHTML = '';
   timePartTwo.innerHTML = '';
   
   time.innerHTML = exactTime;
   timePartTwo.innerHTML = exactTimePartTwo;
   document.body.append(time);
   document.body.append(timePartTwo);
}

setInterval(vision, 1000);


