

// $("#selector").accion(function(){

// })

$("h1").html("Hola mundo");

$("#btn-1").click(function(){
    // console.log("click en el boton");
    $("h1").css("color", "red")

    $("#parrafo").fadeOut()
})

$("#btn-2").click(function(){
    $("#parrafo").fadeIn();
  
})

console.log( $("#parrafo").attr("id"));

let parrafo = document.querySelector("#parrafo");


// $(()).attr(attributeName);

$("#formulario").submit(function(event){
    event.preventDefault()
    console.log("Enviando");
     let nombre = $("#nombre").val()
    let dni = $("#dni").val()

    console.log(nombre, dni);
})


$("#generarHtml").click(function(){

    $("#contenedor").html(`
        <h2>Hola como va?</h2>
    
    `)

    $("#contenedor").text(`
    Todo bien

`)
    
})


// $(window).load(function(){
//     console.log("se cargo el sitio");
// })

// $( window ).ready(function() {
//     // Run code
//     console.log("se cargo el sitio");
//   });

//   $(document).ready(function () {
//     console.log("se cargo el sitio");
//   });


$("#contenedorText").hover( function(){
    $("#cambiarColor").addClass("agregarColor")
    $("#cambiarColor").removeClass("agregarColor")
})