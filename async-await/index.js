
// Callback

// function cuadradroCallback(valor, callback){

//     setTimeout(() => {
//         callback(valor, valor * valor)
//     }, 3000);

// }

cuadradroCallback(2, (valor, resultado) => {
    console.log(valor, resultado);
    cuadradroCallback(resultado, (valor, resultado) => {
        console.log(valor, resultado);
        cuadradroCallback(resultado, (valor, resultado) => {
            console.log(valor, resultado);
            cuadradroCallback(resultado, (valor, resultado) => {
                console.log(valor, resultado);
                cuadradroCallback(resultado, (valor, resultado) => {
                    console.log(valor, resultado);
                })
            })
        })
    })
})


// Promise


// function cuadradoPromise(valor) {
//     // if (typeof valor1 != "number") {
//     //     new Promise((resolve,reject) =>{
//     //         reject("el dato ingresado no es valido")
//     //     } )
//     // }

//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(valor * valor)
//             // reject("error")
//         }, 3000);
//     })
// }

// cuadradoPromise()
//     .then(respuesta => {console.log(respuesta)
//             return cuadradoPromise(respuesta)
//     })
//     .then(respuesta => {console.log(respuesta)
//         return cuadradoPromise()
//     })
//     .then( respuesta => console.log(respuesta))

//     .catch(error => console.log(error))

async function cuadradoAsync(valor){
    return valor * valor
}


async function obtenerResultado(){
    let resultado = await cuadradoAsync(4)
    console.log(resultado);

    resultado = await cuadradoAsync(resultado)
    console.log(resultado);

    resultado = await cuadradoAsync(resultado)
    console.log(resultado);
}

obtenerResultado()




console.log("Ultimo en salir por consola");