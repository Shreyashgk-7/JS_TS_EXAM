class InvalidProduct extends Error{
    constructor(name){ 
        super(message)
        this.name="Invalid Product";
    }
}

function products(num){

    try {
       if (num>12) {
        throw new  InvalidProduct ("Wrong Product Selected");
        
       } else {
        console.log("successfully added   " +num+"   prodcut");
        
       } 
    } catch (error) {
        console.log(error.name+":"+error.message);
        
    }

}

products(1);