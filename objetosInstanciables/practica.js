// Crear una clase JS instanciable, denominada Producto

// Sus Propiedades:

// - ID
// - Descripción
// - Stock (unidades en stock)
// - Precio
// - IVA

class Producto{

    constructor(id, descrp, stock, precio ){
        this.id = id;
        this.descrp = descrp,
        this.stock = stock,
        this.precio = precio,
        this.iva = 1.21
        this.precioConIva
    }

//     Métodos

// - Método precioConIVA()
// - Método descontarDeStock(unidades) //controlar no negativos
// - Método precioTotalUnidades(unidades) //que devuelva el importe total con IVA multiplicado por las unidades a comprar

    precioConIva(){
        let resultado = this.precio * this.iva;
        this.precioConIva = resultado
    }

    decontarStock(unidades) {
        if(unidades > this.stock){
            alert("no tenemos stock suficiente")
        }else{
            this.stock = this.stock - unidades
        }
    }

    precioTotalUnidades(unidades){
        let resultado = this.precioConIva * unidades;

        return alert("el total de la compra, llevando " + unidades + " es " + resultado)
    }

}

let idPrompt = parseInt(prompt("ingrese id"));

let descrpPrompt = prompt("ingrese descrp");

let stockPrompt = parseInt(prompt("ingrese stock"));

let precioPrompt = parseInt(prompt("ingrese precio"));


// let producto2 = new Producto()


let producto1 = new Producto(idPrompt, descrpPrompt, stockPrompt, precioPrompt)

console.log(producto1);

producto1.precioConIva()

console.log(producto1);

let cantidadARestar = parseInt(prompt("Ingrese cant a comprar"))
producto1.precioTotalUnidades(cantidadARestar)
producto1.decontarStock(cantidadARestar)

console.log(producto1);