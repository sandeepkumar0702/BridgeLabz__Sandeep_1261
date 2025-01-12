class customError extends Error{
    constructor(message){
        super(message);
        this.name="custom error";
    }
}
function divide(a,b){
    if(b==0){
        throw new customError("cannot divide by zero");
    }
    return a/b;
}
try{
    // console.log(divide(10,0));
    console.log(divide(10,9));
}
catch(error){
    console.log(error);
    console.log(error.message);

}