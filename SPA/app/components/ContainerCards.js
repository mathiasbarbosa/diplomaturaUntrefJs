
import { Card } from "./Card.js";

export const ContainerCards = (props) => {
    let {results} = props
    console.log(results);
    let div = document.createElement("div");

    results.map( el => {
        div.append(Card(el))
    })

    return div
}