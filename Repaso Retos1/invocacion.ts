import { isEven } from "./condicionales";
import { add } from "./buclesFor";

let arr1: string[] = ["Casa", "Coche", "Ciudad", "Cesta"];
let arr2: string[] = ["Barco", "Baca", "Bicicleta", "Balon", "Bisiesto", "Brasil"];
let arr3: string[] = ["Venezuela", "Veneno", "Voltaje"];

let numarr1 = add(arr1);
let numarr2 = add(arr2);
let numarr3 = add(arr3);

isEven(numarr1);
isEven(numarr2);
isEven(numarr3);