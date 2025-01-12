
new Promise((resolve,reject)=>{
    // let data;
    let data="sam";
    if(!data){
        reject("Data is missing");
    }
    else{
        resolve("Data is fetched");
    }
})
.then((result)=>{
    console.log(result);
    return "hlo";
})
.then((data)=>{
    console.log(data);
    return "welcome to my world";
})
.then((res)=>{
    console.log(res);
})
.catch(error=>{
    console.log(error);
})
.finally(()=>{
    console.log("end");
});