import { ajax } from "../helpers/ajax.js";
import api from "../helpers/urls.js"
import { ContainerCards } from "./ContainerCards.js";


export const Router = () => {

let {hash} = location;

if (hash == "" || hash == "#/") {
    
    ajax({
        url: api.TODOS,
        callback: (data) => document.querySelector("#main").append(ContainerCards(data))
    })

}else if (hash == "#/buscador"){
    document.querySelector("#main").innerHTML = "<h1> En proceso</h1>"
}
console.log(hash);

}