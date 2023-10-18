
export class Vector{

    private elements: number[];

    constructor(n:number, k:number){
        this.elements = [];
        for (let i=0; i<n ;i++){
            this.elements.push(Math.round(Math.random()*k));
        }
    }

    public print():void{
        console.log(this.elements);
    }

    public add(v1:Vector):Vector{
        let arr2: Vector = new Vector(0,0);
        if(this.elements.length == v1.elements.length){
            for(let i=0; i<v1.elements.length; i++){
                arr2.elements.push(v1.elements[i] + this.elements[i]);
            }
        }
        return arr2;
    }

    public subs(v1: Vector):Vector{
        let arr2: Vector = new Vector(0,0);
        if(this.elements.length == v1.elements.length){
            for(let i=0; i<v1.elements.length; i++){
                arr2.elements.push(v1.elements[i] - this.elements[i]);
            }
        }
        return arr2;
    }

    public mult(v1:Vector):Vector{
        let arr2: Vector = new Vector(0,0);
        if(this.elements.length == v1.elements.length){
            for(let i=0; i<v1.elements.length; i++){
                arr2.elements.push(v1.elements[i] * this.elements[i]);
            }
        }
        return arr2;
    }

    public multNumber(n:number):Vector{

        let arr3:Vector = new Vector(0,0)
        this.elements.map((value) => {
            arr3.elements.push(value * n);
            return 
        });
        return arr3;
    }
        
}