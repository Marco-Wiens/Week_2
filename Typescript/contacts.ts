import { Person } from "./Person";

export class Contacts{

    public people: Person[];

    constructor(){
        this.people = [];
    }

    public printCalendar(): void{
        console.log(this.people);
    }
}