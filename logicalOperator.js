/*console.log(true && true);  // true
console.log(true && false); // false
console.log(false && true);   
console.log(false && false); 
// and op


//or opertor
console.log(true || true);  // true
console.log(true || false); // true
console.log(false || true);   // true
console.log(false || false); // false
*/
//not operator
console.log(!true);


// User inputs
let name = "Sandy"; 
let age = 25;             
let agree = true; 
let isGuest = false;    

// Validation
if (name && (age >= 18 && age < 60) && agree && !isGuest) {
    console.log("you can join the party");
} else {
    if (!name) {
        console.log("Error: name cannot be empty.");
    }
    if (!(age >= 18 && age < 60)) {
        console.log("Error: Age must be between 18 and 60.");
    }
    if (!agree) {
        console.log("Error: You must agree to the terms and conditions.");
    }
    if (isGuest) {
        console.log("Error: Guest accounts are restricted.");
    }
}




