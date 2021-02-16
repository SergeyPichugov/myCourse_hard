'use strict';


const DomElement = function (selector, height, width, bg, fontSize) {
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
      
      elem.textContent = 'Мой новый созданный элемент';
      elem.style.cssText = `height: ${height}; width: ${width}; background: ${bg}; font-size: ${fontSize}`;

   };

};

let myElem = new DomElement('.best', '50px', '350px', 'red', '20px');
myElem.createElem();


