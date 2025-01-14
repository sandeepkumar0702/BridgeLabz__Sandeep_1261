function constl(name,age){
    console.log("hi");
    this.name=name;
    this.age=age;
}
constl.prototype.val=19;
constl.prototype.greet=function(){
    return console.log("hello");
}
let greet1=new constl('sam',12);
let greet2={};
Object.setPrototypeOf(greet2,greet1);
console.log(greet2);
console.log(greet1.__proto__===greet2.__proto__);
console.log(greet2.__proto__===greet1);


// console.log(constl.prototype);
// console.log(greet1.__proto__);
// greet1.greet();
// console.log(greet1.__proto__===constl.prototype);




// // Constructor function
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//   }
  
//   // Adding a method to the prototype
//   Person.prototype.sayHello = function () {
//     return `Hello, my name is ${this.name}!`;
//   };
  
//   // Creating an instance
//   const person1 = new Person("Shivam", 25);
  
//   console.log(person1.sayHello()); // Hello, my name is Shivam!
//   console.log(person1.__proto__ === Person.prototype); // true
//   console.log(person1.__proto__); // Logs Person.prototype
// console.log(Person.prototype.__proto__); // Logs Object.prototype
// console.log(Object.prototype.__proto__); // Logs null
