// RETO 1

class Person{

    constructor(nombre, height, weight, yearOfBirth){
        this.nombre = nombre;
        this.height = height;
        this.weight = weight;
        this.yearOfBirth = yearOfBirth;

    }

    calcularIMC(){
        let valorIMC = 0;
        if (this.height % 1 != 0){
            valorIMC = (this.weight / (this.height * this.height)).toFixed(2);
        }else{
            valorIMC = "La altura tiene que estar en metros no en centimetros."
        }
        return valorIMC; 
    }

    edad(anyoActual){
        let edad;
        if (this.yearOfBirth != 0 && this.yearOfBirth != undefined){
            edad = "La edad de " + this.nombre 
            + " es " + (anyoActual - this.yearOfBirth);
        }else{
            edad = "Porfavor, introduce correctamente el año de nacimiento de " + this.nombre;
        }

        return edad;
    }

}

let persona1 = new Person("Marco", 1.68, 80, null);
console.log(persona1);
console.log(persona1.calcularIMC());
let anyoActual = new Date().getFullYear();
console.log(persona1.edad(anyoActual));