let inputs = document.querySelectorAll("input")

console.log(inputs);


for (const input of inputs) {
    input.addEventListener("focus", () => {
        input.setAttribute("class", "seEstaViendo")
    })

    input.addEventListener("blur", () => {
                input.removeAttribute("class","seEstaViendo")
            })
}

// for(const input of inputs) {
//     input.addEventListener("blur", () => {
//         input.removeAttribute("class","seEstaViendo")
//     })
// }

console.dir(window.scrollX)

window.addEventListener("scroll", ()=> {
    
    if (window.scrollY > 20) {
        // nav.style.display = "none"
        console.log("Scroll en " + window.scrollY);
    }
    
})

let btnEnviar = document.querySelector("#enviar")


window.addEventListener("online", () => {
    //instruccciones
    btnEnviar.removeAttribute("disabled")
    console.log("Estamos conectados");
})


window.addEventListener("offline", () => {
    console.log(" no estas conectado");
    btnEnviar.setAttribute("disabled", true)
})

// console.log(window.navigator);


