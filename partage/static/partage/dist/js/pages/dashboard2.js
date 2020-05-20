/*
 * Description:
 *      This is a demo file used only for the main dashboard (index.html)
 **/

$(function () {

  'use strict';

  

  //Putting LeafletMap Instead
  var mymap = L.map('sec-world-map').setView([14.6937, -17.44406], 13);
  L.marker([14.6937, -17.44406]).addTo(mymap).bindPopup("Dakar").openPopup();

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
  maxZoom: 6,
  // attribution: 'Map data Â© OpenStreetMap contributors, ' +
  // 'CC-BY-SA, ' +
  // 'Imagery Â© Mapbox',
  id: 'mapbox.streets'
}).addTo(mymap);


var SecondaryByGenderDonutData = [];
var jsonData = $.ajax({
  url: '/get-secondary-by-gender-json/',
  dataType: 'json',
}).done(function (data, status){
  // console.log(data)
  for (var i = 0; i<4; i++){

    $('#sec-donuts').append("<div class='col-lg-3 col-xs-6'><center><div class='chart tab-pane active' id='sec-donut"+i+"' style='position: relative; height: 160px; width: 160px;'></div><div class='knob-label'><big>"+data[i].fields.year+"</big></div></center></div>");
    // console.log(data[i].fields)
    //create a donut for each instance
    var donutA = new Morris.Donut({
    element  : 'sec-donut'+i,
    resize   : true,
    colors   : ['#3c8dbc', '#f56954'],
    data     : [{ label: 'males/hommes %', value: data[i].fields.males}, 
    { label: 'females/femmes %', value: data[i].fields.females}
    ],
    hideHover: 'auto'
  });

  };

   // console.log(data.length)
});



  var SecondaryByRegionData=[];
  var secondaryJsonData = $.ajax({
      url: '/secondary_by_region_json/',
      dataType: 'json',
    }).done(function (data, status){

      for (var i=0; i< data.length; i++){
        // console.log(data[i].fields)
        SecondaryByRegionData.push(data[i].fields)
        
      };

      var Labels = Object.keys(SecondaryByRegionData[1]);
      Labels.shift();

      var lines = new Morris.Line({
        element   : 'sec-revenue-chart',
        resize    : true,

        data      : SecondaryByRegionData,

        xkey      : 'year',
        ykeys     : Labels,
        labels    : Labels,
        lineColors: ['#000000', '#FF0000', '#A52A2A', '#C0C0C0', '#1c8dbc', '#0000FF', '#FFA500', '#00FF00', '#8c5dcb',
                    '#1c81a1', '#800080', '#FF00FF', '#4e8d7f', '#FFFF00'],
        hideHover : 'auto'
      });

      // console.log(Labels);
    });



    var secondarydata = [];
    var jsonData = $.ajax({
      url: '/get-secondary-by-gender-json/',
      dataType: 'json',
    }).done(function (data, status) {
      for (var i=0; i< data.length; i++){
        // console.log(data.length)
        //append result into SecondaryData
        secondarydata.push(data[i].fields)
        
      };

      //remove the first key from list of the keys
      var Labels = Object.keys(secondarydata[1]);
      //get the list of the remaining keys
      Labels.shift();

      var bar = new Morris.Bar({
      element          : 'sec-line-chart',
      resize           : true,
      data             : secondarydata,
      xkey             : 'year',
      ykeys            : Labels,
      labels           : Labels,
      lineColors       : ['#C0C0C0', '#FFFF00'],
      lineWidth        : 2,
      hideHover        : 'auto',
      });        
  });


  // Fix for charts under tabs
  $('.box ul.nav a').on('shown.bs.tab', function () {
    area.redraw();
    donut.redraw();
    line.redraw();
  });


  /* Morris.js Charts */
  // Sales chart
  // var area = new Morris.Line({
  //   element   : 'sec-revenue-chart',
  //   resize    : true,

  //  data      : [
  //     { y: '2010', Dakar: 33.4, Diourbel: 7.5, Fatik: 14.9, Kaffrine: 5, Kaolack: 19.1, Kedougou: 6, 
  //     Kolda: 13, Louga: 11.8, Matam: 5.5, Sedhiou: 11.2, ST_Louis: 15.9, Tamba: 8.7, Thies: 24.1, Ziguinchor: 47.5 },
  //     { y: '2011', Dakar: 38.8, Diourbel: 10.0, Fatik: 17.0, Kaffrine: 6.6, Kaolack: 19.1, Kedougou: 19.1, 
  //     Kolda: 13.3, Louga: 13.1, Matam: 7.7, Sedhiou: 17.7, ST_Louis: 20.1, Tamba: 10.0, Thies: 26.3, Ziguinchor: 48.9 },
  //     { y: '2012', Dakar: 45.0, Diourbel: 11.7, Fatik: 21.5, Kaffrine: 7.2, Kaolack: 26.0, Kedougou: 12.6, 
  //     Kolda: 15.9, Louga: 15.6, Matam: 10.8, Sedhiou: 23.9, ST_Louis: 26.2, Tamba: 12.1, Thies: 29.9, Ziguinchor:55.6 },
  //     { y: '2013', Dakar: 46.9, Diourbel: 13.2, Fatik: 23.7, Kaffrine: 8.4, Kaolack: 31.3, Kedougou: 16.3, 
  //     Kolda: 15.0, Louga: 18.3, Matam: 14.6, Sedhiou: 28.4, ST_Louis: 28.9, Tamba: 14.8, Thies: 36.7, Ziguinchor: 55.4},
  //     { y: '2014', Dakar: 40.3, Diourbel: 14.3, Fatik: 35, Kaffrine: 12.5, Kaolack: 33.5, Kedougou: 19.2, 
  //     Kolda: 18.9, Louga: 21.6, Matam: 17.2, Sedhiou: 31.8, ST_Louis: 33.4, Tamba: 19.6, Thies: 39, Ziguinchor: 66.7 },
      
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


  // var line = new Morris.Bar({
  //   element          : 'sec-line-chart',
  //   resize           : true,

  //    data      : [
  //     { y: '2010', males: 22.2, females: 16.5},
  //     { y: '2011', males: 24.3, females: 18.9 },
  //     { y: '2012', males: 28.6, females: 22.9 },
  //     { y: '2013', males: 31.2, females: 25.9 },
  //     { y: '2014', males: 33.6, females: 28.6 },
  //   ],
  //   xkey             : 'y',
  //   ykeys            : ['males', 'females'],
  //   labels           : ['males', 'females'],
  //   lineColors       : ['#C0C0C0', '#FFFF00'],
  //   lineWidth        : 2,
  //   hideHover        : 'auto',
  // });


  //Donut Chart
 //  var donut1 = new Morris.Donut({
 //    element  : 'sec-sparkline-1',
 //    resize   : true,
 //    colors   : ['#3c8dbc', '#f56954'],
 //    data     : [
 //      { label: 'males/hommes %', value: 22.2},
 //      { label: 'females/femmes %', value: 16.5}
 //    ],
 //    hideHover: 'auto'
 //  });

});