abstract class Paymentmethod {
  abstract processpayment(): void;
  abstract getPaymentDetails(): void;
}

class Creditcard extends Paymentmethod{
    processpayment(): void {
        console.log("Payment Loading");
        
    }

    getPaymentDetails(): void {
        console.log("Payment Successful");
        
    }
}

class Upi extends Paymentmethod{
    processpayment(): void {
        console.log("Server issue");
        
    }

    getPaymentDetails(): void {
        console.log("failed due to server error");
        
    }
}


const ob11 = new Creditcard();
ob11.processpayment()