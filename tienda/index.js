import { Producto } from "./app/classProducto.js";
import { eventoAgregarProducto, eventoCategoria, eventoInput, eventoSelect, generarCards, getRequest } from "./app/funciones.js";
import {arrayProductos ,btnsCategoria, } from "./app/variables.js";




// variables globales
// let sectionProductos = document.querySelector("#contenedorProductos");
// let input = document.querySelector("#buscador input")
// let btnsCategoria = document.querySelectorAll(".btn-categoria")

// const arrayProductos = [];
// const arrayCarrito = [];

// // funciones
// const getRequest = async () => {
//     let req = await fetch("https://6334c66fea0de5318a08cd43.mockapi.io/productos")

//     let response = await req.json()
//     for (const el of response) {
//         arrayProductos.push(el)
//     }
//     localStorage.setItem("arrayProductos", JSON.stringify(arrayProductos))
//     generarCards(arrayProductos)
// }


// export const generarCards = (array) => {
//     array.forEach(element => {
//         let {nombre, precio, id, img,stock,categoria} = element
//         sectionProductos.innerHTML += `
                            
//                             <div class="card">
//                                 <img src=${img} alt="">
//                                 <h3>${nombre}</h3>
//                                 <span>$${precio}</span>
//                                 <span>Stock: ${stock}</span>
//                                 <span>Categoria: ${categoria}</span>
//                                 <button class="btn-agregar" data-id=${id}>Agregar al carrito</button>
//                             </div>
//         `
//         eventoAgregarProducto()
//     });
// }

// const eventoAgregarProducto = () => {
//     let btns = document.querySelectorAll(".btn-agregar")

//     for (const btn of btns) {
//         btn.addEventListener("click", (event) => {
//             let id = event.target.attributes[1].value;
//             console.log(id);

//             let existe = arrayCarrito.findIndex( el => el.id == id)
//             console.log(existe);
//             if (existe != -1) {
//                 console.log("entre al if");
//                 // si existe le sumamos 1 a cantidad
//                 let producto = arrayCarrito[existe]
//                 producto.sumarCantidad()
//                 console.log(arrayCarrito);
//             }else{
//                 // instanciar la clase
//                 console.log("entre al else");
//                 let resultado = arrayProductos.find( el => el.id == id)
//                 console.log(resultado.nombre);
//                 let producto = new Producto(resultado.nombre, resultado.precio, resultado.img ,resultado.id);
//                 arrayCarrito.push(producto);
//                 console.log(arrayCarrito);
//             }
//             localStorage.setItem("carrito", JSON.stringify(arrayCarrito))
//         })
//     }

// }

// input.addEventListener("input", (event) => {
//     // console.log(event.target.value);
//     sectionProductos.innerHTML = ""
//     let resultado =  arrayProductos.filter( el =>  el.nombre.includes(event.target.value));
//     console.log(resultado);
//     if (resultado.length > 0) {
//         generarCards(resultado)
//     }else{
//         sectionProductos.innerHTML = `<h3> No se encontro </h3>`
//     }
// })

// for (const btn of btnsCategoria) {
//     btn.addEventListener("click", (event) => {
//         event.preventDefault()
//         console.log(event.target.textContent);
//         let categoria = event.target.textContent.toLowerCase()
//         // let probar = categoria.toLowerCase()
//         console.log(categoria);
//         localStorage.setItem("arrayProductos", JSON.stringify(arrayProductos))
//         localStorage.setItem("categoria", categoria)
//         window.location = "./pages/productos.html"
//     })
// }

// programa
document.addEventListener("DOMContentLoaded", async () => {
    await getRequest()
    generarCards(arrayProductos)
    eventoAgregarProducto(arrayProductos)
    eventoInput(arrayProductos)
    eventoCategoria()
    eventoSelect(arrayProductos)
    console.log(arrayProductos);
})

