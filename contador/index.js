
let cantVisitas = localStorage.getItem("visitas") || 0 

function incrementarContador(){

    cantVisitas = cantVisitas + 1; // 11
    console.log(cantVisitas);
    localStorage.setItem("visitas", cantVisitas)


}

incrementarContador()