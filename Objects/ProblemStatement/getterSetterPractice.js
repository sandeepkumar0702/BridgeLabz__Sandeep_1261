let person={
    firstName:"Sandeep",
    LastName:"Kumar"
};
Object.defineProperty(person,"fullName",{
    get(){
        return `${this.firstName} +" "+${this.LastName}`;
    },
    set(name){
        this.firstName=name;
        this.LastName=name;
    }
})
console.log(person);
person.fullName="sandeep Kumar";
console.log(person);
