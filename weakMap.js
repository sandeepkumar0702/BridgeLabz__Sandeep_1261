
const map=new WeakMap();
let objKey={key:'43'}
let objKey2={key:'41'}
map.set(objKey,'my name is sandy');
map.set(objKey2,'my name is simmi');
console.log(map.get(objKey));
// map.delete(objKey);
// console.log(map.get(objKey));
console.log(map.has(objKey));
console.log(map.get(objKey2));
