// let obj={
//     name:"sam",
//     age:22,
// }
// let obj2=Object.create(null);
// console.log(obj2);
// obj2.greet=function(){
//     console.log(`hlo form ${this.name}`);
// }
// // obj2.prototype.val=23;   not allowed
// Object.defineProperty(obj2,"name",{
//     value:"sam",
// })
// obj2.greet();
// // console.log(obj2.values());// not allowed





/// usinf setprototype
let obj={
    name:"sam",
    age:22,
}
Object.defineProperty(obj,"pname",{
    value:"sandy",
    enumerable:true
})
// obj.prototype.val=11;
console.log(obj.__proto__);
console.log(obj);



let obj2=Object.assign({},obj);
console.log(obj2);
obj2.greet=function(){
    console.log(`hlo form ${this.name}`);
}