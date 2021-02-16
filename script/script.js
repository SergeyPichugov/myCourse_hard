'use strict';


const DomElement = function (selector = '.some', height = '100px', width = '250px', bg = 'potato', fontSize = '15px') {
   this.selector = selector;
   this.height = height;
   this.width = width;
   this.bg = bg;
   this.fontSize = fontSize;
   this.createElem = function () {
      let elem;
      
      if (selector.charAt(0) === '.') {
         elem = document.createElement('div');
         elem.classList.add(selector.substring(1));
         document.body.append(elem);
      }

      if (selector.charAt(0) === '#') {
         elem = document.createElement('p');
         elem.setAttribute('id', selector.substring(1));
         document.body.append(elem);
      }
      
      elem.textContent = '';
      elem.style.cssText = `height: ${height}; width: ${width}; background: ${bg}; font-size: ${fontSize};
      position: absolute`;

   };

};

let myElem = new DomElement('.best', '100px', '100px', 'red', '20px');

document.addEventListener('DOMContentLoaded', function () {
   myElem.createElem();
});


const moveBlock = function (btn) {
   const myBlock = document.querySelector('.best');

   let topMargin = window.getComputedStyle(myBlock);
   let leftMargin = window.getComputedStyle(myBlock);
   let leftMove = parseInt(leftMargin.left);
   let topMove = parseInt(topMargin.top);

   if (btn.key === 'ArrowUp'){
      topMove -= 10;
      if(topMove > 0){
         myBlock.style.top = topMove + 'px';
      }
   }

   if (btn.key === 'ArrowDown') {
      topMove += 10;
      if (topMove > 0){
         myBlock.style.top = topMove + 'px';
      }
   }

   if (btn.key === 'ArrowLeft') {
      leftMove -= 10;
      if (leftMove > 0){
         myBlock.style.left = leftMove + 'px';
      }
   }
   
   if (btn.key === 'ArrowRight') {
      leftMove += 10;
      if (leftMove > 0){
         myBlock.style.left = leftMove + 'px';
      }
   }
};

document.addEventListener('keydown', moveBlock);




