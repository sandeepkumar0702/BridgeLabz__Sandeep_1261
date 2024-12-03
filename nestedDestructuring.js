let object={
    user:{
        id:1,
        info:{
            age:11.,
            firstname:"Sandy",
        }
    }
};
let {user:{info:{firstname,age}}}=object;
console.log(firstname+" "+age);