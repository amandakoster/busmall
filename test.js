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
var petsweep = new Image ('pet-sweep','img/pet-sweep.jpg', '12');
var scissors = new Image('scissors','img/scissors.jpg', '13') ;
var shark = new Image('shark', 'img/shark.jpg', '14');
var sweep = new Image('sweep', 'img/sweep.png', '15');
var tauntaun = new Image('tauntaun', 'img/tauntaun.jpg','16');
var unicorn = new Image('unicorn','img/unicorn.jpg', '17');
var usb = new Image('usb', 'img/usb.gif', '18');
var watercan = new Image('water-can', 'img/water-can.jpg', '19');
var wineglass = new Image('wine-glass','img/wine-glass.jpg', '20');

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
