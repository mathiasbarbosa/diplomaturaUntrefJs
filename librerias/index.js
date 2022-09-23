
let formulario = document.querySelector("#formulario");

const arrayUsuarios = []
formulario.addEventListener("submit", (unParametro) => {
    unParametro.preventDefault()

    let nombre = document.querySelector("#nombre");
    let apellido = document.querySelector("#apellido");

    console.log(nombre, apellido);

    if ((nombre.value != "") && (apellido.value != "")) {
        Swal.fire({
            title: 'Do you want to save the changes?',
            html:'<h1> Vas enviar a los datos</h1>',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Save',
            denyButtonText: `Don't save`,
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              Swal.fire('Saved!', '', 'success')
              let usuario = {
                nombre: nombre.value,
                apellido: apellido.value
              }
              arrayUsuarios.push(usuario)
              console.log(arrayUsuarios);
            } else if (result.isDenied) {
              Swal.fire('Changes are not saved', '', 'info')
            }
          })    
        
    }else{
        Swal.fire({
            icon: 'error',
            title: 'che no ingresaste algun dato',
            text: 'Something went wrong!',
            footer: '<a href="">Why do I have this issue?</a>'
          })
    }

})

let dateTime = luxon.DateTime;

console.log(    dateTime.diff() );
// dateTime.fromISO("2017-05-15")    




setInterval(() => {
    
let fecha = dateTime.now()
console.log(fecha.c);

let h1 = document.querySelector("#fecha");
 let {hour, minute, second} = fecha.c


h1.innerHTML = `${hour}:${minute}:${second}`
}, 1000);