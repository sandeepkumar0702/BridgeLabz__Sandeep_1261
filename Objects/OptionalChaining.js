const user = {
    name: "Sandeep",
    address: {
        city: "asr"
    },
    greet() {
        return "Hello!";
    }
};
console.log(user.address?.city);
console.log(user.address?.zipcode); // undefined
console.log(user.profile?.age);
console.log(user.greet?.());
console.log(user.sayBye?.()); // undefined (safe, doesn't throw an error)

const user1 = {
    profile: {
        details: {
            age: 25
        }
    }
};
console.log(user1?.profile?.details?.age); // 25
console.log(user1?.account?.balance); // undefined

function getUserInfo(user) {
    return user?.details?.info || "No details available";
}
console.log(getUserInfo({ details: { info: "User data" } })); // User data
console.log(getUserInfo(null)); // No details available