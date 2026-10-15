class Product{
    Productid;
Productname;
price;
category;

constructor(Productid,Productname,price,category){
    this.Productid=Productid;
    this.Productname=Productname;
    this.price=price;
    this.category=category;
}

displayInfo(){
    console.log("Product Name  "+this.Productname+"    Product Id"+this.Productid+"   Price"+this.price+"    Category"+this.category);
    
}
}

const ob1 = new Product(1,"Oppo",3343,"Mobile");
ob1.displayInfo();