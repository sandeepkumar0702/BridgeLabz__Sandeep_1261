const fetchData=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const success=false;
            if(success){
                resolve("Data fetched Successfully");
            }
            else{
                reject("failed to fetch data");
            }
        },2000);
    })
}
fetchData().then((result=>{
    console.log(result);
}))
.catch((err)=>{
    console.log(err);
})