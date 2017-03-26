'use strict';
//Navigator: Anthony Robinson

var imgArray = ['bag.jpg','banana.jpg','bathroom.jpg','boots.jpg','breakfast.jpg','bubblegum.jpg','chair.jpg','cthulhu.jpg','dog-duck.jpg','dragon.jpg','pen.jpg','pet-sweep.jpg','scissors.jpg','shark.jpg','sweep.png','tauntaun.jpg','unicorn.jpg','usb.gif','water-can.jpg','wine-glass.jpg'];
var nameArray = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];

var productArray = [];
var totalClicks = 0;
var img1 = document.getElementById ('left');
var img2 = document.getElementById ('center');
var img3 = document.getElementById ('right');
var pictureList = [];
function Products(itemName, itemPath) {
  this.itemName = itemName;
  this.itemPath = itemPath;
  this.itemClick = 0;
  this.imageShown = 0;
  productArray.push(this);
};
for (var i = 0; i < imgArray.length; i++) {
  var filePath = 'img/' + imgArray[i];
  new Products(nameArray[i], filePath);
}

if (localStorage.whatever) {
  var storageArray = JSON.parse(localStorage.whatever);
  for (var i = 0; i < storageArray.length; i++) {
    productArray[i].itemClick += storageArray[i].itemClick;
    productArray[i].imageShown += storageArray[i].imageShown ;
  }
}

function randomImgIndex() {
  return Math.floor(Math.random() * imgArray.length);
}
var prevImgIndexes = [];
function randomImage() {
  var currentImgIndexes = [];
  while (currentImgIndexes.length < 3) {
    var imgSelector = randomImgIndex();
    if (!currentImgIndexes.includes(imgSelector) && !prevImgIndexes.includes(imgSelector)) {
      currentImgIndexes.push(imgSelector);
    }
  }
  var prod1 = productArray[currentImgIndexes[0]];
  var prod2 = productArray[currentImgIndexes[1]];
  var prod3 = productArray[currentImgIndexes[2]];

  img1.src = prod1.itemPath;
  img2.src = prod2.itemPath;
  img3.src = prod3.itemPath;
  console.log(prod1.itemPath);
  console.log(productArray[currentImgIndexes[0]].itemName);
  //this uses alt to collect the img index in order to count the # of clicks
  img1.alt = currentImgIndexes[0];
  img2.alt = currentImgIndexes[1];
  img3.alt = currentImgIndexes[2];

  prevImgIndexes = currentImgIndexes;
  prod1.imageShown++;
  prod2.imageShown++;
  prod3.imageShown++;
};

randomImage();

var clickLimit = 25;
function handleTheClick() {
  randomImage();
  totalClicks++;
  var productIdx = this.alt;
  productArray[productIdx].itemClick++;

  if (totalClicks === clickLimit) {
    img1.removeEventListener('click', handleTheClick);
    img2.removeEventListener('click', handleTheClick);
    img3.removeEventListener('click', handleTheClick);
    //stops the event listener once we reach 25 clicks
    productClicks(); //this is defined below
  }
  localStorage.whatever = JSON.stringify(productArray);
};

img1.addEventListener('click', handleTheClick);
img2.addEventListener('click', handleTheClick);
img3.addEventListener('click', handleTheClick);

var voteTotals = [];
function productClicks() {
  for (var i = 0; i < productArray.length; i++) {
    var percent = productArray[i].itemClick / productArray[i].imageShown * 100;
    voteTotals.push(percent);
  }

  var canvas = document.getElementById('chart');
  var ctx = canvas.getContext('2d');

  var data = {
    labels: nameArray,
    datasets: [{
      label: 'Percentage Clicked',
      data: voteTotals,
      backgroundColor: 'orange'
    }]
  };

  var myChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true,
            max:100
          }
        }]
      }
    }
  });
}
