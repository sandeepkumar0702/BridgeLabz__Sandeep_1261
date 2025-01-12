// const myNumber = {
//     value: 7,
//     toString() {
//         return `Number: ${this.value}`;
//     },
//     valueOf() {
//         return this.value * 2;
//     }
// };
// console.log(String(myNumber));
// console.log(Number(myNumber));
// console.log(myNumber + " is awesome!");
// console.log(myNumber * 3);






const obj = {
    [Symbol.toPrimitive](key) {
        if (key === "string") {
            return "String";
        } else if (key === "number") {
            return 42;
        } else {
            return null;
        }
    }
};
console.log(String(obj));
console.log(Number(obj));
console.log(obj + "");