$(document).ready(function () {
    $("#changeNiveau").change(function (e) { 
        e.preventDefault();
        var niveau = $(this).val();
        // alert(niveau)

        var url = "/education/"+niveau;

        location.assign(url);
        
    });    
    // $('.list')
});