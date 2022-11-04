// import { generarCards } from "./funciones.js";

import { Producto } from "./classProducto.js";
// let carrito = {
//     productos: JSON.parse( localStorage.getItem("carrito")) || [],
    
//     total: () => {
//         // logica
//         let array = carrito.productos;

//         let resultado = array.reduce( (acc, el) => acc + Number(el.precio) * Number(el.cantidad), 0  )
//         console.log(resultado);
//         let h2 = document.createElement("h2");
//         h2.textContent = resultado;

//         document.querySelector("#contenedorProductos").appendChild(h2)

//     },

//     generarHtml: function () {
//         let array = carrito.productos;
//         // for (const item of array) {
//         //     document.querySelector("#carrito").innerHTML += `
                
            
//         //     `
//         // }
//         generarCards(array)
//     }
// }

// console.log(carrito.productos);

// carrito.total()
// carrito.generarHtml()

const arrayCarrito = [];
const divProductos = document.querySelector("#carrito")

const total = () => {
        let resultado = arrayCarrito.reduce( (acc, el) => acc + Number(el.precio) * Number(el.cantidad), 0  )
        let h2 = document.createElement("h2");
        h2.textContent = resultado;
        console.log(h2);
        document.querySelector("#finalizarCompra").appendChild(h2)
        // document.body.appendChild(h2)
}


const sumarCantidad = () => {
    let btns = document.querySelectorAll(".sumarCantidad");

    for (const btn of btns) {
        btn.addEventListener("click", (event) => {
            // console.log(event.target.parentNode.id);
            let busqueda = arrayCarrito.findIndex( el => el.id == event.target.parentNode.id)
            // busqueda.sumarCantidad()
            console.log(busqueda);
            arrayCarrito[busqueda].sumarCantidad()
            console.log(arrayCarrito);
            localStorage.setItem("carrito", JSON.stringify(arrayCarrito))
            
            generarHtml(JSON.parse(localStorage.getItem("carrito")))
        })
    }
}

const restarCantidad = () => {
    let btns = document.querySelectorAll(".restarCantidad")

    for (const btn of btns) {
        btn.addEventListener("click", (event) => {
            console.log(event.target.parentNode.id);
            let id = event.target.parentNode.id;
            let busqueda = arrayCarrito.findIndex( el => el.id == id );
            console.log(busqueda);
            arrayCarrito[busqueda].restarCantidad()
            if (arrayCarrito[busqueda].cantidad == 0) {
                // alert("eliminar del carrito")
                let div = event.target.parentNode
                eliminar(busqueda, div)
            }
            localStorage.setItem("carrito", JSON.stringify(arrayCarrito))
            generarHtml(JSON.parse(localStorage.getItem("carrito")))
            console.log(arrayCarrito);
        })
    }
}


// const eliminar = () => {
//     let btns = document.querySelectorAll(".eliminar");

//     for (const btn of btns) {
//         btn.addEventListener("click", (event) => {
//             let elemento = event.target.parentNode
//             elemento.remove()
//         })
//     }
// }



const eliminar = (indice, elemento) => {
    arrayCarrito.splice(indice,1)
    elemento.remove()
    console.log(arrayCarrito);
}

const btnEliminar = () => {
    let btns = document.querySelectorAll(".eliminar");

    for (const btn of btns) {
        btn.addEventListener("click", (event) => {
            console.log("click");
            let id = event.target.parentNode.id;
            let busqueda = arrayCarrito.findIndex( el => el.id == id );

            let div = event.target.parentNode
            eliminar(busqueda, div)
        })
    }
}

const generarHtml = (array) => {
    divProductos.innerHTML = ""
    array.map( el => {
        divProductos.innerHTML += `
                                    
                                    <div class= "item-carrito" id=${el.id}>
                                        <img src=${el.img} alt="">
                                        <h3>${el.nombre}</h3>
                                        <span>${el.cantidad}</span>
                                        <span>${el.precio}</span>
                                        <button class="sumarCantidad">+</button>
                                        <button class="restarCantidad">-</button>
                                        <button class="eliminar">X</button>
                                    </div>
        
        `
        sumarCantidad()
        restarCantidad()
        btnEliminar()
        // eliminar()
})
}

const finalizarCompra = () => {
    let btn = document.querySelector("#btn-finalizar");

    btn.addEventListener("click", () => {
        Swal.fire(
            'Gracias por tu compra!',
            'success'
        )
        localStorage.clear()
        window.location = "../index.html"
    })


}


document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.length > 0) {
        for (const item of JSON.parse( localStorage.getItem("carrito"))) {
            let producto = new Producto(item.nombre, item.precio, item.img, item.id, item.stock, item.categoria, item.cantidad)
            arrayCarrito.push(producto)
            console.log(arrayCarrito);
        }
    
        total()
        generarHtml(arrayCarrito)
        finalizarCompra()
        // sumarCantidad()
    }else{
        document.querySelector("#carrito").innerHTML = `
        <div>
            <h2>No hay productos</h2>
            <a href="../index.html">Mira nuestros productos</a>
        </div>

        
        ` 
    }

})
