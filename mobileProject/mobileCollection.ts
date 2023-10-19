import { Mobile } from "./mobile";

export class MobileCollection{

    private mobiles: Mobile[];
    private totalPrice: number;

    constructor(mobiles:Mobile[]){
        this.mobiles = mobiles;
        this.totalPrice = this.totalPriceCalculation();
    }

    
    public getTotalPrice() : number {
        return this.totalPrice;
    }
    
    public getMobiles() : Mobile[] {
        return this.mobiles;
    }
    
    public setTotalPrice(v : number) {
        this.totalPrice = v;
    }
    
    public setMobiles(v : Mobile[]) {
        this.mobiles = v;
    }   
    
    private totalPriceCalculation(): number{
        let suma: number = 0;
        for(let mov of this.mobiles){
            suma += mov.getPrice();
        }
        return suma;
    }

    public printCollection(): void{
        let totalMobiles: string = "";
        console.log("These are all my mobiles: ");
        
        for(let mov of this.mobiles){
            totalMobiles += mov.print();
        }
        console.log("\n******************\nPrice overall: " + this.totalPrice);
    }
}