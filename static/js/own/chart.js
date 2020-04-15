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
}


