// function printNumber(n){
//     if(n==0){
//         return ;
//     }
//     console.log(n--);
//     printNumber(n);
// }
// printNumber(5);
function printNumber(i,n){
    console.log(i);
    if(n==i){
        return ;
    }
    i++;
    printNumber(i,n);
}
printNumber(1,5);