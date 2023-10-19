import { Point } from "./point";

let punto: Point = new Point(3,4);
let punto2: Point = new Point(3,4);

punto.setX(4);
punto.setY(5);
console.log(punto.getX());
console.log(punto.getY());
punto.toString();
console.log(punto.distanceToOrigin());
console.log(punto.calculateDistance(punto2));
