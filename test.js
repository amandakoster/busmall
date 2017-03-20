'use strict';

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
