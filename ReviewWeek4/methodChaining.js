// Write a function that returns a promise. 
// The promise should chain multiple operations, and proper error handling should be implemented

let data={
    name:"sandeep",
    age:22
}
function readData(){
    return new Promise((resolve,reject)=>{
        if(data){
            resolve(data);
        }
        else{
            reject("data not found");
        }
    });
}


function changeAge(newAge){
    data.age=21;
    return data;
}


readData()
.then((result)=>{
    console.log(result);
})
.then(()=>{
    let newData=changeAge(21);
    console.log(newData);
})
.catch(error=>{
    console.log(error);
})

