// add item in Carts
// total price of items
// remove item by name;
let ps=require('prompt-sync');
let p=ps();


let  Cart = [
    { name: 'Apple', price: 20 },
    { name: 'Banana', price: 20 },
    { name: 'Coconut', price: 20 },
    { name: 'Almonds', price: 20 },
    { name: 'Cashew', price: 20 },
    { name: 'Capsicum', price: 20 },
    { name: 'Milk', price: 20 },
    { name: 'Potato', price: 20 },
    { name: 'Tomato', price: 20 }
];

//1111
function addItem(){
    let itemName=p("Enter Item name");
    let itemPrice=p("Enter Item Price");
    let newItem={itemName,itemPrice};
    Cart.push(newItem);
}

//2222222
// addItem();
// console.log(Cart);

let totalPrice=Cart.reduce((acc,item)=>{
    return acc+item.price;
},0);

console.log(totalPrice);


////333333

function removeItem(){
    let itemValue=p("Enter item to remove");
    Cart=Cart.filter((item=>{
        return item.name!=itemValue;
    }));
    // console.log(c);
}
removeItem();
console.log(Cart);


