// FUNCIONES DE ORDEN SUPERIOR
// Es aquella que bien retorna una función, o recibe una función por parámetro. 
// Este tipo de funciones nos permiten abstraernos sobre acciones y no sólo valores


// En este caso tenemos una funcion que retorna una funcion
// function mayorQue(n) {
//     return (m) => m > n
// }

// let mayorQueDiez = mayorQue(10)

// console.log( mayorQueDiez(12) )  //  true
// console.log( mayorQueDiez(8) )  //  false




// Es usual definir la función directamente sobre el parámetro como una función anónima, aprovechando la sintaxis de arrow function. 
// Esto permite definir acciones más dinámicas.

const productos = [
    {
        producto: "MONITOR",
        precio: 300,
        stock: 5
    },
    {
        producto: "TECLADO",
        precio: 100,
        stock: 3
    },
    {
        producto: "MOUSE",
        precio: 50,
        stock: 8
    },
    {
        producto: "MICROFONO",
        precio: 200,
        stock: 6
    }
]


// find 
// let usuarioBusqueda = prompt("buscar producto")

// let busqueda = productos.find( el => el.producto == usuarioBusqueda.toUpperCase() )
// console.log(busqueda);
// alert("tenemos para ofrecer: " + busqueda.producto.toLowerCase()+ "\n" + " " + busqueda.precio)


//filter
// function buscar (){
//     let usuarioBusqueda = prompt("buscar producto por precio")
//     return usuarioBusqueda
// }

// let resultado = buscar()
// console.log(resultado);
// let busqueda = productos.filter( (elemento) => elemento.precio >= resultado)
// // alert("tenemos para ofrecer: " + busqueda[0].producto.toLowerCase()+ "\n" + " " + busqueda[0].precio)
// console.log(busqueda);


// map
// let sumaIva = productos.map(sumarIva)

// function sumarIva(item){
//     return {producto:item.producto, 
//             precio: item.precio * 1.21
            
//             }
// }
// console.log(sumaIva);


// reduce
// let resultado = productos.reduce( (acumulador, elemento) => acumulador + elemento.precio, 0 )
// console.log(resultado);


// indexOf
// function buscarElemento () {
//     const frutas = ["🍊","🍎","🍌","🍇","🍒"]
//     let busqueda = frutas.indexOf("🍒")
//     console.log(busqueda);
//     if (busqueda == -1) {
//         alert("el producto no existe")
//     }else{
//         alert("el producto existe")
//     }
// }

// buscarElemento()



