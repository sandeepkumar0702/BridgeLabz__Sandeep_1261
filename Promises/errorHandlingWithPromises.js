let promise=new Promise((resolve,reject)=>{
    let data;
    // let data=fetch("hlo");
    console.log(data);
    if(data){
        resolve("data fetched successfully");
    }
    else{
        reject("unable to fetch data");
    }
})

promise.then((result)=>{
    console.log(result);
})
.catch((error=>{
    console.log(error);
}))
