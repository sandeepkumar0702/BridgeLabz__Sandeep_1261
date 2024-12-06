console.log("start");
function fun(){
    setTimeout(()=>{
        console.log("In the set Timeout1");
    },5);
}

function fun2(){
    setTimeout(()=>{
        console.log("In the set Timeout 2");
    },1);
}
fun();
fun2();
console.log("end");
