const detalle = document.querySelector("section#detalle")
const volver = document.querySelector("div.emoji-volver")

const retornoDetalle = (detalle)=> {
    const {titulo, poster, categoria, genero, resumen, reparto} = detalle
    return `<section id="contenido">
                <h2>${titulo}</h2>
                <img src="${poster}" alt="${titulo}" title="${titulo}">
                <p class="info">SINOPSIS</p>
                <p>${resumen}</p>
                <p class="info">CATEGORÍA</p>
                <p>${categoria}</p>
                <p class="info">GÉNERO</p>
                <p>${genero}</p>
                <p class="info">REPARTO</p>
                <p>${reparto}</p>
            </section>`
}

const retornoCardError = ()=> {
    return `<div class="error-contenido">
                <div class="emoji-cine">🎬</div>
                <p>Parece que hubo un error :(</p>
                <p>Intenta nuevamente en unos segundos...</p>
            </div>`
}

const recuperoInfo = ()=> {
    if (localStorage.detalle) {
        const objDetalle = JSON.parse(localStorage.getItem("detalle"))
              detalle.innerHTML = retornoDetalle(objDetalle)
    } else {
        detalle.innerHTML = retornoCardError()
    }
}
recuperoInfo()

volver.addEventListener("click", ()=> location.href = "index.html")