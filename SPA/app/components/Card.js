
export const Card = (props) => {
    let {id, image, name, species} = props
    // console.log(props);
    let div = document.createElement("div");
    div.style.width =  "18rem";

    div.innerHTML = `
            <img src=${image} class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${name}</h5>
                <p class="card-text">${species}</p>
                <a href="${name}" id=${id} class="btn btn-primary">Detalle</a>
            </div>
    `

    return div
}