// console.log("diplomatura");


// console.log("front-end");



let contador = 1

console.log("console antes del intervalo");
let intervalo = setInterval(() => {
    console.log("Hola " + contador);
    // if (contador == 5) {
    //     clearInterval(intervalo)
    // }
    contador += 1;
}, 0);

console.log("console despues del intervalo");

setTimeout(() => {
    clearInterval(intervalo)
}, 2000);