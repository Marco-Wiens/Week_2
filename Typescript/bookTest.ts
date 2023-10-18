import { Book } from "./Book";

let book1: Book = new Book("Introducción a Javascript", 233, "2344433-BC23333", "Joseph Smith", "Now Editions");

console.log(book1.getTitle());
console.log(book1.getNPages());
console.log(book1.getIsbn());
console.log(book1.getAuthor());
console.log(book1.getEditorial());

book1.setTitle("Nuevo titulo");
book1.setNPages(300);
book1.setIsbn("1244341-DR344566");
book1.setAuthor("Marco Wiens");
book1.setEditorial("La Editorial de Todos");

console.log(book1.toString());