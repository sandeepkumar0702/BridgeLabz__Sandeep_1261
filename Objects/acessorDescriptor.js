const obj = {};
let _name;
Object.defineProperty(obj, 'name', {
  get(){
    return _name;
  },
  set(value){
    _name=value;
  },
  enumerable: true,
  configurable: true
});

console.log(obj.name);//undefinded
obj.name="sandy";
console.log(obj.name);//sandy

