import { Library } from "./Library";
import { Book } from "./Book";

let book1: Book = new Book("Introducción a Javascript", 233, "2344433-BC23333", "Joseph Smith", "Now Editions");
let book2: Book = new Book("Introducción a BBDD", 250, "1231241241", "Juan Pedro", "Now Editions");
let book3: Book = new Book("Introducción a Typescript", 33, "1231231313", "Joseph Smith", "Now Editions");

let libreria1: Library = new Library([book1,book2,book3], "Calle Domínguez", "Jose Juan");

console.log(libreria1.getAddress());
console.log(libreria1.getManager());
console.log(libreria1.getNumberOfBooks());
console.log(libreria1.findByAuthor("Joseph Smith"));
console.log(libreria1.toString());

libreria1.setAddress("Nueva Dirección");
libreria1.setManager("Manuel Rodríguez");
console.log(libreria1.getAddress());
console.log(libreria1.getManager());
