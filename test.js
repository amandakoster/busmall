'use strict';

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

var bag = new Image ('bag.jpg',jpg, img/bag.jpg  )
var banana = new Image('banana.jpg', jpg, img/banana.jpg)
var img/bathroom.jpg = new Image('bathroom.jpg', jpg, img/bathroom.jpg)
var img/boots.jpg = new Image('boots.jpg', 'jpg', 'img/boots.jpg')
var img/breakfast.jpg = new Image('breakfast.jpg', 'jpg', 'img/breakfast.jpg')
var img/bubblegum.jpg = new Image('bubblegum.jpg', 'jpg', img/bubblegum.jpg)
var img/chair.jpg = new Image('chair.jpg','jpg','img/chair.jpg')
var img/cthulhu.jpg = new Image('cthulhu.jpg', 'jpg', img/cthulhu.jpg )
var img/dog-duck.jpg = new Image('dog-duck.jpg', jpg, img/dog-duck.jpg)
var img/dragon.jpg = new Image()
var img/dragon.jpg = new Image
var img/pen.jpg = new Image
var img/pet-sweep.jpg = new Image
var img/scissors.jpg = new Image
var img/shark.jpg = new Image
var img/sweep.png = new Image
var img/tauntaun.jpg = new Image
var img/unicorn.jpg = new Image
var img/usb.gif = new Image
var img/water-can.jpg = new Image
var img/wine-glass.jpg = new Image


function newImage(bag){
  this.name = imgName;
  this.imgType = imgType;
  this.imgPath = imgPath;
}

for (var i = 0; i < imgArray.length; i++) {
  array[i];
}

//   if (maxCust < minCust) {
//     alert('The max number of customers should not be larger than the min number of customers');
//   } else {
//     var newStore = new Store(name.value, Math.floor(minCust.value), Math.floor(maxCust.value), avgCookieSale.value);
//     newTableRow(newStore);
//
//     form.reset();
//   }
// }

var makeSection = function() {
  var imgSection = document.createElement('img');
  body.appendChild(imgSection);

  for (var i = 0; i < imgArray.length; i++) {
    var tData = document.createElement('img');
    imgSection.innerText = storeHours[i];
    imgSection.appendChild(tData);
  };

  newTableRow(alki);
};

function displayImage(imgArray){
  var num = Math.floor(Math.random() * (imgArray.length));
  document.body.appendChild(img);
  console.log();
}

makeSection();

// var img = document.createElement('img');
// img.src = image;
// img.height = "45";
// img.width = "50";
// document.body.appendChild(img);
// });

// function Store() {
//   this.name = name;
//   this.minCust = minCust;
//   this.maxCust = maxCust;
//   this.avgCookieSale = avgCookieSale;
//   this.total = 0;
//   this.salesArray = [];
//   var salesArray = this.salesArray;
//   var total = this.total;
//
//   this.randomCust = function() {
//     return Math.floor(Math.random() * (maxCust - minCust + 1) + minCust);
//   };
//
//   this.randomHourlySale = function() {
//     return Math.floor(this.randomCust() * avgCookieSale);
//   };
//
//   this.cookiesPuchPerHour = function() {
//     for (var i = 0; i < storeHours.length; i++) {
//       var randomHourlySale = this.randomHourlySale();
//       salesArray.push(randomHourlySale);
//       this.total += randomHourlySale;
//     }
//   };
