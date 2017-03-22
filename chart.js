'use strict';

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var studentHeights = voteTotals[];

var data = {
  labels: ['Zach', 'Becky', 'Sean', 'Max'],
  datasets: [{
    label: 'Student Heights',
    data: studentHeights,
    backgroundColor: 'red'
  }, {
    label: 'Student Ages',
    data: studentAges
  }]
};

var myChart = new Chart(ctx, {
  type: 'bar',
  data: data,
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero:true
        }
      }]
    }
  }
});
