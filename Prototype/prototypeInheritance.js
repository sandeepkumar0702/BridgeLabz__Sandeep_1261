let obj1={
    name:"Sandeep",
    greet:()=>{
        console.log(`Greeting  from  ${obj1.name}`);
    }
}
let obj2={
    age:21
}
obj2.__proto__=obj1;
obj2.greet();
console.log(obj2.__proto__);
