let ps=require('prompt-sync');
let p=ps();
let categories=new Set(); 
let items=[];
const map=new Map([['Grocery',[{'name':'onion',cnt:2,price:1999},{'name':'potato',cnt:1,price:1999}]],['cloths',[{'name':'pant',cnt:2,price:1999}]]]);
function addItem(){
    let  category="Grocery";
    let itemBought="onion";
    let productList=map.get(category);
    let isFound=false;
    productList.forEach(product => {
        if (product.name==itemBought && product.cnt> 0) { 
            let price=product.price;
            let date=new Date();
            items.push({
              category,
              itemBought,
              price,
              date
            });
            product.cnt--;
            isFound=true;
            categories.add(category);
        }
    });
    if(!isFound){
        console.log("Item noot available");
    }
}
function viewItems(){
    for (let item of items) {
        console.log(`Category: ${item.category} ItemBought = ${item.itemBought}`);
    }
}
function filterByCategory(){
    let filteredCategory=p("enter category type")
    for(let item of items){
        if(item.category==filteredCategory){
            console.log(`ItemName= ${item.itemBought} and price = ${item.price}`);
        }
    }

}
function totalprice(){
    let TotalPrice=0;
    for(let item of items){
        TotalPrice+=item.price;
    }
    console.log(`Total Price = ${TotalPrice}`);
}
// console.log(map);
addItem();
addItem();
addItem();
// console.log(map);
// addItem();
// viewItems();
// console.log(items);
// console.log(categories);

// filterByCategory();

totalprice();






