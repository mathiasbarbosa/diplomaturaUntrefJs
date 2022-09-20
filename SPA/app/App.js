import { Header } from "./components/Header.js"
import { Main } from "./components/Main.js"
import { Router } from "./components/Router.js"
import api from "./helpers/urls.js"

export const App = () => {
    let divRoot = document.querySelector("#root")
    divRoot.innerHTML = ""
    console.log(api);
    
    divRoot.innerHTML += `<h1> Primer sitio SPA </h1>`
    divRoot.appendChild(Header())
    divRoot.appendChild(Main())

    Router()
}