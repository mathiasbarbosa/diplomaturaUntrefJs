const seccion = document.querySelector("section#contenido")

const retornoCardContenido = (content)=> {
    const {id, titulo, poster} = content
    return `<div class="card">
                <img class="poster" id="${id}" src="${poster}" alt="${titulo}" title="${titulo}" loading="lazy">
            </div>`
}

const retornoCardError = ()=> {
    return `<div class="error-contenido">
                <div class="emoji-cine">🎬</div>
                <p>Parece que hubo un error :(</p>
                <p>Intenta nuevamente en unos segundos...</p>
            </div>`
}

// tf.length = 0 //desbloquear para probar la Card de Error de carga
const cargarContenido = ()=> {
    let contenidoHTML = "";
    if (tf.length > 0) {
        tf.forEach(content => {
            contenidoHTML += retornoCardContenido(content)
        })
        seccion.innerHTML = contenidoHTML;
    } else {
        seccion.innerHTML = retornoCardError()
    }
    if (tf.length > 0) {
        document.addEventListener("DOMContentLoaded", ()=> asignarClick())
    }
}
cargarContenido()

const asignarClick = ()=> {
    //Tengo que esperar que se genere el HTML en el DOM con todas las imágenes
    //Recién allí le aplico el evento CLICK a cada una 
    tf.forEach(content => {
        document.getElementById(`${content.id}`).addEventListener("click", (event)=> {
            guardarContenidoEnLS(event.target.id)
            location.href = "detalle.html"
        }) 
    })
}

const guardarContenidoEnLS = (id)=> {
    let resultado = tf.find((contenido)=> contenido.id == id )
        if (resultado) {
            localStorage.setItem("detalle", JSON.stringify(resultado))
        }
}