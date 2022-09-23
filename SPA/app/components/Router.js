import { ajax } from "../helpers/ajax.js";
import api from "../helpers/urls.js"
import { Card } from "./Card.js";
import { ContainerCards } from "./ContainerCards.js";


export const Router = () => {

let {hash} = location;

if (hash == "" || hash == "#/") {
    
    ajax({
        url: api.TODOS,
        callback: (data) => document.querySelector("#main").append(ContainerCards(data))
    })

}else if (hash == "#/buscador"){
    // document.querySelector("#main").innerHTML = "<h1> En proceso</h1>"
    let inputBuscador = document.querySelector("#buscador");
    inputBuscador.style.display = "block"

    inputBuscador.addEventListener("change", (event) => {
        console.log(event.target.value);
        let parametroNombre = event.target.value;
        console.log(api.SEARCHNAME+parametroNombre);
        ajax({
            url:api.SEARCHNAME+parametroNombre,
            callback: (data) => { document.querySelector("#main").append(ContainerCards(data))}
        })
    })


}else{
    console.log(api.SEARCHID+localStorage.getItem("id"));
    ajax({
        url:api.SEARCHID+localStorage.getItem("id"),
        callback: (data) => document.querySelector("#main").append(Card(data))
    })
}
console.log(hash);

}