function loadProlog() {
    var session = pl.create(1000);
    session.consult('covid19.pl');

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

    //Hace el query con los parametros obtenidos en la vistas (y/n)
    session.query("test(X," + p1 + "," + p2 + "," + p3 + "," + p4 + "," + p5 + "," + p6 +
            "," + p7 + "," + p8 + "," + p9 + "," + p10 + "," + p11 + ").");

    //OutPut de la respuesta de Prolog
    function inform(msg) {
        var title = "Este test se ha realizado con el Lenguaje de Programación Prolog, \n\n\
                    bajo un Sistema Experto con Inteligencia Artifical.";

        var res = msg.split("X = '");
        var msg = res[1];
        var res = msg.split("' ;");
        var msg = res[0];
        
        var cuerpo = "Resultado: "+ msg;
        
        $(".modal-body #ln1").text(title );
        $(".modal-body #ln2").text(cuerpo);
        $("#ventana").modal('show');
        document.getElementById('show_result1').innerHTML = '<div class="center">' + cuerpo + '</div>';
    }

    //Funcion answer para obtener la respuesta de Prolog
    var callback = function (answer) {
        inform(pl.format_answer(answer));
    };

    session.answer(callback);


}

