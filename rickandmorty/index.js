


function realizarPeticion (url) {
    // instanciamos el objeto
let xhr = new XMLHttpRequest();

// metodo para abrir la peticion
xhr.open("GET", url)


// Indicar el formato de respuesta

xhr.responseType = "json";

// enviar la peticion
xhr.send()

xhr.addEventListener("load", () => {
    if(xhr.status != 200){
        alert("Error")
    }else{
        let response = xhr.response.results;
        console.log(response);
        generarInterfaz(response)
    }
})


 console.log(xhr);
}

realizarPeticion("https://rickandmortyapi.com/api/character")

function generarInterfaz(parametroArray){
    let contenedor = document.querySelector("#contenedor");
    contenedor.innerHTML = ""
    parametroArray.map( elemento => {
        contenedor.innerHTML += `
            <img src=${elemento.image} id=${elemento.id} alt=${elemento.name}>
        `
    })


}

function buscador() {
    let input = document.querySelector("#buscador");
    let key = ""
    input.addEventListener("keyup", (evento) => {
        key = evento.target.value
        if (key != "") {
            realizarPeticion(`https://rickandmortyapi.com/api/character/?name=${key}`)
            
        }
    })
   
 }

buscador()