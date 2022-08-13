const arrayProductos = [
    {   id:1,
        producto:"remera",
        precio:50,
    },
    {   id:2,
        producto:"jean",
        precio:150,
    },
    {   id:3,
        producto:"zapatillas",
        precio:450,
    },
]

let main = document.createElement('main')
main.className = "containerPrincipal"

document.body.appendChild(main)


// for (let i = 0; i < arrayProductos.length; i++) {
//     crearCards(arrayProductos[i].id, arrayProductos[i].producto, arrayProductos[i].precio)
//     // asignarEventoEliminar(arrayProductos[i].id)
// }

for (const elemento of arrayProductos) {
    crearCards(elemento.id, elemento.producto, elemento.precio)
}

let botones = document.querySelectorAll(".btn")
console.log(botones);

for (const btn of botones) {
    btn.addEventListener("click", (evento) => {
        console.log(evento.target.parentNode);
        let contenedor = evento.target.parentNode
        contenedor.remove()
    })
}

function crearCards(id, producto, precio){
    let div = document.createElement('div')
    div.className = "containerItem"
    let h3 = document.createElement("h3")
    h3.className = "card-title"
    h3.innerText = producto

    let p = document.createElement('p')

    p.innerText = precio
    p.className = "card-text"

    let btn = document.createElement('button')
    btn.innerText = "eliminar"
    btn.id = id
    btn.className = "btn btn-primary"

    div.append(h3, p, btn)

    main.appendChild(div)


}


// function asignarEventoEliminar(id){

//     let btn = document.getElementById(id)
//     console.log(btn);

//     btn.addEventListener("click", (evento) => {
//         // console.dir(evento.target);
//         // console.dir(evento.target.parentNode, "click");
//         console.dir(evento.target.parentNode)
//         console.dir(evento.target.parentElement);
//         ;
//         let contenedor = evento.target.parentNode
//         console.log(contenedor);
//         contenedor.remove()
//     })
// }