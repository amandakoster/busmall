'use strict';
//image array
//http://stackoverflow.com/questions/19693256/javascript-display-random-img
//http://stackoverflow.com/questions/20496746/random-image-display-without-repeat-with-javascript

var imgArray = [
  'imag/bag.jpg',
  'imag/banana.jpg',
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

function displayImage(){
  var num = Math.floor(Math.random() * (imgArray.length));
  document.canvas.src = imgArray[num];
  console.log();
}

renderHTML = function() {

  var newUl = document.createElement('ul');
  var newHeading = document.createElement('h2');
  newHeading.innerText = name;
  body.appendChild(newHeading);

  for (var i = 0; i < imgArray.length; i++) {
    var newLi = document.createElement('li');
    newLi.innerText = imgArray[i];
    newUl.appendChild(newLi);
  }

  var TotalLi = document.createElement('li');
  TotalLi.innerText = 'Total' + ': ' + this.total + ' cookies';
  newUl.appendChild(TotalLi);
  body.appendChild(newUl);
};

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
