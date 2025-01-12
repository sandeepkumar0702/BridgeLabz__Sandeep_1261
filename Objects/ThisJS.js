// console.log(this); // Window object



// "use strict";
// console.log(this); // undefined



// this in methods
const obj1 = {
    name: "Sandeep",
    greet() {
        console.log(this.name);
    }
};
obj1.greet(); // Sandeep





// this in Arrow Functions
// const obj = {
//     name: "Sandeep",
//     greet: () => {
//         console.log(this.name);
//     }
// };
// obj.greet(); // here this is greet function 





const obj2 = {
    name: "Sandeep",
    greet() {
        const inner = () => console.log(this.name);
        inner();
    }
};
obj2.greet(); // Sandeep


// this in Class
class Person {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log(`Hello, ${this.name}`);
    }
}
const person = new Person("Sandeep");
person.greet(); // Hello, Sandeep

// Explicit Binding of this
function greet() {
    console.log(this.name);
}

const obj3 = { name: "Sandeep" };
greet.call(obj3);
greet.apply(obj3);

const boundGreet = greet.bind(obj3);
boundGreet(); // Sandeep