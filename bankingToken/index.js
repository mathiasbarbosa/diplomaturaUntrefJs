let progres = document.querySelector("#barra")
let intervalo = 0
progres.value = 0

progres.style.width = "680px"

let tokenIntervalo = setInterval(() => {

    progres.value = intervalo
    intervalo++
}, 1000);