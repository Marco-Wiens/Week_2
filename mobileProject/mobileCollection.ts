import { Mobile } from "./mobile";

export class MobileCollection{

    private mobiles: Mobile[];
    private totalPrice: number;

    constructor(mobiles:Mobile[]){
        this.mobiles = mobiles;
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
    
}