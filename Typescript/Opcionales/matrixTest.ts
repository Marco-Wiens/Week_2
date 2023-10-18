import { Matrix } from "./Matrix";

let mat1: Matrix = new Matrix(2,4,10);
let mat2: Matrix = new Matrix(2,4,10);


mat1.print();
let mat3: Matrix = mat1.add(mat2);
mat3.print();
let mat4: Matrix = mat1.multNumber(3);
mat4.print();
let mat5: Matrix = mat1.mutSpecial(4);
mat5.print();



