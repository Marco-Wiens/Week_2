import { Triangle } from "./triangle";
import { Point } from "./point";


let punto: Point = new Point(3,4);
let punto2: Point = new Point(1,5);
let punto3: Point = new Point(7,1);
let tri: Triangle = new Triangle(punto,punto2,punto3);
console.log(tri.calculateLengthSides());