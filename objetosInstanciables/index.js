// objetos:  es una estructura que nos permite almacenar y relacionar datos bajo un mismo criterio

let nombre = "juan";
let apellido ="perez"
let mail = "juan@perez.com"

let nombre1 = "juan";
let apellido1 ="perez"
let mail1 = "juan@perez.com";

// objetos literales 

let usuario = {
    nombre:"juan",
    apellido: "perez",
    mail:"juan@perez.com"
};

let usuario1 = {
    nombre:"juan",
    apellido: "perez",
    mail:"juan@perez.com"
};


// funciones constructoras

// function Usuario(nombre,apellido,mail){

//     propiedades
//     this.nombre = nombre,
//     this.apellido = apellido,
//     this.mail = mail

//     metodos
//     this.saludar = function (){
//         alert("Hola! buenas tardes " + this.nombre)
//     }
// }

// let usuario3 = new Usuario("pedro", "lopez", "pedro@lopez.com")
// // console.log(usuario3);
// // usuario3.saludar()

// usuario3.nombre = "juan"

// console.log(usuario3.nombre, usuario.apellido, usuario.mail);


// let usuario4 = new Usuario("lucas", "gonzalez", "lucas@gonzalez.com")
// // console.log(usuario4);
// // console.log(usuario4["nombre"]);



// for (const propiedad in usuario4) {

//     console.log(propiedad);
//     console.log(usuario4[propiedad]);
// }

// console.log( nombre in usuario4);

// usuario4.saludar()


// clase
class Usuario{
    // propiedades
    constructor(nombre, apellido, mail){
        this.nombre = nombre,
        this.apellido = apellido,
        this.mail = mail
    }

    // metodos
    saludar(){
        alert("hola! buenas tardes " + this.nombre)
    }

    getNombre(){
        return this.nombre
    }

    setNombre(){
        let cambiarNombre = prompt("queres cambiar tu nombre de usuario?")

        if (cambiarNombre == "si") {
            let nuevoNombre = prompt("ingresa tu nuevo nombre de usuario");

            this.nombre = nuevoNombre

        }
    }
}

let usuario5 = new Usuario("jorge", "perez", "jorge@perez.com")

console.log(usuario5);
usuario.nombre
usuario5.saludar();

usuario5.telefono = 213123

console.log(usuario5);

// console.log(usuario5.getNombre());

// usuario5.setNombre()

// console.log(usuario5.getNombre());