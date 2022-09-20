
const api_key = "DXUzg0UXNm2i83xFQP9qrzbWIjmCot7C";
const url_trending = `https://api.giphy.com/v1/gifs/trending?api_key=${api_key}&limit=25&rating=g`;
const url_search = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&limit=25&offset=0&rating=g&lang=en&q=`;
let divContenedor = document.querySelector("#contenedor")
let inputBuscador = document.querySelector("#busqueda")

let db;

const request = async (url) => {
    try {
        let respuesta =  await fetch(url);
        console.log(respuesta);
         let datos =  await  respuesta.json()
         console.log(datos);
         db = datos.data
        pintarItems(db)
         console.log(datos.data[0].images.downsized);
        
    } catch (error) {
        
        divContenedor.innerHTML = `<h1> Error en la solicitud</h1>`
    }
}

request(url_trending)

function pintarItems(arrayGifs){
    divContenedor.innerHTML = ""
    arrayGifs.map( el => {
        divContenedor.innerHTML += `<img src=${el.images.downsized.url} alt=""> `
    })

}

inputBuscador.addEventListener("input", (evento) => {
    console.log(evento.target.value);
    let palabraABuscar = evento.target.value
    request(url_search+palabraABuscar)

})