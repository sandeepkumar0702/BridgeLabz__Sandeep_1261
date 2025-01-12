
//method 1


// const obj = {
//     [Symbol.toPrimitive](hint) {
//       if (hint === 'string') {
//         return 'This is a string!';
//       }
//       return 100;
//     }
//   };
  
//   console.log(String(obj)); /// return string 
//   console.log(Number(obj));  // return number


  ///method 2
  let ans=10;
  console.log(typeof(ans.toString()));


  const num = new Number(42);
  console.log(num.valueOf()); // Output: 42
  
  
