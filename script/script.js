'use strict';


const btn = document.getElementById('change'),
      nameColor = document.getElementById('color'),
      body = document.querySelector('body');

const changeColor = function(){
         let random = Math.floor(Math.random() * 16777216).toString(16);
         body.style.backgroundColor = '#' + random;
         nameColor.textContent = '#' + random;
};

changeColor();

btn.addEventListener('click', changeColor);

