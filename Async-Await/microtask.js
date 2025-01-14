console.log("Starts here");//1
setTimeout(()=>{
    console.log("Inside setTimeout");//5//5
})
let greet=async function fun() {
    console.log("in async function");
}();//3//4
Promise.resolve("Hlo from promise").then((data)=>{//4//3
    console.log(data);
}).catch((err)=>{
    console.log(err);
})

console.log("Ends here");//2