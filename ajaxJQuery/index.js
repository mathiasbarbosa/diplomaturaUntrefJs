// // instanciamos el objeto
// let xhr = new XMLHttpRequest();

// // metodo para abrir la peticion
// xhr.open("GET", "./trailerflix.json")


// // Indicar el formato de respuesta

// xhr.responseType = "json";

// // enviar la peticion
// xhr.send()

// xhr.addEventListener("load", () => {
//     if(xhr.status != 200){
//         alert("Error")
//     }else{
//         console.log(xhr.response);
//     }
// })


//  console.log(xhr);


// Jquery ajax

let db = [];

function pintarHtml(datos){

    $.each(datos, function (indexInArray, valueOfElement) { 
        $("#container").append(`<img src=${valueOfElement.poster} alt="">`)
    });

}

// estructura peticion get con ajax.

$.ajax({
    type:"",
    url: "",
    contentType: "",

    // funciones
    success: function() { },

    error: function() { },

    complete: function() { },

})

function requestGet(){
    $.ajax({
        type: "GET",
        url: "./trailerflix.json",
        contentType: "application/json",

        beforeSend: function(response){
            console.log(response);
        },
        // cuando sale de manera exitosa
        success: function(data){
                console.log(data);
                db = data
        },
        
        // si ocurre un error
        error: function (error){
            console.dir(error);
        },

        complete: function (response) {
            console.log(response);
            if (response.status == 200) {
                alert("generar tarjetas")
                pintarHtml(db)
            }else if( response.status == 404){
                alert("tenemos un error no te podemos mostrar la info")
            }
        }

    })

}


// POST con xml
// function enviarPeticion(parametro){
//     let xhr = new XMLHttpRequest()

//     let json = JSON.stringify(parametro)

//     xhr.open("POST", "https://jsonplaceholder.typicode.com/posts")
//     xhr.setRequestHeader('Content-type', 'application/json; charset=UTF-8',)

//     xhr.send(json)

//     xhr.addEventListener("load", () => {
//         console.log(xhr.response);
//     })
// }


// estructura peticion post con ajax.

$.ajax({
    type:"",
    url: "",
    contentType: "",
    data: "",

    // funciones
    success: function() { },

    error: function() { },

    complete: function() { },

})
const requestPost = () => {
    
    $.ajax({
        type: "POST",
        url: "https://jsonplaceholder.typicode.com/posts",
        contentType: "application/json",
        data: JSON.stringify({nombre:"Juanb", apellido:"algo"}),

        success: function(response){
            console.log(response);
        },

        error: function(error){
            console.log(error);
        },

        complete: function(response){
            console.log(response);
        }
    })
}


$(document).ready( function(){
    requestGet()
    // requestPost()
})