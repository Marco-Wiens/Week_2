
export class Mobile{

    private name: string;
    private trademark: string;
    private model: string;
    private color: string;
    private price: number;

    constructor(name:string, trademark:string, model:string, color:string, price:number){
        this.name = name;
        this.trademark = trademark;
        this.model = model;
        this.color = color;
        this.price = price;
    }

    
    public getName() : string {
        return this.name;
    }

    public getTrademark() : string {
        return this.trademark;
    }
    
    public getModel() : string {
        return this.model;
    }
    
    public getColor() : string {
        return this.color;
    }
    
    public getPrice() : number {
        return this.price;
    }
    
    public setName(v : string): void {
        this.name = v;
    }
    
    public setTrademark(v : string): void {
        this.trademark = v;
    }
    
    public setModel(v : string): void {
        this.model = v;
    }
    
    public setColor(v : string): void {
        this.color = v;
    }
    
    public setPrice(v : number): void {
        this.price = v;
    }
}