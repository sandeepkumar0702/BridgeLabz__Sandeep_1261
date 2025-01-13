// Write a custom object that overrides the valueOf and
//  toString methods to demonstrate the conversion to primitive values.
const obj={
    value:21,
    valueOf(){
        return this.value;
    },
    toString(){
        return "hey Sandeep";
    }
}
console.log(typeof(Number(obj)));
console.log(String(obj));
console.log(typeof(String(obj)));
