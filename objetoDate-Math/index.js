// console.log("Hola buenas tardes");

// let fecha = new Date()

// console.dir(fecha);



// console.log(fecha.getDay());
// console.log(fecha.getMonth());
// console.log(fecha.getHours());

// let fecha = new Date("2009-12-25")

// let fechaActual = new Date()


// console.log(fechaActual.getFullYear());
// console.log(fechaActual);
// console.log(fecha);

// const milisegundosPorDia = 86400000

// console.log( (fechaActual - fecha ) / milisegundosPorDia) // 8

// let resultado = fechaActual - fecha

// console.log(resultado);


// const arrayDias = ["domingo","lunes", "martes","miercoles", "jueves", "viernes", "sabado"]

// let fecha = new Date("2021-6-17")

// console.dir(fecha);



// // console.log(dia);

// console.log(fecha.getDay())
// console.log(fecha.getMonth());

// fecha.setMeses = () => {
//     console.log("Estoy acomodando los meses");
// }

// let numero = 0

// let arrayNumeros = []

// // let math = Math.PI

// console.dir(Math.max(2, 4, 6, 7, 8, 3, 1))


// let numero = (Math.random() * 100).toFixed(0)

// console.log(numero);


// let btn = document.querySelector("#token")
// let numero;
// btn.addEventListener("click", ( ) => {
//    numero = (Math.random() * 100).toFixed(0)

//     alert("tu token de seguridad es " + numero)
// })

// import {productos} from 
// console.log(productos);

let formulario = document.querySelector("#formulario");
const usuarios = [];

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault()
    console.log(evento.target.children[0].value);
    let nombreUsuario =  evento.target.children[0].value;


    usuarios.push(nombreUsuario)
    localStorage.setItem("arrayUsuarios", JSON.stringify(usuarios))
    console.log(usuarios);
})


function pintarUsuarios() {
    let div = document.querySelector("#contenedorUsuarios");
    let recuperarLocal = JSON.parse(localStorage.getItem("arrayUsuarios"))

    for (const usuario of recuperarLocal) {
        div.innerHTML += `
            <h3>${usuario}</h3>
        
        `
    }

}

let botonCargar = document.querySelector("#cargarDatos")

botonCargar.addEventListener("click", pintarUsuarios)

