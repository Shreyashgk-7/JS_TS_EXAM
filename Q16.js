function stock(num){
    try {
        if(num>10){
            throw new Error("Cannot add Products");
        }else{
            console.log(num+"     Product Added Successfully");
            
        }
    } catch (error) {
        console.log(error.name+"    "+error.message);
        
    }
}

stock(1);