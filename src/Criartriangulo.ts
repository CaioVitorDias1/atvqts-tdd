import { error } from "console"

export class Criartriangulo {
    lado1: number
    lado2: number
    lado3: number

    constructor(lado1: number, lado2: number, lado3: number){
        this.lado1 = lado1
        this.lado2 = lado2
        this.lado3 = lado3

        let seOtringuloehvalido = this.trianguloValido()
        
        // if(seOtringuloehvalido == "erro"){
        //     throw new error("O trinagulo eh invalido")
        // }

        console.log("esse é um: ", this.tipoTriangulo())
    }

    tipoTriangulo(){
        if(this.lado1 == this.lado2 && this.lado2 == this.lado3){
            return "triangulo equilatero"
        } else if ( this.lado1 == this.lado2 || this.lado1 == this.lado3 || this.lado2 == this.lado3){
            return "triangulo isoceles"
        } else {
            return "triangulo escaleno"
        }
    }

    trianguloValido():string {
        if(this.lado1 + this.lado2 > this.lado3 && this.lado1 + this.lado3 > this.lado2 && this.lado2 + this.lado3 > this.lado1){
            return "triangulo valido"
        }else {
            return "erro"
        }
    }
}