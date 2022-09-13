
let recuperarLS =  JSON.parse( localStorage.getItem("carrito")) || []

console.log(recuperarLS);


function pintarCarrito(){
    let divCarrito = document.querySelector("#carrito");
    divCarrito.innerHTML = ""
    recuperarLS.map( el => {
        divCarrito.innerHTML += `
        <div>
            <h3>${el.nombre}</h3>
            <h4>${el.precio}</h4>
        </div>
        `
    })
}



window.addEventListener("DOMContentLoaded", () => {
    if (recuperarLS.length > 0) {
        pintarCarrito()
        
    }else{
        alert("no hay productos en el carrito")
    }
})