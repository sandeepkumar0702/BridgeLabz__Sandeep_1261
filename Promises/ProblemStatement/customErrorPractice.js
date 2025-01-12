class PaymentError extends Error {
    constructor(message) {
        super(message);
        this.name = "PaymentError";
    }
}
function checkBalance(accountBalance,withAmount) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (accountBalance >= withAmount) {
                resolve("Payment processed successfully!");
            } else {
                reject(new PaymentError("Insufficient funds"));
            }
        }, 1000);
    });
}
function processPayment(accountBalance, withAmount) {
    checkBalance(accountBalance, withAmount)
        .then((message) => {
            console.log(message);
        })
        .catch((error) => {
            if (error instanceof PaymentError) {
                console.error(`Payment failed : ${error.message}`);
            }
        })
        .finally(() => {
            console.log("Payment process completed.");
        });
}

// processPayment(500, 300);
processPayment(200, 300);
