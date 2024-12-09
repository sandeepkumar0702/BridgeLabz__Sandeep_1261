class account{
    #balance 
    constructor(balance){
        this.#balance=balance;
    }
    getbalance(){
        return this.#balance;
    }
}
let acc1=new account(1000);
console.log(acc1.getbalance());