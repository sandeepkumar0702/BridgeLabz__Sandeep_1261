// Shallow Copy
let obj1 = { a: 1, b: { c: 2 } };
let obj = JSON.parse(JSON.stringify(obj1));
obj.b.c = 50;
console.log(obj1.b.c);
console.log(obj.b.c);