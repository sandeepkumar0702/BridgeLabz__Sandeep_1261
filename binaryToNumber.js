let string="1101";
function binarToString(string){
    //using inbuilt
    let ans=parseInt(string,2);
    return ans;



    // let ans=0;
    // let pow=0;
    // for(let i=string.length-1;i>=0;i--){
    //     if(string[i]=='1'){
    //         ans+=Math.pow(2,pow);
    //     }
    //     pow++;
    // }
    // return ans;
}
let ans=binarToString(string);
console.log(ans);