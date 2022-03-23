'use strict';

const item = document.querySelectorAll('.item');
console.log('item', item);

const oneItem = item[1];
const twoItem = item[2];
const threeItem = item[3];
const fourItem = item[0];
const fiveItem = item[4];
const sixItem = item[5];

threeItem.after(fourItem);

const head = document.querySelectorAll('h2');

console.log(head[0]);
console.log(head[1]);
console.log(head[2]);
console.log(head[3]);
console.log(head[4]);
console.log(head[5]);

const headOne = head[0];
const headTwo = head[1];
const headThree = head[2];
const headFour = head[3];
const headFive = head[4];
const headSix = head[5];

headTwo.replaceWith(headFive); // перемещаем заголовок ES6 и не только 
headSix.replaceWith(headTwo);  // перемещаем заголовок Асинхронная обработка и оптимизация

const h2 = document.createElement('h2');
const text = document.createTextNode('Асинхронная обработка и оптимизация');
h2.append(text);

const itemImage = document.querySelectorAll('.item__image');
console.log(itemImage[4]);
itemImage[4].after(head[5]); // вставляем заголовок на 5 слайд

const h2Four = document.createElement('h2');
const textFour = document.createTextNode('This и прототипы объектов');
h2Four.append(textFour);

head[2].remove(); // удалили неправильный заголовок

console.log(itemImage[3]);
itemImage[2].after(h2Four); // вставляем заголовок на 3 слайд

const itemProps = document.querySelectorAll('.props__list');
console.log(itemProps);
itemProps[4].replaceWith(itemProps[2]); //вернули текст на 5 слайд
h2Four.after(itemProps[4]); //вернули текст на 3 слайд

const propsItem = document.querySelectorAll('.props__item');

const propsLiFour = document.querySelectorAll('.props__item_four');
console.log('propsLiFour: ', propsLiFour);
propsLiFour[3].append(propsItem[9]); //переместили строку на 4 слайд

const propsLiTwo = document.querySelectorAll('.props__item_two');
console.log('propsLiTwo:', propsLiTwo);
propsLiTwo[7].append(propsItem[43]); // переместили строки на 2 слайд
propsLiTwo[8].append(propsItem[44]);
