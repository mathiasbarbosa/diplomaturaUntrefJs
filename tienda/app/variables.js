export let sectionProductos = document.querySelector("#contenedorProductos");
export let input = document.querySelector("#buscador input")
export let btnsCategoria = document.querySelectorAll(".btn-categoria")

export let arrayProductos =  []
export const arrayCarrito = JSON.parse( localStorage.getItem("carrito")) || []