// RETO 1

class Person{

    constructor(nombre, height, weight, yearOfBirth, hobbies){
        this.nombre = nombre;
        this.height = height;
        this.weight = weight;
        this.yearOfBirth = yearOfBirth;
        this.hobbies = hobbies;
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

    printAll(){
        console.log("Nombre - " + this.nombre
                + "\nAltura - " + this.height
                + "\nPeso - " + this.weight
                + "\nAño de Nacimiento - " + this.yearOfBirth);
    }

    printHobbies(){
        console.log(this.hobbies);
    }

}

module.exports = {Person};

