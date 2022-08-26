let xhr = new XMLHttpRequest();

// metodo para abrir la peticion
xhr.open("GET", "./trailerflix.json")


// Indicar el formato de respuesta

xhr.responseType = "json";

// enviar la peticion
xhr.send()


console.log(xhr);