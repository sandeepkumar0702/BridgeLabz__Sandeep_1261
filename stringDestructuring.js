let string="abcdeerbmjvm";

// structure destructuring
// let [a,b,c,d,e]=string;
// console.log(a+" "+b+ " "+c+" "+d+" "+e);


//skipping parameter
let [a, , b,c,d,e]=string;
console.log(a+" "+b+ " "+c+" "+d+" "+e);