let persona = require("./Person");

class Contacts{

    constructor (){
        this.contactos = new Array();
    }

    printPersons(){
        console.log(this.contactos);
    }
}

module.exports = {Contacts};