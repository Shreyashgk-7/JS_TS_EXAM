function paymentsttus(pay){
    try {
        if (pay) {
            console.log("Payment Successful");
            
        } else {
            throw new Error("Insufficient Balance");
        }
    } catch (error) {
        console.log(error.name+":"+error.message);
        
    }finally{
        console.log("Done");
        
    }
}

paymentsttus(true);