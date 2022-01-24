
// Line Chart for Orders
var ordersChart = document.getElementById("myAreaChart");
const Line = new Chart(ordersChart, {
    type: 'line',
    data = {
        labels: ['Aug1','Aug3','Aug5','Aug7','Aug9','Aug11','Aug13'],
        datasets: [{
          data: [10000, 20000, 30000, 40000],
          borderColor: 'rgb(234, 68, 176)',
          backgroundColor: 'rgb(200, 181, 221)'
         
        }]
      }
    
});
 

// Bar Chart for Visitor
var visitorChart = document.getElementById("myBarChart");

// Liner Chart for Cities
var citiesChart = document.getElementById("myPieChart");

// Liner Chart for Rat
var ratChart = document.getElementById("myLinearChart");
