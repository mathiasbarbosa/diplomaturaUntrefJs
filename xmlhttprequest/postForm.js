let formulario = document.querySelector("#formulario");

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault()
    console.log("submit", evento);
    let nodo = evento.target;
    console.log(evento);

    let nombre = document.querySelector("#nombre").value
    // console.log(nodo[0].value);
    let usuario = {
        nombre: nombre,
        apellido: nodo[1].value,
        tel: nodo[2].value
    }

    enviarPeticion(usuario)
    console.log(usuario);
})

function enviarPeticion(parametro){
    let xhr = new XMLHttpRequest()

    let json = JSON.stringify(parametro)

    xhr.open("POST", "https://jsonplaceholder.typicode.com/posts")
    xhr.setRequestHeader('Content-type', 'application/json; charset=UTF-8',)

    xhr.send(json)

    xhr.addEventListener("load", () => {
        console.log(xhr.response);
    })
}