import { Mobile } from "./mobile";

let movil1: Mobile = new Mobile("Nokia", "Nokia S.L.", "505", "Gris", 50);
let movil2: Mobile = new Mobile("Samsung", "Sony", "S22", "Negro", 600);
let movil3: Mobile = new Mobile("Huawei", "Huawei SL", "Mega", "Blanco", 200);

console.log(movil1.getName());
console.log(movil1.getTrademark());
console.log(movil1.getModel());
console.log(movil1.getColor());
console.log(movil1.getPrice());

movil1.setName("Iphone");
movil1.setTrademark("Apple");
movil1.setModel("14 Pro");
movil1.setColor("Green");
movil1.setPrice(700);

let myMobiles: Mobile[] = [movil1, movil2, movil3];

for (let m in myMobiles){
    myMobiles[m].print();
}


