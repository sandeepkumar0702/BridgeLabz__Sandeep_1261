// console.log(Error);

class customError extends Error{
    constructor(message){
        super();
        this.message=message;
        this.stackTraceLimit=5;
        this.name="custom error";
    }
}

function func(a,b){
    if(a<b){
        throw new customError("Not possible");
    }
    else if(b==0){
        throw new customError("cannot divide by zero");
    }
    return a/b;
}
try{
    // let result=func(19,8);
    let result=func(8,19);
    // let result=func(19,0);
    console.log(result);
}
catch(err){
    console.log(err);
}