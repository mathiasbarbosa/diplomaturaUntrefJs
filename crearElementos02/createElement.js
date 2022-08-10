// Creación de un elemento HTML con JavaScript
// el método .createElement()
// el método document.createElement() crea un elemento HTML especificado por su tagName

// tagName => string que especifica el tipo de elemento a crear

let newDiv = document.createElement("div");

//createTextNode() => Crea un nuevo Textnodo

let newContent = document.createTextNode("Hola!¿Qué tal?");

// appendChild() método que agrega un nodo (elemento) como el último hijo de un elemento.
newDiv.appendChild(newContent); //añade texto al div creado.

// añade el elemento creado y su contenido al DOM

document.body.appendChild(newDiv)


// --------------------------------------------------------------------------------------//
// EJEMPLO: CREAR UNA FUNCION QUE RECIBA POR PARAMETRO EL ELEMENTO A CREAR Y SU CONTENIDO
// --------------------------------------------------------------------------------------//




// ajuste de propiedades/atributos del elemento HTML
// Agregar una identificación al div

let div = document.createElement('div');
div.id = 'content';
div.innerHTML = '<p>Aca podemos colocar cualquier texto</p>';

document.body.appendChild(div);

// Agregar una clase al div

let div2 = document.createElement('div');
div2.id = 'content-css';
div2.className = 'contenedor';
div2.innerHTML = '<p>ahora le podemos agregar clases que tengamos definidas en css</p>';
// creamos nuestro archivo css

document.body.appendChild(div2);

// Element.setAttribute
// Establece el valor de un atributo en el elemento indicado. Si el atributo ya existe, el valor es actualizado, en caso contrario, el nuevo atributo es añadido con el nombre y valor indicado.

let h1 = document.createElement('h1')

h1.innerText = "Vamos a setear atributos"

h1.setAttribute("id", "soyUnTitulo")

document.body.appendChild(h1)

// Usando la propiedad style
h1.style.color = "red"


// Element.append() puede agregar varios nodos y cadenas, mientras Node.appendChild()que solo puede agregar un nodo.
const lenguajes = ["javaScript", 'C', 'java', 'python']
let ul = document.createElement('ul')

let nodos = lenguajes.map( elemento => {
    let lista = document.createElement('li');
    lista.innerText = elemento
    console.log(lista);
    return lista
})

console.log(nodos); 
ul.append(...nodos) // ... Spread operator destructurar el array
document.body.append(ul)

// El método remove() elimina un elemento (o nodo) del documento.

// h1.remove() 

//------------------------------------------------------------------//
// Ejercicio: asociar un evento a un boton y eliminar un elemento
//-----------------------------------------------------------------//