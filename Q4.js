"use strict";
class Paymentmethod {
}
class Creditcard extends Paymentmethod {
    processpayment() {
        console.log("Payment Loading");
    }
    getPaymentDetails() {
        console.log("Payment Successful");
    }
}
class Upi extends Paymentmethod {
    processpayment() {
        console.log("Server issue");
    }
    getPaymentDetails() {
        console.log("failed due to server error");
    }
}
const ob11 = new Creditcard();
ob11.processpayment();
