// Write a function that runs multiple promises
//  concurrently and handles the results when all of them are resolved.



let p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("User have account");
    },2000)
});
let p2=new Promise((resolve,reject)=>{
    resolve("user Loginned scuccessfully");
})
let p3=new Promise((resolve,reject)=>{
    resolve("user posted successfully");
})

function handlePromise(){
    Promise.all([p1,p2,p3]).then((result)=>{
        console.log(result);
    })
    .catch((error)=>{
        console.log(error);
    })
}
handlePromise();



/// second example if we have to not resokve all promises

let p4=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("User have account");
    },2000)
});
let p5=new Promise((resolve,reject)=>{
    resolve("user Loginned scuccessfully");
})
let p6=new Promise((resolve,reject)=>{
    reject("user have no post");
})

function handlePromise1(){
    Promise.allSettled([p4,p5,p6]).then((result)=>{
        console.log(result);
    })
    .catch((error)=>{
        console.log(error);
    })
}
handlePromise1();