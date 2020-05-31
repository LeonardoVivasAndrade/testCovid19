$('#radioBtn a').on('click', function () {    
    var sel = $(this).data('title');
    var tog = $(this).data('toggle');
    $('#' + tog).prop('value', sel);

    $('a[data-toggle="' + tog + '"]').not('[data-title="' + sel + '"]').removeClass('active').addClass('notActive');
    $('a[data-toggle="' + tog + '"][data-title="' + sel + '"]').removeClass('notActive').addClass('active');

});



function validar(){
    var p1 = document.getElementById("p1").value;
    var p2 = document.getElementById("p2").value;
    var p3 = document.getElementById("p3").value;
    var p4 = document.getElementById("p4").value;
    var p5 = document.getElementById("p5").value;
    var p6 = document.getElementById("p6").value;
    var p7 = document.getElementById("p7").value;
    var p8 = document.getElementById("p8").value;
    var p9 = document.getElementById("p9").value;
    var p10 = document.getElementById("p10").value;
    var p11 = document.getElementById("p11").value;
    
    if(p1==="" || p2==="" || p3==="" || p4==="" || p5===""  || p6==="" 
               || p7==="" || p8==="" || p9==="" || p10==="" || p11==="" ){
           
        
        $(".modal-body #ln1").text("Falta alguna pregunta por marcar!");        
        $("#ventana").modal('show');
    }
    else{
        loadProlog();
    }
    
    
    
}