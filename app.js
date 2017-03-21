'use strict';
//image array
//http://stackoverflow.com/questions/19693256/javascript-display-random-img
//http://stackoverflow.com/questions/20496746/random-image-display-without-repeat-with-javascript

var imgArray = [
  'img/bag.jpg',
  'img/banana.jpg',
  'img/bathroom.jpg',
  'img/boots.jpg',
  'img/breakfast.jpg',
  'img/bubblegum.jpg',
  'img/chair.jpg',
  'img/cthulhu.jpg',
  'img/dog-duck.jpg',
  'img/dragon.jpg',
  'img/pen.jpg',
  'img/pet-sweep.jpg',
  'img/scissors.jpg',
  'img/shark.jpg',
  'img/sweep.png',
  'img/tauntaun.jpg',
  'img/unicorn.jpg',
  'img/usb.gif',
  'img/water-can.jpg',
  'img/wine-glass.jpg',
];

var bag = new Image('bag', 'img/bag.jpg', '1');
var banana = new Image('banana', 'img/banana.jpg','2');
var bathroom = new Image('bathroom', 'img/bathroom.jpg', '3');
var boots = new Image('boots', 'img/boots.jpg', '4');
var breakfast = new Image('breakfast', 'img/breakfast.jpg', '5');
var bubblegum = new Image('bubblegum', 'img/bubblegum.jpg', '6');
var chair = new Image('chair', 'img/chair.jpg', '7');
var cthulhu = new Image('cthulhu', 'img/cthulhu.jpg', '8');
var dogduck = new Image('dog-duck', 'img/dog-duck.jpg', '9');
var dragon = new Image('dragon', 'img/dragon.jpg', '10');
var pen = new Image ('pen', 'img/pen.jpg', '11');
var petsweep = new Image ('pet-sweep','img/pet-sweep.jpg' ,'12');
var scissors = new Image('scissors','img/scissors.jpg', '13') ;
var shark = new Image('shark', 'img/shark.jpg', '14');
var sweep = new Image('sweep', 'img/sweep.png', '15');
var tauntaun = new Image('tauntaun', 'img/tauntaun.jpg','16');
var unicorn = new Image('unicorn','img/unicorn.jpg', '17');
var usb = new Image('usb', 'img/usb.gif', '18');
var watercan = new Image('water-can', 'img/water-can.jpg', '19');
var wineglass = new Image('wine-glass','img/wine-glass.jpg', '20');

function newImage(imgName, imgPath ){
  this.name = imgName;
  this.imgPath = imgPath;
}

for (var i = 0; i < imgArray.length; i++) {
  imgArray[i] + '/img';
  console.log('/img' + imgArray[i] );
}

function displayImage(){
  var num = Math.floor(Math.random() * (imgArray.length));
  document.canvas.src = imgArray[num];
  console.log();
}

//
// renderHTML = function() {
//
//   var newUl = document.createElement('ul');
//   var newHeading = document.createElement('h2');
//   newHeading.innerText = name;
//   body.appendChild(newHeading);
//
//   for (var i = 0; i < imgArray.length; i++) {
//     var newLi = document.createElement('li');
//     newLi.innerText = imgArray[i];
//     newUl.appendChild(newLi);
//   }
//
//   var TotalLi = document.createElement('li');
//   TotalLi.innerText = 'Total' + ': ' + this.total + ' cookies';
//   newUl.appendChild(TotalLi);
//   body.appendChild(newUl);
// };

// function
//   this.name = imgName;
//   this.imgType = imgType;
//   this.imgPath = imgPath;
// }

// var canvas = document.getElementById('canvas');
// var ctx = canvas.getContext('2d');
// var textarea = document.getElementById('code');
// var reset = document.getElementById('reset');
// var edit = document.getElementById('edit');
// var code = textarea.value;
//
// function drawCanvas() {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   eval(textarea.value);
// }
//
// reset.addEventListener('click', function() {
//   textarea.value = code;
//   drawCanvas();
// });
//
// edit.addEventListener('click', function() {
//   textarea.focus();
// });
//
// textarea.addEventListener('input', drawCanvas);
// window.addEventListener('load', drawCanvas);
//
// var imagesArray = ['dog.jpg', 'fox.jpg', 'mouse.jpg', 'alligator.jpg', 'fish.jpg', 'parrot.jpg', 'cat.jpg'];
//
// function displayImage(){
//   var num = Math.floor(Math.random() * 20);
//     //the second statement display the random image from the imagesArray array in the canvas image using the random number as the subscript value
//   document.canvas.src = imagesArray[num];
//
// }

//remember the subscript values of the array are 0 to 6 (seven elements) zero based array
//you will have to subtract 1 from the random number generated to account for the zero based array
