// Inheritance
class vehicle{
    constructor(name) {
        this.name = name;
    }
    wheell() {
        console.log(`${this.name} .`);
    }
}
class  car extends vehicle {
    constructor(name, wheel) {
        super(name);
        this.wheel = wheel;
    }

    wheell() {
        console.log(`${this.name}, with  ${this.wheel} wheel`);
    }
}
const car1 = new car("scorpio",4);
car1.wheell(); 
