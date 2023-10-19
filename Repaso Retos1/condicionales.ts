
function zodiac(day:number, month:number): string{
    let signo:string = "";
    if((day >= 21 && month == 3) || (day <= 19 && month == 4)){
        signo = "Aries";
    }else if((day >= 20 && month == 4) || (day <= 20 && month == 5)){
        signo = "Tauro";
    }else if((day >= 21 && month == 5) || (day <= 20 && month == 6)){
        signo = "Géminis";
    }else if((day >= 21 && month == 6) || (day <= 22 && month == 7)){
        signo = "Cáncer";
    }else if((day >= 23 && month == 7) || (day <= 22 && month == 8)){
        signo = "Leo";
    }else if((day >= 23 && month == 8) || (day <= 22 && month == 9)){
        signo = "Virgo";
    }else if((day >= 23 && month == 9) || (day <= 22 && month == 10)){
        signo = "Libra";
    }else if((day >= 23 && month == 10) || (day <= 21 && month == 11)){
        signo = "Escorpio";
    }else if((day >= 22 && month == 11) || (day <= 21 && month == 12)){
        signo = "Sagitario";
    }else if((day >= 22 && month == 12) || (day <= 19 && month == 1)){
        signo = "Capricornio";
    }else if((day >= 20 && month == 1) || (day <= 18 && month == 2)){
        signo = "Acuario";
    }else if((day >= 19 && month == 2) || (day <= 20 && month == 3)){
        signo = "Piscis";
    }else{
        signo = "Porfavor introduzca una fecha válida."
    }
    return signo;
}

function continent(country: string): void{
    let asia: string[] = ["China", "Rusia", "Japón", "India", "Tailandia"];
    let europa: string[] = ["España", "Francia", "Portugal", "Alemania", "Italia"];
    let africa: string[] = ["Uganda", "Congo", "Sudáfrica", "Kenia", "Nigeria"];
    let oceania: string[] = ["Australia", "Nueva Zelanda", "Fiyi", "Samoa", "Tonga"];
    let america: string[] = ["Canadá", "Brasil", "México", "Argentina", "Colombia"];
    let estas: string = "";

    //Se usa .indexOf porque .includes no existe en ES5 
    if(asia.indexOf(country) > -1){
        estas = "¡Estás en Asia!";
    }else if(europa.indexOf(country) >-1){
        estas = "¡Estás en Europa!";
    }else if(africa.indexOf(country)>-1){
        estas = "¡Estás en Africa!";
    }else if(oceania.indexOf(country)>-1){
        estas = "¡Estás en Oceania!";
    }else if(america.indexOf(country)>-1){
        estas = "¡Estás en América!";
    }else{
        estas = "Introduce un país correcto";
    }
    console.log(estas);
}

export function isEven(num: number): void{
    let tuNum: string = "";
    if(num%2 == 0){
        tuNum = "El número es par."
    }else{
        tuNum = "El número es impar."
    }
    console.log(tuNum);
}

// console.log(zodiac(11,10));
// continent("España");
// isEven(12342342342342342);