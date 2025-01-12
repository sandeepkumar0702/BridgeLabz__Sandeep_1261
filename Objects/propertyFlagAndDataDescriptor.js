const obj = {};
Object.defineProperty(obj, 'name', {
  value: 'Sandeep',
  writable: true,
  enumerable: true,
  configurable: true
});

const obj2 = {};
Object.defineProperty(obj2, 'greeting', {
  value: 'Hello!',
  writable: false,
  enumerable: true,
  configurable: false
});

console.log(obj.name);
console.log(obj2.greeting);

obj2.greeting = 'Hi!';/// give error as writable is false
console.log(obj2.greeting);
