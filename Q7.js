class Category{
    categoryid;
    categoryname;
    description;

    constructor(categoryid,categoryname,description){
        this.categoryid=categoryid;
        this.categoryname=categoryname;
        this.description=description;
    }

    displayInfo(){
        console.log(this.categoryid+"    "+this.categoryname+"    "+this.description);
        
    }
}

const ob13 = new Category(12,"Mobile","Low Price best Quality");

ob13.displayInfo();
