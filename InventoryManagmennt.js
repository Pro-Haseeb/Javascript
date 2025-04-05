let products=[
{name: "Mobile" , quantity:3 , price:12000, category: "Digital Products" },
{name: "LapTops", quantity:5, price:50000, category: "Digital Products" },
{name: "Watches", quantity:8, price:6000, category: "Accessories" }
]

function addProduct(){
    let name= prompt("Enter Name of a New Product: ");
let quantity= Number(prompt("Enter Quantity of a New Product: "));
let price=Number( prompt("Enter Price of a New Product: "));
let category= prompt("Enter Category of a New Product: ");

products.push(
    {name: name, quantity: quantity, price: price, category: category})

 console.log(`${name} added into Inventory`);
 

}


function updateQuantity(){

    let newProductName=prompt("Enter Name of a Product: ");
    let newQuantity= Number(prompt("Enter Quantity of a New Product: "));

    const checkQuantity=products.find(check=>check.name==newProductName);
    if(checkQuantity)
    {
        checkQuantity.quantity=newQuantity;
        console.log(`${newProductName} quatity has been updated`);
    }
    return checkQuantity;
}

function deleteProduct()
{
    let productName=prompt("Enter Name of a Product that You want to Delete: ");
    products=products.filter(pro=>pro.name!==productName);
    console.log(`${productName} deleted from Inventory`);
}

function showLowStock()
{
    let lowStock= products.filter(prod=>prod.quantity<4);
    if(lowStock.length>0)
    {
        lowStock.forEach(pro => console.log(`${pro.name} has low stock. Quantity is less then 4`));
     // let nameLowStock=lowStock.map(pro=>pro.name)
      
      
    }
    else{
        console.log("No Product With Low Stock.")
    }
    return lowStock;

}

function calculateTotalAmount()
{
 let tot= products.reduce(function totalValue(total, product){
        return total+(product.price*product.quantity);
    },0);
    return tot;
}

function checkStatus()
{
    products.forEach(pro=>
        console.log(`${pro.name} is ${pro.quantity>0 ? "instock ": "OutofStock"}`)
    )
}



let newMenu="string";
let decide="string";
do{
let update=Number( prompt("What You Want to Do: \n 1. Update Stock \n 2. Show Full Stock \n 3. End Process"));

if(update==2)
console.log(products);

else if(update==3)
{
    console.log("Exiting.........")
}

else if(update==1)
{
do{

    newMenu=Number( prompt("What You Want to Do: \n 1. ADD PRODUCT \n 2. Update Quantity of Product \n 3. Delete Product\n 4. Show Low Stock \n 5. Calulate Total Amount\n 6. Check Status\n 7. Go to MainMenu\n choose one"));
if(newMenu==1)
addProduct();

else if(newMenu==2)
updateQuantity();

else if(newMenu==3)
deleteProduct();

else if(newMenu==4)
showLowStock();

else if(newMenu==5)
console.log("Total Amount of Item in the Stock : ", calculateTotalAmount());

else if(newMenu==6)
checkStatus();

 decide=prompt("Are You Sure That You Want to Exit Update Menu : ")
}while(decide=="No" || decide=="no");
    }
}while(newMenu==7 || decide=="Yes" || decide=="yes");




