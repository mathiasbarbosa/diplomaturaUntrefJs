

let arrayObjetos

const request = () => {
    
    fetch("https://rickandmortyapi.com/api/character")
        .then(respuesta => console.log( respuesta.json()))
        // .then( data => {
            
        //     arrayObjetos = data.results
        //     console.log(arrayObjetos);
        // })

}

request()



