
let products = [
    { name: 'Laptop', price: 1500, category: 'Electronics' },
    { name: 'Phone', price: 800, category: 'Electronics' },
    { name: 'Pen', price: 2, category: 'Stationery' }
];

function findProduct(prod){
    const search=products.find(function search2(obj){
       return obj.category===prod;
    })

    return search;
}

const findSearch=prompt("Enter a Product : ");

const productFind=findProduct(findSearch);

if(productFind.category===findSearch)
{
    console.log(productFind.category," Find")
}
else{
    console.log(findSearch,"Not Find")
}

function calculate()
{
    
    const bill=products.reduce(function reduceFunction(total,tot){
         
        return tot.price + total;
      
    },0)
    return bill;
}


console.log("Total Bill is ", calculate());

function filterMethod(){
const fil=products.filter(function pro(x){
    return x.name=="Laptop";
}).map(pro=>pro.name);

return fil;

}

console.log(filterMethod());

