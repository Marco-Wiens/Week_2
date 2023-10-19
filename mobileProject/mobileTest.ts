import { Mobile } from "./mobile";

let movil1: Mobile = new Mobile("Nokia", "Nokia S.L.", "505", "Gris", 50);

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


