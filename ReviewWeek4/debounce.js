// Write a function debounce that delays the processing of a function call
//  until after a specified time has passed since the 
// last time it was invoked. Useful in scenarios like search input fields.


function print(){
    new Promise((resolve,reject)=>{
        if(true){
            resolve("Printing");
        }
        else{
            reject("Printing");
        }
    })
    .then((result)=>{
        console.log(result);
    })
    .catch(error=>{
        console.log(error);
    })
}
function debounce(callback){
    setTimeout(()=>{
        callback();
    },3000)
}

debounce(print);