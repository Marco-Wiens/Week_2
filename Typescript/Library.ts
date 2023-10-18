import { Book } from "./Book";

export class Library{

    private books: Book[];
    private address: string;
    private manager: string;

    constructor(books: Book[], address: string, manager: string){
        this.books = books;
        this.address = address;
        this.manager = manager;
    }

    public getAddress(): string{
        return this.address;
    }

    public setAddress(address: string): void {
        this.address = address;
    }

    public getManager(): string{
        return this.manager;
    }

    public setManager(manager: string): void{
        this.manager = manager;
    }

    public toString(): string{
        let todos: string = "";

        for(let book in this.books){
            let num: number = Number(book) + 1;
            todos += '\n\nBook' + num +':' + this.books[book].toString();
        }
        return todos;
    }

    public getNumberOfBooks(): number{
        return this.books.length;
    }

    public findByAuthor(author: string): Book[]{
        let librosAuthor: Book[] = []; 
        for(let book in this.books){
            if (this.books[book].getAuthor() == author){
                librosAuthor.push(this.books[book]);
            }
        }

        return librosAuthor;
    }
}