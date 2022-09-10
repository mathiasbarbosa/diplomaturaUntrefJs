// variables globales
let selectPropiedad = document.querySelector("#propiedades");
let selectUbicacion = document.querySelector("#ubicacion");
let metros2 = document.querySelector("#mt2")
let formulario = document.querySelector("#formulario");
let valorSeguro = document.querySelector("#valor")
const CostoM2 = 31.44;



// funciones para generar el html con los json
const pedirDatos = async (url) => {

    let baseDeDatos = [];

    await $.ajax({
        type: "GET",
        url: url,
        contentType: "application/json",
        
        success: function (response) {
             console.log(response);
            baseDeDatos = response
        }
    });

    return baseDeDatos
}



// funcion para generar los option en el html

function generarOptionsHtml(array, select){

    array.forEach(pepe => {
        select.innerHTML += `
            <option value=${pepe.factor}>${pepe.tipo}</option> 
        `
    });

}

// obtener los datos json

const obtenerDatos = async () => {
    const propiedades = await pedirDatos("./propiedades.json");
    const ubicaciones = await pedirDatos("./ubicacion.json");
    console.log(propiedades);
    console.log(ubicaciones);
    generarOptionsHtml(propiedades,selectPropiedad);
    generarOptionsHtml(ubicaciones, selectUbicacion)

}

obtenerDatos()

// generar objeto donde vamos a almacenar los valores de los inputs

function Cotizador (factorProp, factorUbicacion, mt2, costoM2 ){
    this.factorProp = parseFloat( factorProp),
    this.factorUbicacion = parseFloat(factorUbicacion),
    this.mt2 = parseInt(mt2),
    this.costoM2 = costoM2,

    this.cotizar = function(){
        return (this.mt2 * this.costoM2 * this.factorProp * this.factorUbicacion).toFixed(2)
    }
}

// funciones para capturar los eventos del form.
// function sumar(a,b){
//     return a + b
// }

const validar = ( valor, resultado) => {

    // console.log(!isNaN(valor.factorProp));
    // console.log(!isNaN(valor.factorUbicacion));

    if ((isNaN(valor.factorProp)) && (isNaN(valor.factorUbicacion) )) {
        // alert("algun dato esta incorrecto")
        document.querySelector("#valor").innerHTML = "algun dato esta incorrecto" 
    }else{
        valorSeguro.innerHTML = resultado   
    }
}

function datosForm(event){
    event.preventDefault()
    // console.log("enviando datos");
    let propiedad = selectPropiedad.value ;
    let ubicacion = selectUbicacion.value;
    let mts2 = metros2.value;

    let datosACotizar = new Cotizador(propiedad, ubicacion, mts2, CostoM2 )
    // console.log(propiedad, ubicacion, mts2);
    console.log(datosACotizar.factorProp);
    let resultado = datosACotizar.cotizar();
    validar(datosACotizar, resultado)
    
}



formulario.addEventListener("submit", datosForm)