// instanciamos el objeto
let xhr = new XMLHttpRequest();

// metodo para abrir la peticion
xhr.open("GET", "./trailerflix.json")


// Indicar el formato de respuesta

xhr.responseType = "json";

// enviar la peticion
xhr.send()

xhr.addEventListener("load", () => {
    if(xhr.status != 200){
        alert("Error")
    }else{
        console.log(xhr.response);
    }
})


 console.log(xhr);