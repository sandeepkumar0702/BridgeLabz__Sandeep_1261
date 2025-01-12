
// //object creaton
// // Using Object Literals
// const user = {
//     name: "Sandeep",
//     age: 25,
//     greet: function () {
//         console.log(Hello, my name is ${this.name});
//     }
// };
// console.log(user.name);
// console.log(user["age"]);
// user.job = "Engineer";
// user.age = 26;
// delete user.age;
// console.log(person.age);





// Using new Object()
// const user = new Object();
// user.name = "sam";
// user.profession = "Engineer";
// user.age = 22;
// console.log(user);





// // Using Constructor Functions
// function user(name, age) {
//     this.name = name;
//     this.age = age;
// }
// const user1 = new user("sandeep", 30);
// console.log(user1);




// // Using ES6 Classes
// class user{
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }
// const user1= new user("sandy",22);
// console.log(user1);







// // Using Object.create()
const ans = {
    greet() {
        console.log("Hello!");
    }
};

const obj = Object.create(ans);
console.log(obj.greet());
// obj.greet();
