// 🔹 this Kya Hai?

// Short answer:
// 👉 this ka matlab hota hai "ye object" — matlab jis object ne function call kia, this usi ko refer karta hai.

// Example 1 – Object ke andar function

const car ={
    brand : "Toyota",
    model : "Corolla",
    showInfo : function(){
        console.log(`Brand Name is ${this.brand} and Model name is ${this.model}`)
    }
}

car.showInfo();


// 🔹 Example 2 – Simple function (global scope)

// function show() {
//   console.log(this);
// }
// show();

// 💡 Browser mein:
// this → window object ko refer karta hai.
// Kyunke koi specific object nahi hai jo function ko call kar raha ho.

// Example 3 – this inside a constructor

function Vehicle(brand, model){
   this.brand = brand;
   this.model = model;

    console.log(`Brand Name is ${this.brand} and Model name is ${this.model}`)
   
}


const car1 = new Vehicle("Kia", "Sportage");


// Example 4 – Arrow function vs Normal function

const person ={
    Name : "Haseeb",
    Age : 21,
    showMarks : function(){
        console.log(`${this.Name} has 499 out of 500 in Web Application :-)`);
    }, 

    ArrowFunction :  ()=>(console.log(`${this.Name} has 100 out of 500 in Math :-(`))
        
    
}
person.showMarks();
person.ArrowFunction();  // name will be undefined in arrow function this will not perform in it
//Settimeout ka sath arrow chlay ga jub ka normal ka sath ya ,ethod work nhi krain ga

// Explanation:
// normalFunc → this person object ko refer karta hai.
// arrowFunc → apna khud ka this nahi rakhta.
// Wo apne parent scope ka this use karta hai (yahan window).



// Example 5 – this with event listeners (DOM)
// const btn = document.querySelector("button");

// btn.addEventListener("click", function() {
//   console.log(this); // <button> element
// });
// Explanation:
// Yahan this → button element ko refer karta hai,
// kyunke usne function ko trigger kia.


// 2. classes

// without constructor
class student{
    
   introduce(name, age, city){
    console.log(`My Name is ${name} and age is ${age} and I live in ${city}. Constructor is not used in it.`)
   }
}
const newObj = new student;
newObj.introduce("Haseeb", 12, "Rahim Yar Khan");  

// with constructor

class student2{
    constructor(name, age, city){
      this.name = name;
      this.agee = age;
      this.cityy = city;
        }
   introduce(){
    console.log(`My Name is ${this.name} and age is ${this.agee} and I live in ${this.cityy}. Constructor is used in it.`)
   }
}
const obj2 = new student2("Ali", 23, "Lahore");
obj2.introduce();


// ..............................................

// prototype
// What is __proto__ / Prototype?

// JavaScript main har object ke paas ek hidden property hoti hai jiska naam hota hai
// __proto__ — ye basically link hoti hai dusray object se (usually parent ka prototype).

// Isay hum Object Inheritance ka base keh sakte hain.

const carProto = {
  drive: function() {
    console.log("Car is driving 🚗");
  }
};

const myCar = {
  brand: "Toyota"
};

myCar.__proto__ = carProto; // linking prototypes
