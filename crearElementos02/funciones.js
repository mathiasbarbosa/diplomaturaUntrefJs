// FUNCIONES
// Una función en JavaScript es similar a un procedimiento — un conjunto de instrucciones que realiza una tarea o calcula un valor, pero para que un procedimiento califique como función, debe tomar alguna entrada y devolver una salida donde hay alguna relación obvia entre la entrada y la salida

// Las funciones son los principales “bloques de construcción” del programa. Permiten que el código se llame muchas veces sin repetición.

// Ya hemos visto ejemplos de funciones integradas, como alert(message), prompt(message, default) y confirm(question). Pero también podemos crear funciones propias.

// confirm("sos mayor de edad")

// Declaración de funciones
// Para crear una función podemos usar una declaración de función.

function nombre() {
    // intrucciones que va a realizar la funcion
}

// La palabra clave function va primero, luego va el nombre de función, luego una lista de parámetros entre paréntesis (separados por comas) y finalmente el código de la función entre llaves, también llamado “el cuerpo de la función”.

// function multiplicar(num1, num2) {
//     console.log(num1 * num2)
// }

// Por otro lado para que la funcion se ejecute debemos llamarla

// multiplicar(2,3);
// multiplicar(6,5)

// Este ejemplo demuestra claramente uno de los propósitos principales de las funciones: evitar la duplicación de código…


//---------------------------------------------------------------//
// EJERCICIO: DESARROLLAR UNA FUNCION QUE RECIBA TRES PARAMETROS. DOS NUMEROS Y TERCER PARAMETRO LA OPERACION MATEMATICA A REALIZAR
//---------------------------------------------------------------//

// function operacion(num1, num2, operacion){
//     switch(operacion){
//         case "*":
//             console.log(num1 * num2);
//             break 
//         case "+":
//             console.log(num1 + num2);
//             break 
//         case "-":
//             console.log(num1 - num2);
//             break 
//         case "/":
//             console.log(num1 / num2);
//             break 
//         default:
            
//             break 
//     }
// }

// operacion(10,30, "-")

// Devolviendo un valor
// Una función puede devolver un valor al código de llamada como resultado.

// El ejemplo más simple sería una función que suma dos valores:

// function sum(a, b) {
//   return a + b;
// }

// let result = sum(1, 2);
// alert( result ); // 3

// La directiva return puede estar en cualquier lugar de la función. Cuando la ejecución lo alcanza, la función se detiene y el valor se devuelve al código de llamada (asignado al result anterior).


// FUNCIONES ANONIMAS 
// Si bien la declaración de función anterior sintácticamente es una declaración, las funciones también se pueden crear mediante una expresión function.

// Esta función puede ser anónima; no tiene por qué tener un nombre. Por ejemplo.

// const esMayor = function (edad) {
//     if (edad >= 18) {
//         return true 
//     }else{
//         return confirm("tenes permiso de tus padres?")
//     }
// }

// let resultado = esMayor(21)

// console.log(resultado);

// Funciones flecha
// Hay otra sintaxis muy simple y concisa para crear funciones
// Se llama "funciones flecha", porque se ve así:

const sum = (a,b) =>  a + b 

// Como se puede ver, (a, b) => a + b significa una función que acepta dos argumentos llamados a y b. Tras la ejecución, evalúa la expresión a + b y devuelve el resultado.

// Si solo tenemos un argumento, entonces se pueden omitir los paréntesis alrededor de los parámetros, haciéndolo aún más corto.

// Por ejemplo:

const mult = a => a * 2

// Si no hay argumentos, los paréntesis están vacíos, pero deben estar presentes:
const resta = () => 20 - 10

// Funciones de flecha multilínea
// Las funciones de flecha que hemos visto hasta ahora eran muy simples. Tomaron argumentos de la izquierda de =>, evaluaron y devolvieron la expresión del lado derecho con ellos.

// A veces necesitamos una función más compleja, con múltiples expresiones y sentencias. En ese caso, podemos encerrarlos entre llaves. La principal diferencia es que las llaves requieren un return dentro de ellas para devolver un valor (tal como lo hace una función regular).


//---------------------------------------------------------------//
// EJERCICIO: Terminar ejemplo (funciones de orden superior) repaso01 => ejemploPractico.js
//---------------------------------------------------------------//