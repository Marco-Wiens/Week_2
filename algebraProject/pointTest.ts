import { Point } from "./point";

let punto: Point = new Point(3,4);
let punto2: Point = new Point(3,4);
let punto3: Point = new Point(7,1);
let punto4: Point = new Point(2,8);

punto.setX(-4);
punto.setY(5);
console.log(punto.getX());
console.log(punto.getY());
punto.toString();
console.log(punto.distanceToOrigin());
console.log("Distancia Punto1 - Punto2: " + punto.calculateDistance(punto2));
console.log("Distancia Punto1 - Punto3: " + punto.calculateDistance(punto3));
console.log("Distancia Punto1 - Punto4: " + punto.calculateDistance(punto4));
console.log(punto.calculateQuadrant());

let arrPts: Point[] = [punto4,punto2,punto3];

console.log(punto.calculateNearest(arrPts));

