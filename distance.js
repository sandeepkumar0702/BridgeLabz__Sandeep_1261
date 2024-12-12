// 41. Create a function to calculate the distance between two points defined by their x, y coordinates
function distance(p1,p2){
    let x=Math.pow((p2[0]-p1[0]),2);
    let y=Math.pow((p2[0]-p1[0]),2);
    let ans=Math.sqrt(x+y);
    return ans;
};
let point1=[0,0];
let point2=[11,11];

let ans=distance(point1,point2);
console.log(ans.toFixed(2));