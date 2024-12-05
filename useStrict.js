// "use strict"
// y="90";
// console.log(y); /// give error no defined


c=0;
function fun(){
    "use strict"
    // y="19o0u4";
    console.log(c); /// work for c
    // console.log(y);  // not ework for y as use striict is local scoped here
}
fun();
