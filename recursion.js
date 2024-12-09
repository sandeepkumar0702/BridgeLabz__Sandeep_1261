console.log("1234");
function fun(n){
    if(n==0 || n==1){
        return 1;
    }
    return fun(n-1)*n;
}
let ans=fun(5);
console.log(ans);