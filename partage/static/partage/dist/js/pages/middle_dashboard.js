/*
 * Description:
 *      This is a demo file used only for the main dashboard (index.html)
 **/

$(function () {

  'use strict';

  //Putting LeafletMap Instead
  var mymap = L.map('mid-world-map').setView([14.6937, -17.44406], 13);
  L.marker([14.6937, -17.44406]).addTo(mymap).bindPopup("Dakar").openPopup();

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
  maxZoom: 6,
  // attribution: 'Map data Â© OpenStreetMap contributors, ' +
  // 'CC-BY-SA, ' +
  // 'Imagery Â© Mapbox',
  id: 'mapbox.streets'
}).addTo(mymap);

 

  /* Morris.js Charts */

  var MiddleByRegionData=[];
  var MiddleJsonData = $.ajax({
      url: '/middle_by_region_json/',
      dataType: 'json',
    }).done(function (data, status){

      for (var i=0; i< data.length; i++){
        console.log(data[i].fields)
        MiddleByRegionData.push(data[i].fields)
        
      };

      var Labels = Object.keys(MiddleByRegionData[1]);
      Labels.shift();

      var lines = new Morris.Line({
        element   : 'mid-revenue-chart',
        resize    : true,

        data      : MiddleByRegionData,

        xkey      : 'year',
        ykeys     : Labels,
        labels    : Labels,
        lineColors: ['#000000', '#FF0000', '#A52A2A', '#C0C0C0', '#1c8dbc', '#0000FF', '#FFA500', '#00FF00', '#8c5dcb',
                    '#1c81a1', '#800080', '#FF00FF', '#4e8d7f', '#FFFF00'],
        hideHover : 'auto'
      });

    });



    //Primary progress circles with AJAX data
  // var OverallPrimaryTauxBrutData = [];
  var jsonData = $.ajax({
    url: '/get-overall-middle-taux-brut-json/',
    dataType: 'json',
  }).done(function (data, status){

     console.log(data);
    for (var i=0; i<data.length; i++){

      // OverallPrimaryTauxBrutData.push(data[i].fields)
      $('#progress-chart1').append("<div class='col-lg-3 col-xs-6'><center><span class='chart1' id='somechart1' data-percent="+data[i].fields.percent+"><span class='percent'>"+data[i].fields.percent+"</span></span><div class='knob-label'><big>"+data[i].fields.year+"</big></div></center></div>");
        
    };

      $(function() {
     $('.chart1').easyPieChart({
      });
    });
  });



  // var area = new Morris.Line({
  //   element   : 'mid-revenue-chart',
  //   resize    : true,
  //     data      : [
  //     { y: '2010', Dakar: 81.1, Diourbel: 21.7, Fatik: 48.5, Kaffrine: 13, Kaolack: 49.5, Kedougou: 34.2, 
  //     Kolda: 34.9, Louga: 26.5, Matam: 25.6, Sedhiou: 38.6, ST_Louis: 41.4, Tamba: 26, Thies: 51.9, Ziguinchor: 80.6 },
  //     { y: '2011', Dakar: 83.6, Diourbel: 26, Fatik: 63.9, Kaffrine: 18.3, Kaolack: 61.6, Kedougou: 47.9, 
  //     Kolda: 43.8, Louga: 34.2, Matam: 32.3, Sedhiou: 54.9, ST_Louis: 52.6, Tamba: 29.3, Thies: 60.5, Ziguinchor: 86.7 },
  //     { y: '2012', Dakar: 88.0, Diourbel: 28.6, Fatik: 64.5, Kaffrine: 20.6, Kaolack: 64.4, Kedougou: 53.7, 
  //     Kolda: 44.7, Louga: 37.4, Matam: 35.3, Sedhiou: 62.5, ST_Louis: 57.7, Tamba: 30.6, Thies: 65.1, Ziguinchor: 87.5 },
  //     { y: '2013', Dakar: 89.5, Diourbel: 30.1, Fatik: 65.6, Kaffrine: 22.0, Kaolack: 68.0, Kedougou: 52.5, 
  //     Kolda: 41.3, Louga: 39.4, Matam: 40.3, Sedhiou: 39.4, ST_Louis: 59.9, Tamba: 30.6, Thies: 70.8, Ziguinchor: 82.9 },
  //     { y: '2014', Dakar: 76.6, Diourbel: 29.0, Fatik:73.9, Kaffrine: 23.5, Kaolack: 60.1, Kedougou: 46.0, 
  //     Kolda: 39.3, Louga: 41.0, Matam: 44.8, Sedhiou:  54.2, ST_Louis: 67.8, Tamba: 34.1, Thies: 72.7, Ziguinchor: 96.1},
      
  //   ],

  //  xkey      : 'y',
  //   ykeys     : ['Dakar', 'Diourbel', 'Fatik', 'Kaffrine', 'Kaolack', 'Kedougou', 'Kolda', 'Louga', 'Matam',
  //               'Sedhiou', 'ST_Louis', 'Tamba', 'Thies', 'Ziguinchor'],
  //   labels    : ['Dakar', 'Diourbel', 'Fatik', 'Kaffrine', 'Kaolack', 'Kedougou', 'Kolda', 'Louga', 'Matam',
  //               'Sedhiou', 'ST_Louis', 'Tamba', 'Thies', 'Ziguinchor'],
  //   lineColors: ['#000000', '#FF0000', '#A52A2A', '#C0C0C0', '#1c8dbc', '#0000FF', '#FFA500', '#00FF00', '#8c5dcb',
  //               '#1c81a1', '#800080', '#FF00FF', '#4e8d7f', '#FFFF00'],
  //   hideHover : 'auto'
  // });



  //bar-chart with with ajax data
    var middlebyregiondata = [];
    var jsonData = $.ajax({
      url: '/get-middle-by-gender-json/',
      dataType: 'json',
    }).done(function (data, status) {
      for (var i=0; i< data.length; i++){
        
        middlebyregiondata.push(data[i].fields)
        
      };

      var Labels = Object.keys(middlebyregiondata[1]);
      Labels.shift();

      var bar = new Morris.Bar({
      element          : 'mid-line-chart',
      resize           : true,
      data             : middlebyregiondata,
      xkey             : 'year',
      ykeys            : Labels,
      labels           : Labels,
      lineColors       : ['#C0C0C0', '#FFFF00'],
      lineWidth        : 2,
      hideHover        : 'auto',
      });        
  });

  // var line = new Morris.Bar({
  //   element          : 'mid-line-chart',
  //   resize           : true,
   
  //    data      : [
  //     { y: '2007', males: 39.9, females: 32.4},
  //     { y: '2008', males: 42.8, females: 35.5 },
  //     { y: '2009', males: 44.1, females: 38.5 },
  //     { y: '2010', males: 44.1, females: 34.6 },
  //     { y: '2011', males: 54.0, females: 52.4 },
  //     { y: '2012', males: 56.2, females: 56.5 },
  //     { y: '2013', males: 56.9, females: 59.1 },
  //     { y: '2014', males: 52.3, females: 57.9 },
  //   ],
  //   xkey             : 'y',
  //   ykeys            : ['males', 'females'],
  //   labels           : ['males', 'females'],
  //   lineColors       : ['#C0C0C0', '#FFFF00'],
  //   lineWidth        : 2,
  //   hideHover        : 'auto',
    
  // });

  // Fix for charts under tabs
  $('.box ul.nav a').on('shown.bs.tab', function () {
    area.redraw();
    donut.redraw();
    line.redraw();
  });




  //  //Donut Chart
 //  var donut1 = new Morris.Donut({
 //    element  : 'mid-sparkline-1',
 //    resize   : true,
 //    colors   : ['#3c8dbc', '#f56954'],
 //    data     : [
 //      { label: 'males', value: 44.1 },
 //      { label: 'females', value: 34.6 },
 //    ],
 //    hideHover: 'auto'
 //  });


 //  // Donut Chart
 //  var donut2 = new Morris.Donut({
 //    element  : 'mid-sparkline-2',
 //    resize   : true,
 //    colors   : ['#3c8dbc', '#f56954'],
 //    data     : [
 //      { label: 'males', value: 54.0 },
 //      { label: 'females', value: 53.2 },
 //    ],
 //    hideHover: 'auto'
 //  });


 //   //Donut Chart
 //  var donut3 = new Morris.Donut({
 //    element  : 'mid-sparkline-3',
 //    resize   : true,
 //    colors   : ['#3c8dbc', '#f56954'],
 //    data     : [
 //      { label: 'males', value: 56.2 },
 //      { label: 'females', value: 56.5 },
 //    ],
 //    hideHover: 'auto'
 //  });


 // //Donut Chart
 //  var donut4 = new Morris.Donut({
 //    element  : 'mid-sparkline-4',
 //    resize   : true,
 //    colors   : ['#3c8dbc', '#f56954'],
 //    data     : [
 //      { label: 'males', value: 56.9 },
 //      { label: 'females', value: 59.1 },
 //    ],
 //    hideHover: 'auto'
 //  });

});