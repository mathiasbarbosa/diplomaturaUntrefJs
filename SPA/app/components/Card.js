
export const Card = (props) => {
    let {id, image, name, species} = props
    // console.log(props);
    let div = document.createElement("div");
    div.style.width =  "18rem";

    document.addEventListener("click", (event) => {
        console.log(event.target);
        if (event.target.className == "btn btn-primary") {
            localStorage.setItem("id", event.target.id)
            // Swal.fire({
            //     icon: 'error',
            //     title: 'Oops...',
            //     text: 'Something went wrong!',
            //     footer: '<a href="">Why do I have this issue?</a>'
            //   })
        }
    })

    div.innerHTML = `
            <img src=${image} class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${name}</h5>
                <p class="card-text">${species}</p>
                <a href="#/${name}"  id=${id} class="btn btn-primary">Detalle</a>
            </div>
    `

    return div
}