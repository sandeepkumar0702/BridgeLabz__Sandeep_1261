function fun(){
    let cnt=0;
    return function(){
        cnt++;
        return cnt;
    }
}
// console.log(fun());
let myFunction=fun();
console.log(myFunction());
console.log(myFunction());
