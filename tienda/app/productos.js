import { eventoAgregarProducto, generarCards } from "./funciones.js";




let categoria = localStorage.getItem("categoria")
let arrayProductos = JSON.parse( localStorage.getItem("arrayProductos")) || []
console.log(arrayProductos);

let busqueda;
switch (categoria) {
    case "teclados":
        busqueda = arrayProductos.filter( el => el.categoria == "teclados")
        console.log(busqueda);
        generarCards(busqueda)  
        eventoAgregarProducto(busqueda)
        localStorage.removeItem("categoria")
        break;
    case "computadoras":
        busqueda = arrayProductos.filter( el => el.categoria == "computadoras")
        console.log(busqueda);
        generarCards(busqueda)        
        eventoAgregarProducto(busqueda)
        localStorage.removeItem("categoria")
    break;
    case "mouse":
        busqueda = arrayProductos.filter( el => el.categoria == "mouse")
        console.log(busqueda);
        generarCards(busqueda)    
        eventoAgregarProducto(busqueda)  
        localStorage.removeItem("categoria")  
    break;
    default:
        generarCards(arrayProductos) 
        eventoAgregarProducto(arrayProductos)   
        break;
}