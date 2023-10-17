let persona = require("./Person.js");

let hobbies= ["Jugar", "Andar", "Baloncesto"];
let anyoActual = new Date().getFullYear();
let persona1 = new persona.Person("Marco", 1.68, 80, 2000, hobbies);

console.log(persona1);
console.log(persona1.calcularIMC());
console.log(persona1.edad(anyoActual));
persona1.printAll();
persona1.printHobbies();