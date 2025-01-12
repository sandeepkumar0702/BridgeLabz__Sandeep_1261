/// synchronous callback
// function greet(){
//     console.log("hlo my name is sam");
// }
// function greet1(name,fun){
//     console.log(`${name}`);
//     fun();
// }
// greet1("sam",greet);


///Asynchronous callback


function  handle(){
    console.log("Data fetched succesfully");
}
function fetch(){
    setTimeout(()=>{
        handle();
    },2000);
    console.log("data is fetching");
}
fetch();