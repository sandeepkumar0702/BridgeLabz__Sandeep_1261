function fetchData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Data Fetched Successfully");
        },1000);
    })
}
async function fetchFromApi(){
    try{
        let data=await fetchData();
        console.log(data);
    }
    catch(err){
        console.log(err);
    }
}
fetchFromApi();