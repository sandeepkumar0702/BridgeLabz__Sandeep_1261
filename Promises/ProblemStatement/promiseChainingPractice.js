function post(){
    return new Promise((resolve,reject)=>{
        resolve("you can post")
    })
}

function createAccount(){
    return new Promise((resolve,reject)=>{
        resolve("Sign in succesfully")
    })
}

function login(){
    return new Promise((resolve,reject)=>{
        resolve("login successfully")
    })
}

createAccount()
.then(result=>{
    console.log(result);
    return login();
})
.then(result=>{
    console.log(result);
    return post();
})
.then(result=>{
    console.log(result);
})
.catch(err=>{
    console.log(err);
})
.finally(()=>{
    console.log("end");
})
