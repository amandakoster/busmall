'use strict';
//image array
//http://stackoverflow.com/questions/19693256/javascript-display-random-images
//http://stackoverflow.com/questions/20496746/random-image-display-without-repeat-with-javascript

var imagesArray = [
  'images/img-1.jpg',
  'images/img-2.jpg',
  'images/img-3.jpg',
  'images/img-4.jpg',
  'images/img-5.jpg',
];

function displayImage(){

  var num = Math.floor(Math.random() * (imagesArray.length));

  document.canvas.src = imagesArray[num];

}

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var textarea = document.getElementById('code');
var reset = document.getElementById('reset');
var edit = document.getElementById('edit');
var code = textarea.value;

function drawCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  eval(textarea.value);
}

reset.addEventListener('click', function() {
  textarea.value = code;
  drawCanvas();
});

edit.addEventListener('click', function() {
  textarea.focus();
});

textarea.addEventListener('input', drawCanvas);
window.addEventListener('load', drawCanvas);
