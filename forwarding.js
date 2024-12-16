function add(a,b){
    return a+b;
}
function wrapFunction(...args){
    console.log("Wrapper forwarding the call");
    return add(...args);
}
let ans=wrapFunction(5,10);
console.log(ans);