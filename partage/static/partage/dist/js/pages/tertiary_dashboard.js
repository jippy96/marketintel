/*
 * Description:
 *      This is a demo file used only for the main dashboard (index.html)
 **/

$(function () {

  'use strict';

  //Putting LeafletMap Instead
  var mymap = L.map('ter-world-map').setView([14.6937, -17.44406], 13);
  L.marker([14.6937, -17.44406]).addTo(mymap).bindPopup("Dakar").openPopup();

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
  maxZoom: 6,
  // attribution: 'Map data Â© OpenStreetMap contributors, ' +
  // 'CC-BY-SA, ' +
  // 'Imagery Â© Mapbox',
  id: 'mapbox.streets'
}).addTo(mymap);

  
  //Donut Chart with AJAX data

  var tetiaryByGenderDonutData = [];
var jsonData = $.ajax({
  url: '/get-secondary-by-gender-json/',
  dataType: 'json',
}).done(function (data, status){
  // console.log(data[0].fields)
  for (var i = 0; i<4; i++){
    //i is less than for since we want only four to appear in the row
    console.log(i)
    console.log(data[i].fields.year + " -> " + data[i].fields.males)
    //For each i, append the div class for a new donut
    $('#donuts').append("<div class='col-lg-3 col-xs-6'><center><div class='chart tab-pane active' id='ter-donut"+i+"' style='position: relative; height: 160px; width: 160px;'></div><div class='knob-label'><big>"+data[i].fields.year+"</big></div> </center></div>");
    // console.log(data[i].fields)
    //create a donut for each instance
    var donutA = new Morris.Donut({
    element  : 'ter-donut'+i,
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

// Donut with ajax data
  var CertificationData =[];
  var obj = {};
  var jsonData = $.ajax({
    url: '/get_certification_json/',
    dataType: 'json',
  }).done(function (data, status){
    for (var i=0; i< data.length; i++){
      //We assign new keys to the values. 
    CertificationData[i] = {'label': data[i].fields.name, 'value': data[i].fields.number_of_people}

      };  
      // console.log(CertificationData);
      var donut3 = new Morris.Donut({
        element  : 'ter-revenue-chart',
        resize   : true,
        colors   : ['#3c8dbc', '#f56954', '#0000FF', '#00FF00', '#FFFF00', '#FF00FF', '#FF0000', '#800080', '#A52A2A' ],
        data     : CertificationData,
        hideHover: 'auto'
      });

  });
//bar-chart with with ajax data
    var tertiarydata = [];
    var jsonData = $.ajax({
      url: '/get-elementary_json/',
      dataType: 'json',
    }).done(function (data, status) {
      for (var i=0; i< data.length; i++){
        
        tertiarydata.push(data[i].fields)
        
      };
      var Labels = Object.keys(tertiarydata[1])
      Labels.shift()

      var bar = new Morris.Bar({
      element          : 'ter-line-chart',
      resize           : true,
      data             : tertiarydata,
      xkey             : 'year',
      ykeys            : Labels,
      labels           : Labels,
      lineColors       : ['#C0C0C0', '#FFFF00'],
      lineWidth        : 2,
      hideHover        : 'auto',
      }); 
      // console.log(tertiarydata)
      // console.log(status)       
  });


  // var line = new Morris.Bar({
  //   element          : 'ter-line-chart',
  //   resize           : true,
   
  //    data      : [
  //     { y: '2007', males: 81.8, females: 86.0},
  //     { y: '2008', males: 88, females: 92.4 },
  //     { y: '2009', males: 89.2, females: 95.9 },
  //     { y: '2010', males: 91, females: 96.56 },
  //     { y: '2011', males: 89.5, females: 98.6 },
  //     { y: '2012', males: 88.9, females: 99.5 },
  //     { y: '2013', males: 80.8, females: 95.9 },
  //     { y: '2014', males: 76.7, females: 89.6 },
  //   ],
  //   xkey             : 'y',
  //   ykeys            : ['males', 'females'],
  //   labels           : ['males', 'females'],
  //   lineColors       : ['#C0C0C0', '#FFFF00'],
  //   lineWidth        : 2,
  //   hideHover        : 'auto',
   
  // });

  //  var donut1 = new Morris.Donut({
 //    element  : 'ter-sparkline-1',
 //    resize   : true,
 //    colors   : ['#3c8dbc', '#f56954'],
 //    data     : [
 //      { label: 'males/hommes %', value: 22.2},
 //      { label: 'females/femmes %', value: 16.5},

 //    ],
 //    hideHover: 'auto'
 //  });


 //  // Donut Chart
 //  var donut2 = new Morris.Donut({
 //    element  : 'ter-sparkline-2',
 //    resize   : true,
 //    colors   : ['#3c8dbc', '#f56954'],
 //    data     : [
 //      { label: 'males/hommes %', value: 24.3 },
 //      { label: 'females/femmes %', value: 18.9 },
 //    ],
 //    hideHover: 'auto'
 //  });


 //   //Donut Chart
 //  var donut3 = new Morris.Donut({
 //    element  : 'ter-sparkline-3',
 //    resize   : true,
 //    colors   : ['#3c8dbc', '#f56954'],
 //    data     : [
 //      { label: 'males/hommes %', value: 28.6 },
 //      { label: 'females/femmes %', value: 22.9 },
 //    ],
 //    hideHover: 'auto'
 //  });


 // //Donut Chart
 //  var donut4 = new Morris.Donut({
 //    element  : 'ter-sparkline-4',
 //    resize   : true,
 //    colors   : ['#3c8dbc', '#f56954'],
 //    data     : [
 //      { label: 'males/hommes %', value: 31.2 },
 //      { label: 'females/femmes %', value: 25.9 },
 //    ],
 //    hideHover: 'auto'
 //  });


 // var donut3 = new Morris.Donut({
  //   element  : 'ter-revenue-chart',
  //   resize   : true,
  //   colors   : ['#3c8dbc', '#f56954', '#0000FF', '#00FF00', '#FFFF00', '#FF00FF', '#FF0000', '#800080', '#A52A2A' ],
  //   data     : [
  //     { label: 'DOCTORAT', value: 576},
  //     { label: 'MASTER', value: 1010 },
  //     { label: 'MAITRISE', value: 1314 },
  //     { label: 'LICENSE', value: 747 },
  //     { label: 'DEUG', value: 728 },
  //     { label: 'BAC/BT', value: 1655 },
  //     { label: 'BFEM', value: 922},
  //     { label: 'SANS DIMPLOME', value: 137 },
  //     { label: 'AUTRE', value: 2455},
  //   ],
  //   hideHover: 'auto'
  // });



  // Fix for charts under tabs
  $('.box ul.nav a').on('shown.bs.tab', function () {
    area.redraw();
    donut.redraw();
    line.redraw();
  });

});