import { Mobile } from "./mobile";
import { MobileCollection } from "./mobileCollection";

let movil1: Mobile = new Mobile("Nokia", "Nokia S.L.", "505", "Gris", 50);
let movil2: Mobile = new Mobile("Samsung", "Sony", "S22", "Negro", 600);
let movil3: Mobile = new Mobile("Huawei", "Huawei SL", "Mega", "Blanco", 200);
let movil4: Mobile = new Mobile("Oppo", "Sony", "Lite", "Azul", 350);


let myMobiles: Mobile[] = [movil1, movil2, movil3, movil4];

let myCollection: MobileCollection = new MobileCollection(myMobiles);

myCollection.setMobiles(myMobiles)
console.log(myCollection.getMobiles());
// let sumaPrecio: number = movil1.getPrice() + movil2.getPrice() + movil3.getPrice() + movil4.getPrice() 
// myCollection.setTotalPrice(sumaPrecio)
console.log(myCollection.getTotalPrice());

