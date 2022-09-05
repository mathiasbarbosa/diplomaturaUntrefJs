//CONTENIDO QUE SE CARGA EN LA SECCIÓN EXPERIENCIA
function misConocimientos() {
    var arrayTecno = ['XHTML', 'CSS 2.0', 'Diseño de sitio en Flash', 'Dreamweaver', 'Formularios CGI'];
    var listadoTecno = "";
        arrayTecno.forEach(function(elemento) {
            listadoTecno = listadoTecno + "<li>" + elemento + "</li>"
        })
        $("#listadoTecnologias").html(listadoTecno);
}

//CONTENIDO DE UN ARCHIVO JSON QUE SE CARGA EN LA TABLA DE LA SECCIÓN TECNOLOGÍAS
function ajaxTecnologias() {
    var tablaHTML = "";
        $.ajax({
            url: "tecnologias.json",
            dataType: "json",
            success: function(response) {
                console.table(response);
                    $.each(response, function(i) {
                            tablaHTML += "<tr>" +
                                            "<td>" + response[i].nombre + "</td>" + 
                                            "<td>" + response[i].descripcion + "</td>" +
                                         "</tr>";
                    });
            $("tbody").html(tablaHTML);
            }
        });
}

function enviarFormulario() {
    var nombreContacto = $("#nombre");
    var telefonoContacto = $("#telefono");
    var emailContacto = $("#email");
    var comentariosContacto = $("#comentarios");
        alert("Gracias por contactarme " + nombreContacto.val() + ".\n A la brevedad te escribiré :)");
        nombreContacto.val("");
        telefonoContacto.val("");
        emailContacto.val("");
        comentariosContacto.val("");
}

//LO QUE SE EJECUTA AL CARGAR LA PÁGINA
$(document).ready(function() {
    misConocimientos();
    ajaxTecnologias();
});

//MENÚ DE NAVEGACIÓN 
$("#btnHome").click(function() {
    location.href = "#me";
});

$("#btnExperiencia").click(function() {
    location.href = "#experiencia";
});

$("#btnTecnologias").click(function() {
    location.href = "#tecnologias";
});

$("#btnPortfolio").click(function() {
    location.href = "#portfolio";
});

$("#btnContacto").click(function() {
    location.href = "#contacto";
});

//ENVÍO DEL FORMULARIO DE DATOS
$("form").submit(function() {
    enviarFormulario();
    location.href = "#me"
})