var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}

window.onload = function () {

    //Better to construct options first and then pass it as a parameter

    CanvasJS.addColorSet("greenShades",
        [//colorSet Array

            "#30E0B9",
        ]);

    var options = {
        theme: "light2",
        colorSet: "greenShades",
        title: {
            text: ""
        },
        data: [
            {
                // Change type to "doughnut", "line", "splineArea", etc.
                type: "column",
                dataPoints: [
                    { label: "apple", y: 10 },
                    { label: "orange", y: 15 },
                    { label: "banana", y: 25 },
                    { label: "mango", y: 30 },
                    { label: "grape", y: 28 }
                ]
            }
        ]
    };

    $("#chartContainer1").CanvasJSChart(options);

    // taux de diplomé / cycle
    var options2 = {
        animationEnabled: true,
        title: {
            text: ""
        },
        data: [{
            type: "doughnut",
            innerRadius: "60%",
            showInLegend: false,
            legendText: "{label}",
            indexLabel: "{label}: #percent%",
            dataPoints: [
                { label: "Department Stores", y: 6492917 },
                { label: "Discount Stores", y: 7380554 },

            ]
        }]
    };
    $("#chartContainer2").CanvasJSChart(options2);

    // taux de diplomé / cycle
    var options3 = {
        animationEnabled: true,
        title: {
            text: ""
        },
        data: [{
            type: "doughnut",
            innerRadius: "60%",
            showInLegend: false,
            legendText: "{label}",
            indexLabel: "{label}: #percent%",
            dataPoints: [
                { label: "Department Stores", y: 6492917 },
                { label: "Discount Stores", y: 7380554 },

            ]
        }]
    };
    $("#chartContainer").CanvasJSChart(options3);

    // taux d'apprenants
    //Better to construct options first and then pass it as a parameter
    var options4 = {
        animationEnabled: true,
        title: {
            text: "",
        },
        axisY: {
            tickThickness: 0,
            lineThickness: 0,
            valueFormatString: " ",
            gridThickness: 0
        },
        axisX: {
            tickThickness: 0,
            lineThickness: 0,
            labelFontSize: 18,
            labelFontColor: "Peru"
        },
        data: [{
            indexLabelFontSize: 12,
            toolTipContent: "<span style=\"color:#62C9C3\">{indexLabel}:</span> <span style=\"color:#CD853F\"><strong>{y}</strong></span>",
            indexLabelPlacement: "outside",
            indexLabelFontColor: "black",
            indexLabelFontWeight: 100,
            indexLabelFontFamily: "Verdana",
            color: "#62C9C3",
            type: "bar",
            dataPoints: [
                { y: 21, label: "21%", indexLabel: "Video" },
                { y: 25, label: "25%", indexLabel: "Dining" },
                { y: 33, label: "33%", indexLabel: "Entertainment" },
                { y: 36, label: "36%", indexLabel: "News" },
                { y: 42, label: "42%", indexLabel: "Music" },
                { y: 49, label: "49%", indexLabel: "Social Networking" },
                { y: 50, label: "50%", indexLabel: "Maps/ Search" },
                { y: 55, label: "55%", indexLabel: "Weather" },
                { y: 61, label: "61%", indexLabel: "Games" }
            ]
        }]
    };

    $("#chartContainer4").CanvasJSChart(options4);


    //Taux brut d'admission
    var options = {
        animationEnabled: true,
        title: {
            text: "Coal Reserves of Countries"
        },
        axisY: {
            title: "Coal (mn tonnes)"
        },
        toolTip: {
            shared: true,
            reversed: true
        },
        data: [{
            type: "stackedColumn",
            name: "Anthracite and Bituminous",
            showInLegend: "true",
            yValueFormatString: "#,##0mn tonnes",
            dataPoints: [
                { y: 111338, label: "USA" },
                { y: 49088, label: "Russia" },
                { y: 62200, label: "China" },
                { y: 90085, label: "India" },
                { y: 38600, label: "Australia" },
                { y: 48750, label: "SA" }
            ]
        },
        {
            type: "stackedColumn",
            name: "SubBituminous and Lignite",
            showInLegend: "true",
            yValueFormatString: "#,##0mn tonnes",
            dataPoints: [
                { y: 135305, label: "USA" },
                { y: 107922, label: "Russia" },
                { y: 52300, label: "China" },
                { y: 3360, label: "India" },
                { y: 39900, label: "Australia" },
                { y: 0, label: "SA" }
            ]
        }]
    };

    $("#chartContainer").CanvasJSChart(options);
}

// controle pour recupérer la valeur du select pour le type de niveau préscolaire
$('#niveau').change(function (e) {
    e.preventDefault();
    var niveau_selected = $(this).val();

    switch (niveau_selected) {
        case "ps":
            get_data_for("ps");
            break;
        case "ms":
            get_data_for("ms");
            break;
        case "gs":
            get_data_for("gs");
            break;
        default:
            break;
    }

});
// fonction requetes Ajax /education/prescolaire
function get_data_for(niveau) {

    var label_regions = [];
    var percent_garcon = [];
    var percent_fille = [];
    var color_garcon = [];
    var color_fille = [];

    $.ajax({
        type: "GET",
        url: "/education/prescolaire",
        data: {
            type: "bar",
            niveau: niveau
        },
        dataType: "json",
        success: function (response) {
            for (index = 0; index < response.regions.length; index++) {
                // console.log(response.regions[index].region); 
                label_regions.push(response.regions[index].region);
                percent_garcon.push(response.regions[index].garcon);
                percent_fille.push(response.regions[index].fille);
                color_garcon.push('rgba(35, 18, 225, 0.5)');
                color_fille.push('rgba(255, 99, 132, 0.5)');

                $('.niveau').text(response.regions[index].niveau);
            }

            // test chart js
            var ctx = document.getElementById('myChart').getContext('2d');
            // console.log(label_regions);
            var myChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: label_regions,
                    datasets: [{
                        label: '% Garçon',
                        data: percent_garcon,
                        backgroundColor: color_garcon,
                        borderColor: [
                            'rgba(35, 18, 225, 0.795)',
                            // 'rgba(54, 162, 235, 1)',
                            // 'rgba(255, 206, 86, 1)',
                            // 'rgba(75, 192, 192, 1)',
                            // 'rgba(153, 102, 255, 1)',
                            // 'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }, {
                        label: '% Fille',
                        data: percent_fille,
                        backgroundColor: color_fille,
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            // 'rgba(54, 162, 235, 1)',
                            // 'rgba(255, 206, 86, 1)',
                            // 'rgba(75, 192, 192, 1)',
                            // 'rgba(153, 102, 255, 1)',
                            // 'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }
            });
        }
    });
}

var label_regions = [];
var percent_garcon = [];
var percent_fille = [];
var color_garcon = [];
var color_fille = [];

$.ajax({
    type: "GET",
    url: "/education/prescolaire",
    data: {
        type: "bar",
        niveau: "ps"
    },
    dataType: "json",
    success: function (response) {
        for (index = 0; index < response.regions.length; index++) {
            // console.log(response.regions[index].region); 
            label_regions.push(response.regions[index].region);
            percent_garcon.push(response.regions[index].garcon);
            percent_fille.push(response.regions[index].fille);
            color_garcon.push('rgba(35, 18, 225, 0.5)');
            color_fille.push('rgba(255, 99, 132, 0.5)');

            $('.niveau').text(response.regions[index].niveau);
        }

        // test chart js
        var ctx = document.getElementById('myChart').getContext('2d');
        // console.log(label_regions);
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: label_regions,
                datasets: [{
                    label: '% Garçon',
                    data: percent_garcon,
                    backgroundColor: color_garcon,
                    borderColor: [
                        'rgba(35, 18, 225, 0.795)',
                        // 'rgba(54, 162, 235, 1)',
                        // 'rgba(255, 206, 86, 1)',
                        // 'rgba(75, 192, 192, 1)',
                        // 'rgba(153, 102, 255, 1)',
                        // 'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }, {
                    label: '% Fille',
                    data: percent_fille,
                    backgroundColor: color_fille,
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        // 'rgba(54, 162, 235, 1)',
                        // 'rgba(255, 206, 86, 1)',
                        // 'rgba(75, 192, 192, 1)',
                        // 'rgba(153, 102, 255, 1)',
                        // 'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
    }
});



