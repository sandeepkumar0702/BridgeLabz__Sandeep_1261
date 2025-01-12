// const fetchData=()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             const success=false;
//             if(success){
//                 resolve("Data fetched Successfully");
//             }
//             else{
//                 reject("failed to fetch data");
//             }
//         },2000);
//     })
// }

// fetchData()
// .then(
//     result=>{console.log(result);}
// )
// .catch(error=>{
//     console.log(error);
// })


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
.then(result=>{
    console.log(result);
})
.catch(error=>{
    console.log(error);
})