function areCirclesIntersecting(p1,p2,r1, r2) {
    const distance = Math.sqrt((p2[0] - p1[0]) ** 2 + (p2[1] - p1[1]) ** 2);
    console.log(distance);
    return distance <= r1 + r2 && distance >= Math.abs(r1 - r2);
}
let p1=[0,0];
let p2=[4,0];
console.log(areCirclesIntersecting(p1,p2,5,5));
  