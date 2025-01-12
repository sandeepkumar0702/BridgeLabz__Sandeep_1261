// Shallow Copy
// let obj1 = { a: 1, b: { c: 2 } };
// let obj2 = Object.assign({}, obj1);
// obj2.b.c = 99;
// console.log(obj2.b.c);
// console.log(obj2.a);


/// secind method

let obj = { a: 1, b: { c: 2 } };
let objj = {...obj};
console.log(obj);
