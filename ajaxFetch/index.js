// fetch

// console.log(fetch())

// fetch("./trailerflix.json")
//     .then((respuesta) =>  respuesta.json())
//         .then( (items) => console.log(items))
//     .catch(error => console.log(error))


//
    // let paso1 = fetch("./trailerflix.json")
    // let paso2 = paso1.then((respuesta) => respuesta.json())
    // let paso3 = paso2.then((datos) => console.log(datos))
    
    // let data;

    // const request = async () => {
    //     let respuesta = await fetch("./trailerflix.json")

    //     console.log(respuesta);

    //     data = await respuesta.json()

    //     console.log(data);
    // }

    // //console.log(data);
    // request()
    // // console.log(data);

    const requestPost = async (formulario) => {
        let post = await fetch('https://jsonplaceholder.typicode.com/posts', {
             method: "POST",
             body: JSON.stringify(
                 
                    //  nombre: parametroNombre,
                    //  apellido: parametroApellido,
                    //  mail:"nombre1@apellido1.com"
                    formulario
                
             ),
             headers:{
                 'Content-type': 'application/json; charset=UTF-8',
             } 
         })
 
         let datosEnviados = await post.json()
 
         console.log(datosEnviados);
     }

    let formulario = document.querySelector("#formulario");

    formulario.addEventListener("submit", (event) => {
        event.preventDefault()
        let nombre = document.querySelector("#nombre").value;
        let apellido = document.querySelector("#apellido").value;
        // let usuario =  new Usuario(nombre, apellido)

        let datosFormulario = {
            nombre: nombre,
            apellido:apellido
        }
        requestPost(datosFormulario)
        // console.log(nombre, apellido);
    })





   

    // requestPost()