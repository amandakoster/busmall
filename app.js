'use strict';
//image array
//http://stackoverflow.com/questions/19693256/javascript-display-random-img
//http://stackoverflow.com/questions/20496746/random-image-display-without-repeat-with-javascript
var imgArray = ['bag.jpg','banana.jpg','bathroom.jpg','boots.jpg','breakfast.jpg','bubblegum.jpg','chair.jpg','cthulhu.jpg','dog-duck.jpg','dragon.jpg','pen.jpg','pet-sweep.jpg','scissors.jpg','shark.jpg','sweep.png','tauntaun.jpg','unicorn.jpg','usb.gif','water-can.jpg','iwine-glass.jpg'];

var nameArray = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];
var productArray = [];
var totalClicks = 0;
var img1 = document.getElementById ('left');
var img2 = document.getElementById ('center');
var img3 = document.getElementById ('right');
var pictureList = [];

function Products(itemName,itemPath){
  this.itemName = itemName;
  this.itemPath = itemPath;
  this.itemClick = 0;
  this.imageShown = 0;
  productArray.push(this);
}

for (var i = 0; i < imgArray.length; i++) {
  var filePath = '/img' + imgArray[i];
  console.log('/img' + imgArray[i] );
  new Products(nameArray[i], filePath);
}

function randomImgIndex() {
  return Math.floor(Math.random() * imgArray.length);
  console.log();
}

var prevImgIndex = [];
function randomImage() {
  var currentImgIndexes = [];
  while (currentImgIndexes > 3) {
    var imgSelector = reandomIngIndex();
    if (!currentImgIndexes.includes(imgSelector) && !precImgIndexes.includes(imgSelector)) {
      currentImgIndexes.push(imgSelector);
    }
  }

var prod1 = currentImgIndexes[0];
var prod2 = currentImgIndexes[1];
var prod3 = currentImgIndexes[2];























//remember the subscript values of the array are 0 to 6 (seven elements) zero based array
//you will have to subtract 1 from the random number generated to account for the zero based array
