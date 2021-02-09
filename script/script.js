'use strict';

let exactTime;
let exactTimePartTwo;

let second1;
let minute1;
let hour1;
let mounth1;
let dateNow1;

function myClock() {

   let weekArr = [ 'Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
         mounthArr = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'],
         now = new Date(),
         second = now.getSeconds(),
         minute = now.getMinutes(),
         hour = now.getHours(),
         year = now.getFullYear(),
         mounth = now.getMonth(),
         dateNow = now.getDate();

   
   const formatHour = function(hour) {
      if (hour === 1 || hour === 21) {
         return 'час';
      } else if (hour > 1 && hour <= 4 || hour ===22 || hour === 23) {
         return 'часа';
      } else if (hour > 4 && hour <= 20 || hour === 0) {
         return 'часов';
      } 
   };
   
   const formatMinute = function (minute) {
      let a = minute % 10;
      if (a === 1) {
         return 'минута';
      } else if (a === 0 || a === 5 || a === 6 || a === 7 || a === 8 || a === 9) {
         return 'минут';
      } else if (a === 2 || a === 3 || a === 4) {
         return 'минуты';
      } 
   };
   
   const formatSecond = function (second) {
      let a = second % 10;
      if (second === 11 || second === 12 || second === 13 || second === 14) {
         return 'секунд';
      } else if (a === 1) {
         return 'секунда';
      } else if (a === 0 || a === 5 || a === 6 || a === 7 || a === 8 || a === 9) {
         return 'секунд';
      } else if (a === 2 || a === 3 || a === 4) {
         return 'секунды';
      }
   };
   
   exactTime = 'Сегодня ' + weekArr[now.getDay()] + ', ' + dateNow + ' ' + mounthArr[mounth] + ' ' + year + ' года, ' + hour + ' ' + formatHour(hour) + ' ' + minute + ' ' + formatMinute(minute) + ' ' + second + ' ' + formatSecond(second);


      

   function formatTime() {
      second1 = (second < 10) ? '0' + second : second;
      minute1 = (minute < 10) ? '0' + minute : minute;
      hour1 = (hour < 10) ? '0' + hour : hour;
      mounth1 = (mounth + 1 < 10) ? '0' + (mounth + 1) : (mounth + 1);
      dateNow1 = (dateNow < 10) ? '0' + dateNow : dateNow;

   }
   formatTime();
   exactTimePartTwo = dateNow1 + '.' + mounth1 + '.' + year + ' - ' + hour1 + ':' + minute1 + ':' + second1;
   
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


