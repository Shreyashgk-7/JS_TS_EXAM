interface Discountservice{
    applyDiscount(a:number,b:number) : void
}

class Premiumdiscount implements Discountservice{
    applyDiscount(a:number,b:number): void {
        console.log(a*b);
        
    }
}

const ob12 = new Premiumdiscount();
ob12.applyDiscount(12,45);
