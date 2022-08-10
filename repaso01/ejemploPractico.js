
// ejercicio pedir nombre y precio de producto, almacenarlo en localStorage, al hacer click en cargar productos debemos traer los datos guardados y pintar la interfaz html

const arrayProductos = [];

let formulario = document.querySelector("#formulario");
let nombre = document.querySelector("#nombre")
let precio = document.querySelector("#precio")
console.log(formulario);
let contenedor = document.querySelector("#container");

const generarInterfaz = (array) => {
    contenedor.innerHTML = ""
    array.map( el => contenedor.innerHTML += `
        <h1>${el.nombre}</h1>
        <h1>${el.precio}</h1>
    `)
}

formulario.addEventListener("submit", (evento) => {
     evento.preventDefault()
     console.log(nombre.value , precio.value);
     let producto = {
        nombre: nombre.value,
        precio: precio.value
     }
     arrayProductos.push(producto)
     localStorage.setItem("productos",JSON.stringify(arrayProductos) )
     console.log(arrayProductos);
     //
     generarInterfaz(arrayProductos)
})

// let btnCargar = document.getElementById("btnCargar")

// btnCargar.addEventListener("click", () => {
//     let arrayLocalStorage = JSON.parse(localStorage.getItem("arrayLocalStorage"))
//     console.log(arrayLocalStorage);
//     generarInterfaz(arrayLocalStorage)
// })


// let buscador = document.getElementById("buscador");

// buscador.addEventListener("keyup", (evento) => {
//     let resultado = arrayProductos.filter( el => el.nombre.includes( evento.target.value) )
//     console.log(resultado);
// })








