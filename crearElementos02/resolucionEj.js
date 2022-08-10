// EJERCICIO: DESARROLLAR UNA FUNCION QUE RECIBA TRES PARAMETROS. DOS NUMEROS Y TERCER PARAMETRO LA OPERACION MATEMATICA A REALIZAR
function calculadora(num1, op, num2) {
    switch (op) {
        case "+" :
           console.log( num1 + num2);
            break;
        case "-" :
           console.log( num1 - num2);
            break;
        case "/" :
           console.log( num1 / num2);
            break;
        case "*" :
           console.log( num1 * num2);
            break;
        default:
            break;
    }
}

calculadora(10, "+", 30)


// EJEMPLO: CREAR UNA FUNCION QUE RECIBA POR PARAMETRO EL ELEMENTO A CREAR Y SU CONTENIDO

function crearElemento(etiqueta, texto) {
    let nuevoElemento = document.createElement(etiqueta)

    let nuevoTexto = document.createTextNode(texto)

    nuevoElemento.appendChild(nuevoTexto)

    document.body.appendChild(nuevoElemento)
}


crearElemento('p', "cree este texto con una funcion")
crearElemento('h1', "y ahora un titulo")
crearElemento('h2', "reutilizando la funcion")