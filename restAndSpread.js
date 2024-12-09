// let arr=[2,1,3,4,5,6,7,8,9];
// function fun(a,b,...rest){// rest operator
//     console.log(a);
//     console.log(b);
//     console.log(rest);
// }
// fun(...arr);//spread operator



// console.log(...arr);// spread operator
function func(arr){
    let [first,second,...rest]=arr;
    let obj1={first,second};
    let obj={
        obj1,
        rest,
    };
    console.log(obj);
}
const arr=[1,2,3,4,5,6,7];
func(arr);