//after
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



//before
function fetchdata1(callback){
    setTimeout(()=>{
        callback(null,"data fetched");
    },1000);
}
function fetch1(err,res){
    if(err){
        console.log(err);
    }
    else{
        console.log(res);
    }
}
fetchdata1(fetch1);