// let original={name:"Sandy",address:{city:"Hsp"}};
// let copy=Object.assign({},original);
// copy.name="Sandeep";
// console.log(copy.name);
// console.log(original.name); // doesn,t reflect in main for outer object
// copy.address.city="Delhi";
// console.log(original.address.city);// changes reflect
// console.log(copy.address.city);//   changes reflect



let original={name:"Sandy",address:{city:"Hsp"}};
let copy={...original};
copy.name="Sandeep";
console.log(copy.name);// sandeep
console.log(original.name); // doesn,t reflect in main for outer object
copy.address.city="Delhi";
console.log(original.address.city);// changes reflect
console.log(copy.address.city);//   changes reflect
