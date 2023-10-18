import { Vector } from "../Vector";

export class Matrix{

    private elements: Vector[];

    constructor(n:number, m:number, k:number){
        this.elements = [];
        for(let i=0; i<n; i++){
            let v:Vector = new Vector(m,k);
            this.elements.push(v);
        }
    }

    public print(): void{
        console.log(this.elements);
    }

    private verLength(matriz1,matriz2){
        let vallen1: boolean = false;
        if (matriz1.length == matriz2.length){
            for(let m in matriz1){
                for(let i=0; i< matriz1.length; i++){
                    if(matriz1[i].length == matriz2[i].length){
                        vallen1 = true;
                    }else{
                        // En caso de que sea falso sale del bucle
                        vallen1 = false;
                        return vallen1;
                    }
                }
            }
        }
        return vallen1;
    }

    public add(m1: Matrix):Matrix{
        let mat1: Matrix = new Matrix(0,0,0);
            let arr2: Vector = new Vector(0,0);
                for(let i=0; i<this.elements.length; i++){
                    for(let j=0; j<this.elements[i].elements.length;j++){
                        arr2.elements.push(m1.elements[i].elements[j] + this.elements[i].elements[j]);
                    }
                    mat1.elements.push(arr2);
                }
        
        return mat1;
    }

    public multNumber(n:number):Matrix{
        let mat1: Matrix = new Matrix(0,0,0);
        let arr2: Vector = new Vector(0,0);
        for(let i=0; i<this.elements.length; i++){
            for(let j=0; j<this.elements[i].elements.length;j++){
                arr2.elements.push(n * this.elements[i].elements[j]);
            }
            mat1.elements.push(arr2);
        }
        return mat1;
    }

    public mutSpecial(n:number):Matrix{
        let mat1: Matrix = new Matrix(0,0,0);
        let arr2: Vector = new Vector(0,0);
        for(let i=0; i<this.elements.length; i++){
            for(let j=0; j<this.elements[i].elements.length;j++){
                let num: number = this.elements[i].elements[j];
                if(num%2 ==0){
                    arr2.elements.push(n * this.elements[i].elements[j]);
                }else{

                    arr2.elements.push((n-1) * this.elements[i].elements[j]);
                }
            }
            mat1.elements.push(arr2);
        }
        return mat1;
    }



        
    
}