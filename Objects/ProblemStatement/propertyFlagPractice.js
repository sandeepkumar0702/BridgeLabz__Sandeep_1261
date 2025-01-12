
///property flag

const profile= {};
Object.defineProperty(profile, "username", {
    value: "sandy@gmail.com",
    writable: false,
    enumerable: false, 
    configurable: false,
});
Object.defineProperty(profile, "password", {
    value: "sandy@sa",
    writable: true,
    enumerable: false, 
    configurable: false,
});
console.log(profile.password);
console.log(profile.username);
console.log(Object.getOwnPropertyDescriptor(profile,'username'));


