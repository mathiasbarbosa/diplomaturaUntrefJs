let h1 = document.createElement("h1");

let texto = document.createTextNode("Hola Mundo")
console.log(h1);
console.log(texto);

h1.appendChild(texto)

// h1.setAttribute("id", "titulo")
h1.setAttribute("class", "tituloPrincipal")

h1.id = "titulo2"
// h1.className = "titulodeprueba"

// h1.style.color = "blue"

document.body.appendChild(h1)

function crearEtiqueta(etiqueta, texto){
    let nuevaEtiqueta = document.createElement(etiqueta)

    let nuevaTexto = document.createTextNode(texto)

    let otroTexto = document.createTextNode('otro texto')

    nuevaEtiqueta.append(nuevaTexto, otroTexto)


    document.body.appendChild(nuevaEtiqueta)

}

crearEtiqueta("p", "soy un parrafo")

crearEtiqueta("h3", "Soy un h3 creado dinamicamente")


let contenedor = document.querySelector("#contenedor")

const crearInterfaz = (etiqueta, texto, clase) => {
    let nuevaEtiqueta = document.createElement(etiqueta)

    nuevaEtiqueta.className = clase;

    // let nuevaTexto = document.createTextNode(texto)
    nuevaEtiqueta.innerText = texto

    // nuevaEtiqueta.appendChild(nuevaTexto)

    contenedor.append(nuevaEtiqueta)
}

crearInterfaz('h1', 'texto creado dinamicamente con funcion flecha', 'texto')

