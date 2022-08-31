$(document).ready(function () {
    console.log("Carga lista");
    const arrayMascotas = []

    $("#formulario").submit(function(event){
        event.preventDefault()
        let nombre = $("#nombre").val()
        let edad = $("#edad").val()
        let img = $("#img").val()


        let mascota = {
            nombre: nombre,
            edad:edad,
            img:img
        }

        arrayMascotas.push(mascota)
        localStorage.setItem("mascotas", JSON.stringify(arrayMascotas))

        console.log(arrayMascotas);
        generarTarjetas()
    })


    // generar tarjetas 
    function generarTarjetas(){
        $("#contenedor").html("")

        for (const elemento of arrayMascotas) {
            $("#contenedor").append(`
                <div class="card" style="width: 18rem;">
                <img src="${elemento.img}" class="card-img-top" alt="...">
                <div class="card-body">
                    <p class="card-text">${elemento.nombre}</p>
                    <p class="card-text">${elemento.edad}</p>
                </div>
                </div>
            `)
            
        }
    }


})


querySelector("#parrafo")