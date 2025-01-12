const obj1 = { name: 'Sam', age: 25 };
const obj2 = obj1; 

obj2.age = 30;
console.log(obj1.age); //30
console.log(obj2.age); //30
