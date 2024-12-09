class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    greet() {
      console.log(`Hello, my name is ${this.name}`);
    }
  }  
  const p1 = new Person('Sandy', 21);
  p1.greet(); 
  