import { Producto } from "./classProducto.js";
import { arrayCarrito, arrayProductos, btnsCategoria, input, sectionProductos } from "./variables.js";


// funciones
export const getRequest = async () => {
    let req = await fetch("https://6334c66fea0de5318a08cd43.mockapi.io/productos")

    let response = await req.json()
    for (const el of response) {
        arrayProductos.push(el)
    }

    // localStorage.setItem("arrayProductos", JSON.stringify(arrayProductos))

}



export const generarCards = (array) => {
    sectionProductos.innerHTML = ""
    array.forEach(element => {
        let {nombre, precio, id, img,stock,categoria} = element
        sectionProductos.innerHTML += `
                            
                            <div class="card">
                                <img src=${img} alt="">
                                <h3>${nombre}</h3>
                                <span>$${precio}</span>
                                <span>Stock: ${stock}</span>
                                <span>Categoria: ${categoria}</span>
                                <button class="btn-agregar" data-id=${id}>Agregar al carrito</button>
                            </div>
        `
        // eventoAgregarProducto()
    });
}

export const eventoAgregarProducto = (dataProductos) => {
    let btns = document.querySelectorAll(".btn-agregar")

    for (const btn of btns) {
        btn.addEventListener("click", (event) => {
            let id = event.target.attributes[1].value;
            let existe = arrayCarrito.findIndex( el => el.id == id)

            if (existe != -1) {
                // si existe le sumamos 1 a cantidad
                let producto = arrayCarrito[existe]
                // producto.sumarCantidad()
                producto.cantidad ++
                console.log(arrayCarrito);
            }else{
                // instanciar la clase
                let resultado = dataProductos.find( el => el.id == id)
                let producto = new Producto(resultado.nombre, resultado.precio, resultado.img ,resultado.id, resultado.stock, resultado.categoria);
                arrayCarrito.push(producto);
            }
            Swal.fire(
                'Producto agregado!',
                'You clicked the button!',
                'success'
              )
            localStorage.setItem("carrito", JSON.stringify(arrayCarrito))
        })
    }

}

export const eventoInput = (data) => {
    input.addEventListener("input", (event) => {
        sectionProductos.innerHTML = ""
        let resultado =  data.filter( el =>  el.nombre.includes(event.target.value));
        if (resultado.length > 0) {
            generarCards(resultado)
        }else{
            sectionProductos.innerHTML = `<h3> No se encontro </h3>`
        }
    })
    
}

export const eventoCategoria = () => {
    for (const btn of btnsCategoria) {
    btn.addEventListener("click", (event) => {
        event.preventDefault()
        let categoria = event.target.textContent.toLowerCase()
        localStorage.setItem("arrayProductos", JSON.stringify(arrayProductos))
        localStorage.setItem("categoria", categoria)
        window.location = "./pages/productos.html"
    })
}

}


export const eventoSelect = (data) => {
    let select = document.querySelector("#select")
    select.addEventListener("change", (event) => {
        if (event.target.value == "todos") {
            generarCards(data)
        }else{
            console.dir(event.target.value);
    
            let busqueda = data.filter(el => el.categoria.includes(event.target.value))
            console.log(busqueda);
            generarCards(busqueda)

            // arrayProductos = []
            // arrayProductos = busqueda
            
            // console.log(arrayProductos);
        }
    })
}