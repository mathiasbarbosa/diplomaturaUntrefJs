// 1 leer el array de objetos para poder pintarlo 

// pintar html



function generarInterfaz() {
    let contenedor = document.querySelector("#contenido");
    if (tf.length > 0) {
        for (const elemento of tf) {
            contenedor.innerHTML += `
            <div class="card">
                <img class="poster" src=${elemento.poster} alt="" id=${elemento.id} title=${elemento.title}>
            </div>
            `
        }    
    }else{
        contenedor.innerHTML = `
            <h1> Error al cargar la informacion </h1>
        `
    }
    

}

generarInterfaz()
direccionar()

function direccionar() {
    let peliculas = document.querySelectorAll(".poster")

    for (const pelicula of peliculas) {
        pelicula.addEventListener("click", (evento) => {
            console.log("click", evento.target.id);
            let idElemento = evento.target.id;

            let busqueda = tf.find( elemento => elemento.id == idElemento);
            localStorage.setItem("pelicula", JSON.stringify(busqueda))
            window.location = "./detalle.html"
            console.log(busqueda);
        })
    }
}