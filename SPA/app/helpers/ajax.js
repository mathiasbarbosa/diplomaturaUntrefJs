
export const ajax = (props) => {
    console.log("props => ",props);
    let {url, callback} = props;

    fetch(url)
        .then( respuesta => respuesta.json())
        .then(  data => callback(data) )
}

