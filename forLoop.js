const ps=require('prompt-sync');
const p=ps();
/*111Write a program that takes a command-line argument n and prints a table of the
powers of 2 that are less than or equal to 2^n.*/
let n=parseInt(p("ENter the number"));
for(let i=0;i<=n;i++){
    console.log(`2^${i}=${Math.pow(2,i)}`);
}
    



/*22222222222Write a program that takes a command-line argument n and prints the nth harmonic
number. Harmonic Number is of the form

let n=parseInt(p("ENter the number"));
let sum=0;
for(let i=1;i<=n;i++){
    sum+=1/i;
}
console.log(sum);
*/


/*333333333333Write a program that takes a input and determines if the number is a prime
function  isPrime(num){
    for(let i=2;i<=Math.sqrt(num);i++){
        if(num%i==0){
            return "Not prime";
        }
    }
    return "Prime Number";
}
let n=parseInt(p("ENter the number"));
console.log(isPrime(n));


*/



/*444444444Extend the program to take a range of number as input and output the Prime
Numbers in that range.
function  isPrime(num){
    if(num<2){
        return false;
    }
    for(let i=2;i<=Math.sqrt(num);i++){
        if(num%i===0){
            return false;
        }
    }
    return true;
}
let start=parseInt(p("ENter start"));
let end=parseInt(p("ENter end "));
for(let i=start;i<=end;i++){
    if(isPrime(i)){
        console.log(i+" ");
    }
}

*/


/*555555555555Write a program that computes a factorial of a number taken as input.
5 Factorial – 5! = 1 * 2 * 3 * 4 * 5

function find(num){
    if(num===0){
        return 0;
    }
    let ans=1;
    for(let i=1;i<=n;i++){
        ans*=i;
    }
    return ans;
}

let n=parseInt(p("ENter Number"));
let ans=find(n);
console.log(ans);*/

/*6666666666Write a program to compute Factors of a number N using prime factorization method.
Logic -> Traverse till i*i <= N instead of i <= N for efficiency.
O/P -> Print the prime factors of number N*/

// function find(num){
//     let ans=[];
//     for(let i=2;i<=Math.sqrt(num);i++){
//         while(num%i===0){
//             ans.push(i);
//             num/=i;
//         }
//     }
//     if(num>2){
//         ans.push(num);
//     }
//     return ans;
// }
// let n=parseInt(p("ENter Number"));
// let ans4=find(n);
// console.log(ans4);

