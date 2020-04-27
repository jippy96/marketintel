$(document).ready(function () {

    var year_selected = new Date().getFullYear();

    // controle select pour récupérer l'année de visualisation
    $('#yearPrescolaire').change(function (e) {
        e.preventDefault();

        year_selected = $(this).val();
        var url = "/education/prescolaire/" + year_selected;
        location.assign(url);

    });

    // // controle pour recupérer la valeur du select pour le type de niveau préscolaire
    $('#niveau').change(function (e) {
        e.preventDefault();
        var niveau_selected = $(this).val();

        // alert(year_selected)
        switch (niveau_selected) {
            case "ps":
                get_data_for("ps", year_selected);
                break;
            case "ms":
                get_data_for("ms", year_selected);
                break;
            case "gs":
                get_data_for("gs", year_selected);
                break;
            default:
                break;
        }

    });


    // récupération du paramètre de l'année dans l'URL
    var pathname = location.pathname;

    var annee = pathname.split("/")[3];

    if (annee == null || annee == "") {
        year_selected = new Date().getFullYear();
    } else {
        year_selected = annee;
    }

    // taux brut préscolarisation au chargement de la page
    var tab_garcons = [];
    var tab_filles = [];

    $.ajax({
        type: "GET",
        url: "/education/prescolaire/" + year_selected,
        data: {
            type: "PRESCOLARISATION",
        },
        dataType: "json",
        success: function (response) {
            if (response.regions.length != 0) {
                for (index = 0; index < response.regions.length; index++) {
                    tab_garcons.push(
                        {
                            y: response.regions[index].garcon, label: response.regions[index].region
                        },
                    );
                    tab_filles.push(
                        {
                            y: response.regions[index].fille, label: response.regions[index].region
                        }
                    );
                }

                var options = {
                    animationEnabled: true,
                    title: {
                        text: ""
                    },
                    axisY: {
                        title: "Total Garçon et Fille (%)"
                    },
                    toolTip: {
                        shared: true,
                        reversed: true
                    },
                    data: [{
                        type: "stackedColumn",
                        name: "% Garçons préscolarisés",
                        showInLegend: "true",
                        yValueFormatString: "#,##%",
                        dataPoints: tab_garcons
                    },
                    {
                        type: "stackedColumn",
                        name: "% Filles préscolarisées",
                        showInLegend: "true",
                        yValueFormatString: "#,##%",
                        dataPoints: tab_filles
                    }]
                };

                $("#myChartTBP").CanvasJSChart(options);
            } else {

                // on affiche le loader
                $("#myChartTBP").remove();
                $(".loader").css("visibility", "visible");
                $("#myChartTBA").remove();
            }
        }

    });

    // // Taux brut d'admission
    function get_data_for(niveau, year_selected) {

        tab_filles = [];
        tab_garcons = [];

        $.ajax({
            type: "GET",
            url: "/education/prescolaire/" + year_selected,
            data: {
                type: "TBA",
                niveau: niveau,
            },
            dataType: "json",
            success: function (response) {
                if (response.regions.length != 0) {
                    for (index = 0; index < response.regions.length; index++) {
                        tab_garcons.push(
                            {
                                y: response.regions[index].garcon, label: response.regions[index].region
                            },
                        );
                        tab_filles.push(
                            {
                                y: response.regions[index].fille, label: response.regions[index].region
                            }
                        );
                        $('.niveau').text(response.regions[index].niveau);
                    }

                    var options = {
                        animationEnabled: true,
                        title: {
                            text: ""
                        },
                        axisY: {
                            title: "Total Garçon et Fille (%)"
                        },
                        toolTip: {
                            shared: true,
                            reversed: true
                        },
                        data: [{
                            type: "stackedColumn",
                            name: "% Garçons",
                            showInLegend: "true",
                            yValueFormatString: "#,##%",
                            dataPoints: tab_garcons
                        },
                        {
                            type: "stackedColumn",
                            name: "% Filles",
                            showInLegend: "true",
                            yValueFormatString: "#,##%",
                            dataPoints: tab_filles
                        }]
                    };

                    $("#myChartTBA").CanvasJSChart(options);
                } else {

                    // on affiche le loader
                    $("#myChartTBA").remove();
                    $(".loader").css("visibility", "visible");
                }

            }
        });
    }

    // // Affichage du taux brut d'admission au chargement de la page
    $.ajax({
        type: "GET",
        url: "/education/prescolaire/" + year_selected,
        data: {
            type: "TBA",
            niveau: "ps",
        },
        dataType: "json",
        success: function (response) {
            // console.log(response.regions);
            if (response.regions != null) {
                tab_garcons = [];
                tab_filles = [];

                for (index = 0; index < response.regions.length; index++) {
                    // console.log(response.regions[index].region); 
                    tab_garcons.push(
                        {
                            y: response.regions[index].garcon, label: response.regions[index].region
                        },
                    );
                    tab_filles.push(
                        {
                            y: response.regions[index].fille, label: response.regions[index].region
                        }
                    );

                    $('.niveau').text(response.regions[index].niveau);
                }

                var options = {
                    animationEnabled: true,
                    title: {
                        text: ""
                    },
                    axisY: {
                        title: "Total Garçon et Fille (%)"
                    },
                    toolTip: {
                        shared: true,
                        reversed: true
                    },
                    data: [{
                        type: "stackedColumn",
                        name: "% Garçons",
                        showInLegend: "true",
                        yValueFormatString: "#,##%",
                        dataPoints: tab_garcons
                    },
                    {
                        type: "stackedColumn",
                        name: "% Filles",
                        showInLegend: "true",
                        yValueFormatString: "#,##%",
                        dataPoints: tab_filles
                    }]
                };

                $("#myChartTBA").CanvasJSChart(options);
            } else {

                $("#myChartTBA").css("visibility", "hidden");
                $(".loader").css("visibility", "visible");

            }


        }
    });



    // test chart js

    // end for /education/prescolaire
});
