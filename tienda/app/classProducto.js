

export class Producto {
    constructor(nombre, precio, imagen, id, stock, categoria, cantidad){
        this.nombre =  nombre,
        this.precio = precio,
        this.img = imagen,
        this.id = id,
        this.stock = stock,
        this.categoria = categoria
        this.cantidad =  cantidad || 1
    }


    // metodos sumarCantidad

    sumarCantidad(){
        if (  Number(  this.cantidad) < Number( this.stock)) {
            return this.cantidad++
        }else{
            return this.cantidad
        }
    }

    restarCantidad(){
        // return this.cantidad -- 
        if (this.cantidad < 0) {
            return this.cantidad 
        }else{
            return this.cantidad --
        }
    }
}