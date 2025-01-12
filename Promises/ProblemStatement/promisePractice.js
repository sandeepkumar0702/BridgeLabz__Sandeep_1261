// let ps='prompt-sync';
// let p=ps();
let canVote=function(age){
    return new Promise((resolve,reject)=>{
        if(age<18){
            reject("annot vote");
        }
        else{
            resolve("can vote in election");
        }
    })
}

let candidate={age:19,name:"Sandeep"};
canVote(candidate.age).then((result)=>{
    console.log(result);
})
.catch(err=>{
    console.log(err);
})
