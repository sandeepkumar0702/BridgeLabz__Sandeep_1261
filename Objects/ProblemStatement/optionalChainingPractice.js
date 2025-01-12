//optional chaining   
const user= {
    name: "Sandeep",
    address: { city: "Hoshiarpur" }
};

console.log(user.address?.city); //hsp
console.log(user.contact?.email);  /// give no erroor return undefined

