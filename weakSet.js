
const set=new WeakSet();
let objKey={key:'43',name:"sandy"}
let objKey2={key:'41'}
set.add(objKey);
set.add(objKey2);
console.log(set.delete(objKey));
console.log(set.has(objKey));
console.log(set);
