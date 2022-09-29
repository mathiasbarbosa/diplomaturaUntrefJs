// variables globales
let formulario = document.querySelector("#formulario");
let tbody = document.querySelector("#tbody")
console.log(formulario);

// fetch - solicitudes
const requestPost = async (data) => {
    try {
        let res = await fetch("https://6334c66fea0de5318a08cd43.mockapi.io/productos", {
            method:"POST",
            headers:{
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(data)
        })
        
        console.log(res);
        let json = await res.json();
        if(!res.ok) {
            throw {status:res.statusText}
        }

        console.log(json);
    } catch (error) {
        document.querySelector("#errorAlcargar").innerHTML = `<h2>Error:${error.status}, vuelva a consultar</h2>`
    }
}

const requestGet = async () => {
    try {
        let res =   await fetch("https://6334c66fea0de5318a08cd43.mockapi.io/productos")
        let json = await res.json();
        console.log(json);
        if(!res.ok) {
            throw {status:res.statusText}
        }
        generarTabla(json)

    } catch (error) {
        alert("Error: " + error.status)
    }
}

const requestDelete = (url) => {

    fetch(url,{
        method:"DELETE",
    })

}

const generarTabla = (arrayProductos) => {
    arrayProductos.map( el => {
        let {id,nombre,precio,stock} = el
        tbody.innerHTML += `
                                <tr>
                                <th scope="row">${id}</th>
                                <td>${nombre}</td>
                                <td>${precio}</td>
                                <td>${stock}</td>
                                <td>
                                    <button>editar</button>
                                    <button class="btn-eliminar btn btn-danger"" data-id=${id}>eliminar</button>
                                </td>
                            </tr>
                            `
                        eventoEliminar()
    } )
}

const eventoEliminar = () => {
    let btns = document.querySelectorAll(".btn-eliminar");
    for (const btn of btns) {
        btn.addEventListener("click", (evento) => {
            console.dir(evento.target.attributes[2].textContent);
            let idEliminar = evento.target.attributes[2].textContent
            requestDelete(`https://6334c66fea0de5318a08cd43.mockapi.io/productos/${idEliminar}`)
        })
    }
}
// programa - eventos
formulario.addEventListener("submit", (event) => {
    event.preventDefault()
    let nombre = document.querySelector("#nombre").value;
    let precio = document.querySelector("#precio").value;
    let stock = document.querySelector("#stock").value;

    let producto = {
        nombre,
        precio,
        stock
    }

    requestPost(producto)
    formulario.reset()
    location.reload()
    console.log(producto);
})

document.addEventListener("DOMContentLoaded", requestGet)