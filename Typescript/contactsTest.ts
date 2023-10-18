import { Person } from "./Person";
import { Contacts } from "./contacts";

let persona1: Person = new Person("Pedro",2001,"Calle Arroz");
let persona2: Person = new Person("Mario",1995,"Calle Luz");
let persona3: Person = new Person("Luis",1999,"Calle Roja");

let contacto1: Contacts = new Contacts();
contacto1.people.push(persona1,persona2,persona3);

contacto1.printCalendar();
