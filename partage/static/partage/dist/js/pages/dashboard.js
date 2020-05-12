/*
 * Description:
 *      This is a demo file used only for the main dashboard (index.html)
 **/
 
$(function () {

  'use strict';

  // Make the dashboard widgets sortable Using jquery UI
  $('.connectedSortable').sortable({
    placeholder         : 'sort-highlight',
    connectWith         : '.connectedSortable',
    handle              : '.box-header, .nav-tabs',
    forcePlaceholderSize: true,
    zIndex              : 999999
  });
  $('.connectedSortable .box-header, .connectedSortable .nav-tabs-custom').css('cursor', 'move');

  

  //Putting LeafletMap Instead
  var mymap = L.map('world-map').setView([14.6937, -17.44406], 13);
  L.marker([14.6937, -17.44406]).addTo(mymap).bindPopup("Dakar").openPopup();

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
  maxZoom: 6,
  // attribution: 'Map data Â© OpenStreetMap contributors, ' +
  // 'CC-BY-SA, ' +
  // 'Imagery Â© Mapbox',
  id: 'mapbox.streets'
}).addTo(mymap);


  var PrimaryByRegionData=[];
  var primaryJsonData = $.ajax({
      url: '/primary_by_region_json/',
      dataType: 'json',
    }).done(function (data, status){

      //Morris line chart with AJAX data

      for (var i=0; i< data.length; i++){
        // console.log(data[i].fields)
        PrimaryByRegionData.push(data[i].fields)
        
      };

      //To get an array of the labels
      var labels_keys = Object.keys(PrimaryByRegionData[1]);
      labels_keys.shift();


      var lines = new Morris.Line({
        element   : 'line-chart',
        resize    : true,

        data      : PrimaryByRegionData,

        xkey      : 'year',
        ykeys     : labels_keys,
        labels    : labels_keys,
        lineColors: ['#000000', '#FF0000', '#A52A2A', '#C0C0C0', '#1c8dbc', '#0000FF', '#FFA500', '#00FF00', '#8c5dcb',
                    '#1c81a1', '#800080', '#FF00FF', '#4e8d7f', '#FFFF00'],
        hideHover : 'auto'
      });

      // var myvar = Object.keys(PrimaryByRegionData[1]);
      // console.log(myvar);
      // removed = myvar.shift();
      // console.log(labels_keys);
    
    });




  
//bar-chart with with ajax data
    var elementarydata = [];
    var jsonData = $.ajax({
      url: '/get-elementary_json/',
      dataType: 'json',
    }).done(function (data, status) {

      for (var i=0; i< data.length; i++){
        
        elementarydata.push(data[i].fields)
        
      };

      var Labels = Object.keys(elementarydata[1]);
      Labels.shift();

      var bar = new Morris.Bar({
      element          : 'bar-chart',
      resize           : true,
      data             : elementarydata,
      xkey             : 'year',
      ykeys            : Labels,
      labels           : Labels,
      lineColors       : ['#C0C0C0', '#FFFF00'],
      lineWidth        : 2,
      hideHover        : 'auto',
      });        
  });

//Primary progress circles with AJAX data
// var OverallPrimaryTauxBrutData = [];
var jsonData = $.ajax({
  url: '/get-overall-primary-taux-brut-json/',
  dataType: 'json',
}).done(function (data, status){

  // console.log(data);
  for (var i=0; i<data.length; i++){

    // OverallPrimaryTauxBrutData.push(data[i].fields)
    $('#progress-chart').append("<div class='col-lg-3 col-xs-6'><center><span class='chart' id='somechart' data-percent="+data[i].fields.percent+"><span class='percent'>"+data[i].fields.percent+"</span></span><div class='knob-label'><big>"+data[i].fields.year+"</big></div></center></div>");
      
  };

  $(function() {
 $('.chart').easyPieChart({
  });
});

  // console.log(OverallPrimaryTauxBrutData)

});
  // var myline_var = line.data;
  
  // for (var i=0; i<myline_var.length; i++){
  //   for (var ii=0; ii<myline_var[i].y.length; ii++){
  //     console.log(myline_var[i].y[ii]);

  //   }

  // };
  
  // console.log('the males value is'+ " " + line.data[0].y[0]);



// var area = new Morris.Line({
  //   element   : 'line-chart',
  //   resize    : true,

  //  data      : [
  //     { y: '2010', Dakar: 117.1, Diourbel: 58.4, Fatik: 101.6, Kaffrine: 48.6, Kaolack: 109.5, Kedougou: 105, 
  //     Kolda: 110.4, Louga: 75.5, Matam: 84.7, Sedhiou: 123.3, ST_Louis: 93.2, Tamba: 70.6, Thies: 104.2, Ziguinchor: 110.3 },
  //     { y: '2011', Dakar: 116, Diourbel: 58.6, Fatik: 97.8, Kaffrine: 50.8, Kaolack: 108.2, Kedougou: 108.3, 
  //     Kolda: 110.5, Louga: 74.8, Matam: 84.1, Sedhiou: 126.5, ST_Louis: 92.8, Tamba: 72.6, Thies: 104.7, Ziguinchor:102.8 },
  //     { y: '2012', Dakar: 116.1, Diourbel: 60.6, Fatik: 94.1, Kaffrine: 54.8, Kaolack: 109, Kedougou: 107.1, 
  //     Kolda: 109.4, Louga: 75.7, Matam: 83.9, Sedhiou: 125.3, ST_Louis: 92.6, Tamba: 71.2, Thies: 106, Ziguinchor:101.9 },
  //     { y: '2013', Dakar: 115.9, Diourbel: 61.9, Fatik: 90.9, Kaffrine: 53, Kaolack: 106.5, Kedougou: 100.8, 
  //     Kolda: 104.6, Louga: 76.1, Matam: 100.7, Sedhiou: 126.4, ST_Louis: 89.6, Tamba: 70, Thies: 107.5, Ziguinchor:98 },
  //     { y: '2014', Dakar: 100.6, Diourbel: 52.7, Fatik: 87.2, Kaffrine: 47.5, Kaolack: 78.7, Kedougou: 110, 
  //     Kolda: 88.3, Louga: 66.3, Matam: 68.6, Sedhiou: 99.8, ST_Louis: 83.2, Tamba: 73.9, Thies: 94.6, Ziguinchor: 116.1 },
      
  //   ],

  //   xkey      : 'y',
  //   ykeys     : ['Dakar', 'Diourbel', 'Fatik', 'Kaffrine', 'Kaolack', 'Kedougou', 'Kolda', 'Louga', 'Matam',
  //               'Sedhiou', 'ST_Louis', 'Tamba', 'Thies', 'Ziguinchor'],
  //   labels    : ['Dakar', 'Diourbel', 'Fatik', 'Kaffrine', 'Kaolack', 'Kedougou', 'Kolda', 'Louga', 'Matam',
  //               'Sedhiou', 'ST_Louis', 'Tamba', 'Thies', 'Ziguinchor'],
  //   lineColors: ['#000000', '#FF0000', '#A52A2A', '#C0C0C0', '#1c8dbc', '#0000FF', '#FFA500', '#00FF00', '#8c5dcb',
  //               '#1c81a1', '#800080', '#FF00FF', '#4e8d7f', '#FFFF00'],
  //   hideHover : 'auto'
  // });





// var line = new Morris.Bar({
  //   element          : 'bar-chart',
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


});