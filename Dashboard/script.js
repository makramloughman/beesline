// The following data is extracted from the customer's and the distributor's server //////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                                                                                //
var sales_month = {2018: [35+8+6+7,51+21+28+39,30+48+19+13+3,17+14+51+25,5+36+18+39,34+37+40+42+14,30+25+19+50,22+28+45+5,48+44+41+8+22,21+13+48+39,24+40+41+10,30+37+26+35+44],//
                   2019: [13+28+34+46,6+25+22+47,22+46+26+19+33,32+30+19+44,16+26+29+22,27+25+36+44+46,11+48+39+39,41+5+46+48+12]};                                             //
                                                                                                                                                                                //
var expenses_month = {2018: [30+3+1+2,16+16+23+34,25+43+14+8+0,12+9+46+20,0+31+13+34,29+32+35+37+9,25+20+14+45,17+23+40+0,43+39+36+3+17,16+8+43+34,19+35+36+5,25+32+21+30+39],  //
                      2019: [13+28+34+46-20,6+25+22+47-20,22+46+26+19+33-25,32+30+19+44-20,16+26+29+22-20,27+25+36+44+46-25,11+48+39+39-20,41+5+46+48+12-25]};                  //
                                                                                                                                                                                //
var sales_week = {2018: [35,8,6,7,51,21,28,39,30,48,19,13,3,17,14,51,25,5,36,18,39,34,37,40,42,14,30,25,19,50,22,28,45,5,48,44,41,8,22,21,13,48,39,24,40,41,10,30,37,26,35,44], //
                  2019: [13,28,34,46,6,25,22,47,22,46,26,19,33,32,30,19,44,16,26,29,22,27,25,36,44,46,11,48,39,39,41,5,46,48,12]};                                              //
                                                                                                                                                                                //
var expenses_week = {2018: [30,3,1,2,46,16,23,34,25,43,14,8,0,12,9,46,20,0,31,13,34,29,32,35,37,9,25,20,14,45,17,23,40,0,43,39,36,3,17,16,8,43,34,19,35,36,5,25,32,21,30,39],   //
                     2019: [8,23,29,41,1,20,17,42,17,41,21,14,28,27,25,14,39,11,21,24,17,22,20,31,39,41,6,43,34,34,36,0,41,43,7]};                                              //
                                                                                                                                                                                //
var months_raw = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'Novemeber', 'December'];                                   //
                                                                                                                                                                                //
var weeks_raw = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52];           //
                                                                                                                                                                                //
var year = new Date().getFullYear(); // eventually inputed by user                                                                                                              //
                                                                                                                                                                                //
var months = [];                                                                                                                                                                //
                                                                                                                                                                                //
var weeks = [];                                                                                                                                                                 //
                                                                                                                                                                                //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var config_month = {};

var config_week = {};

var size = (window.innerHeight > window.innerWidth) || (window.innerWidth < 1400) ? 1.3 : 1.864;

function init_month() {
  months = months_raw.slice(0,sales_month[year].length);
  config_month = {
    type: 'line',
    data: {
      labels: months,
      datasets: [{
        label: 'Sales',
        data: sales_month[year],
        backgroundColor: 'rgba(255, 0, 0, 1)',
        borderColor: 'rgba(255, 0, 0, 1)',
        fill: false,
      }, {
        label: 'Expenses',
        data: expenses_month[year],
        backgroundColor: 'rgba(0, 0, 255, 1)',
        borderColor: 'rgba(0, 0, 255, 1)',
        fill: false,
      }]
    },
    options: {
      responsive: true,
      aspectRatio: size,
      title: {
        display: true,
        text: `Company Performance in ${year}`
      },
      scales: {
        xAxes: [{
          display: true,
          scaleLabel: {
            display: true,
            labelString: 'Month'
          }
        }],
        yAxes: [{
          display: true,
          scaleLabel: {
            display: true,
            labelString: 'Value'
          },
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  };
};

function init_week() {
  weeks = weeks_raw.slice(0,sales_week[year].length);
  config_week = {
    type: 'line',
    data: {
      labels: weeks,
      datasets: [{
        label: 'Sales',
        data: sales_week[year],
        backgroundColor: 'rgba(255, 0, 0, 1)',
        borderColor: 'rgba(255, 0, 0, 1)',
        fill: false,
      }, {
        label: 'Expenses',
        data: expenses_week[year],
        backgroundColor: 'rgba(0, 0, 255, 1)',
        borderColor: 'rgba(0, 0, 255, 1)',
        fill: false,
      }]
    },
    options: {
      responsive: true,
      aspectRatio: size,
      title: {
        display: true,
        text: `Company Performance in ${year}`
      },
      scales: {
        xAxes: [{
          display: true,
          scaleLabel: {
            display: true,
            labelString: 'Week'
          }
        }],
        yAxes: [{
          display: true,
          scaleLabel: {
            display: true,
            labelString: 'Value'
          },
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  };
};

init_month();
init_week();

var ctx = document.getElementById('chart').getContext('2d');
var myChart = new Chart(ctx,config_month);
document.getElementById('months').classList.add('active');

var inputs = document.querySelectorAll('.year-input');
for (var h = 0; h < inputs.length; h++) {
  input = inputs[h];
  input.addEventListener('change',yearChanged);
};

function yearChanged(event) {
  var target = event.target;
  if (isNaN(target.value) || target.value < 2018) {
    target.value = 2018;
  }
  if (target.value > 2019) {
    target.value = 2019;
  }
  year = target.value;
  if (target.parentElement.getElementsByClassName('active')[0].id == 'months') {
    init_month();
    myChart.destroy();
    myChart = new Chart(ctx,config_month);
  } else {
    init_week();
    myChart.destroy();
    myChart = new Chart(ctx,config_week);
  }
};

var buttons = document.querySelectorAll('.timescale');
for (var h = 0; h < buttons.length; h++) {
  button = buttons[h];
  button.addEventListener('click',timescaleChanged);
};

function timescaleChanged(event) {
  var target = event.target;
  if (target.id == 'weeks') {
    target.classList.add('active');
    if (document.getElementById('months').classList[1] == 'active') {
      document.getElementById('months').classList.remove('active');
    }
    init_week();
    myChart.destroy();
    myChart = new Chart(ctx,config_week);
  } else {
    target.classList.add('active');
    if (document.getElementById('weeks').classList[1] == 'active') {
      document.getElementById('weeks').classList.remove('active');
    }
    init_month();
    myChart.destroy();
    myChart = new Chart(ctx,config_month);
  }
};
