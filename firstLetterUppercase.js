// . Create a function that will capitalize the first letter of each word in a text


let str="hi my name is sandeep";
function toUpperCase(str){
    let ans="";
    for(let i=0;i<str.length;i++){
        if(i==0){
            ans+=str[i].toUpperCase();
        }
        else{
            if(str[i-1]==' '){
                ans+=str[i].toUpperCase();
            }
            else{
                ans+=str[i];
            }
        }
    }
    return ans;
}
let ans=toUpperCase(str);
console.log(ans);