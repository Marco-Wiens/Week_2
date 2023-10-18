import { Person } from "./Person";

let anyoActual: number = new Date().getFullYear();

let persona1: Person = new Person("Marco",2000,"Calle Azurita");

persona1.name = "Luis";
persona1.age = 1990;

persona1.printName();
console.log(persona1.yearOfBirth(anyoActual));
persona1.setAddress("Calle SanMiguel");
console.log(persona1.getAddress());

