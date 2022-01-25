
// Line Chart for Orders
var ordersChart = document.getElementById("myAreaChart");
const Line = new Chart(ordersChart, {
    type: 'line',
    
    data : {
        labels: ['Aug1','Aug3','Aug5','Aug7','Aug9','Aug11','Aug13'],
        datasets: [{
          data: [9000, 30000, 20000, 35000,30000,20000,40000],
          label:'order',
          borderColor: 'rgba(220, 92, 124, 1)',
          backgroundColor:'rgb(220, 92, 124)'
    
         
        }]
      }
    
});
 

// Bar Chart for Visitor
var visitorChart = document.getElementById("myBarChart");
const bchart = new Chart(visitorChart, {
    type: 'bar',
    
    data : {
        labels: ['June','July','August','September','October','November','December'],
        datasets: [{
          data: [4000, 4500, 12000, 5000,7000,9500,11000],
          label:'Man',
          backgroundColor:'rgb(55, 49, 94)'
    
         
        },{
            data: [6000, 6000, 15000, 7500,9800,13000,14000],
            label:'Women',
            backgroundColor:'rgb(220, 92, 124)'
      
           
          }]
      }
    
});
// Liner Chart for Cities
var citiesChart = document.getElementById("myPieChart");
const pie = new Chart(citiesChart, {
    type: 'pie',
    
    data : {
        labels: ['Riyadh','Jeddah','Sharqia','Mecca'],
        datasets: [{
          data: [40, 20, 10, 30],
          label:'order',
          backgroundColor:[
            'rgba(220, 92, 124, 1)',
            'rgb(55, 49, 94)',
            'rgba(218, 65, 103, 1)',
            'rgb(64, 29, 186)'
          ]
    
         
        }]
      }
    
});
 
// Liner Chart for Rat
var ratChart = document.getElementById("myLinearChart");

const linerChart = new Chart(ratChart, {
    type: 'line',
    
    data : {
        labels:['January','February','March','April','May','June'],
        datasets: [{
          data: [1, 1.5, 2.5, 4,5,3],
          label:'customer',
          borderColor: 'rgba(220, 92, 124, 1)',
          backgroundColor:'rgb(220, 92, 124)'
    
         
        }]
      }
    
});
