
export class Point{

    private x: number;
    private y: number;

    constructor(x:number, y:number){
        this.x = x;
        this.y = y;
    }

    
    public setX(v : number) {
        this.x = v;
    }
    
    public setY(v : number) {
        this.y = v;
    }
    
    public getX() : number {
        return this.x;
    }
    
    public getY() : number {
        return this.y;
    }

    public toString(): void{
        console.log("(" + this.x + "," + this.y + ")");
    }

    public distanceToOrigin():number{
        return Math.sqrt(Math.pow(this.x , 2) + Math.pow(this.y , 2));
    }

    public calculateDistance(anotherPoint: Point):number{
        return Math.sqrt(Math.pow((anotherPoint.getX()-this.x),2) + Math.pow((anotherPoint.getY()-this.y),2));
    }
}