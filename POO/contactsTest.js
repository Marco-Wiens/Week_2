let contacto = require("./contacts");
let persona = require("./Person");


let hobbies= ["Jugar", "Andar", "Baloncesto"];
let persona1 = new persona.Person("Marco", 1.68, 80, 2000, hobbies);
let persona2 = new persona.Person("Lucia", 1.72, 50, 1997, hobbies);
let persona3 = new persona.Person("Maria", 1.80, 63, 2002, hobbies);

let contact = new contacto.Contacts();

contact.contactos.push(persona1,persona2,persona3);
contact.printPersons();