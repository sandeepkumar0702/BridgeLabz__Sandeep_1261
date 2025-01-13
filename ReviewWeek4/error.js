// Create a custom error class that extends the built-in
//  Error class, and implement the toString() method 
// to return a formatted string of the error message.

class customError extends Error{
    constructor(message){
        super();
        this.message=message;
        this.code=400;
    }
    toString(){
        return this.message+" with error code = "+ this.code;
    }
}

function div(a,b){
    if(b==0){
        throw new customError("Not possible");
    }
    return a/b;
}

try{
    let result=div(10,0);
    console.log(result);
}
catch(error){
    // console.log(error);
    // console.log(error.message);
    console.log(error.toString());
}