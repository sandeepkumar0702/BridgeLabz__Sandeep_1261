// Object.create()
const parent = {
    greet() {
      console.log("Hi from parent!");
    },
  };
  
  const child = Object.create(parent);
//   child.prototype.greet=function(){ 
//     console.log("hlo from child");
//   }  doesnot set property as upper line create the null object using create
child.greet=function(){
    console.log("hlo form child");
}
  child.greet();
  console.log(child);
  





//// /inheritance using assign
// let fly={
//     flyingBird(){
//         console.log("flying birds");
//     }
// }
// let swim={
//     swimmingBird(){
//         console.log("Swimming  birds");
//     }
// }
// let bird=Object.assign({},fly,swim);
// console.log(bird);




///inheritance using extend






