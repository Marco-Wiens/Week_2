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
console.log(punto.calculateDistance(punto2));
console.log(punto.calculateQuadrant());

let arrPts: Point[] = [punto,punto2,punto3];

console.log(punto.calculateNearest(arrPts));

