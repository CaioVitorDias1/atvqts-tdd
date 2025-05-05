import { error } from "console";
import { Criartriangulo } from "../Criartriangulo"


describe("Fazendo os testes do triÂngulo" , () => {
    
    
    it("Testando se é um escaleno válido:", () => {

        const triangulo = new Criartriangulo(3, 6, 9);

        let resultado = triangulo.tipoTriangulo();

        expect(resultado).toEqual("triangulo escaleno")
    })

    it("Testando se é um isoceles válido:", () => {

        const triangulo = new Criartriangulo(7, 7, 5);

        let resultado = triangulo.tipoTriangulo();

        expect(resultado).toEqual("triangulo isoceles")
    })

    it("Testando se é um equilatero válido:", () => {

        const triangulo = new Criartriangulo(3, 3, 3);

        let resultado = triangulo.tipoTriangulo();

        expect(resultado).toEqual("triangulo equilatero")
    })

    it("3 casos de teste para isoceles com permutação de valores", () => {
        
        const triangulo1 = new Criartriangulo(5, 6, 5);
        const triangulo2 = new Criartriangulo(7, 8, 8);
        const triangulo3 = new Criartriangulo(11, 9, 9);

        let resultado1 = triangulo1.tipoTriangulo();
        let resultado2 = triangulo2.tipoTriangulo();
        let resultado3 = triangulo3.tipoTriangulo();

        expect(resultado1).toEqual("triangulo isoceles")
        expect(resultado2).toEqual("triangulo isoceles")
        expect(resultado3).toEqual("triangulo isoceles")
    })

    it("Testando com um valor 0", () => {
        const triangulo = new Criartriangulo(3, 0, 3);

        let resultado = triangulo.trianguloValido()

        expect(resultado).toEqual("erro")
    })

    it("Testando com um valor negativo", () => {
        
       
        
        const triangulo = new Criartriangulo(3, -1, 3);
        
        expect(triangulo.trianguloValido()).toEqual("erro")
    })

    // it("Testando se a soma de dois lados é igual ao terceiro lado", () => {

    // })
})