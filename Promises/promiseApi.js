//resolve
// Promise.resolve("Hlo world")
// .then((result)=>{
//     console.log(result);
// })




///reject
// Promise.reject("rejected")
// .then((result)=>{
//     console.log(result);
// })
// .catch(error=>{
//     console.log(error);
// })




///promise.all
//11111111111111
// const p1 = Promise.resolve(10);
// const p2 = Promise.resolve(20);
// const p3 = Promise.resolve(30);
// Promise.all([p1,p2,p3])
// .then(result=>{
//     console.log(result);//print result
// })
// .catch(error=>{
//     console.log(error);
// })
///2222222222222222
// const p1 = Promise.resolve(10);
// const p2 = Promise.reject(20);
// const p3 = Promise.resolve(30);
// Promise.all([p1,p2,p3])
// .then(result=>{
//     console.log(result);//print result
// })
// .catch(error=>{
//     console.log(error);
// })




// //promise.allSetled
// const p1 = Promise.resolve(10);
// const p2 = Promise.reject("Error in p2");
// const p3 = Promise.resolve(30);
// Promise.allSettled([p1, p2, p3])
//     .then(results => console.log(results));



// //promise any
// const p1 = Promise.reject(10);
// const p2 = Promise.reject("Error in p2");
// const p3 = Promise.resolve(30);
// Promise.any([p1,p2,p3])
// .then(result=>{
//     console.log(result);
// })
// .catch(error=>{
//     console.log(error);
// })



///promise.race
let p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject(100);
    },10000)
});
let p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject(90);
    },2000)
});
let p3=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(20);
    },3000)
});
Promise.race([p1,p2,p3])
.then(result=>{
    console.log(result);
})
.catch(error=>{
    console.log(error);
})

