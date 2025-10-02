// 🔹 Day 4 – Closures & Higher-Order Functions • Closures (examples) • Highe
// r-Order Functions ✅ Practice: Make a function that returns another function
// for multiplication.




// 🔹 Closures

// 👉 Jab ek function dusray function ke andar hota hai aur inner function
//  outer function ke variables ko 
// access kar sakta hai even after outer function execution is finished, usay closure kehte hain.


 function outerFunction(twoCount){
   let count=0;
return function innerFunction(){
   count=count+twoCount;
   return count;
 }
  
}

let counter = outerFunction(2);

console.log(counter());
console.log(counter()); // --> this is closure and also higher order function



// 🔹 Higher-Order Functions

// Higher-Order Function (HOF) wo hota hai jo:

// Ek function ko parameter ke tor pe accept kare, ya

// Ek function return kare

// Ye concept functional programming me bohot powerful hai.
// Example: map, filter, reduce inbuilt HOFs hain.


function multiplyby(num){
    function innerFunction(num2){
     num2++;
     let multiply = num * num2;
     return multiply;
    }
  
    return innerFunction;

}


let fun = multiplyby(12);
console.log(fun(0));


// as an argument


function calculate(a, b, operation){
  return operation(a, b);
}

function add(x, y){
  return x+y;
}

function multiply(x , y){
  return x*y;
}

console.log(calculate(10, 12, add));
console.log(calculate(10, 12, multiply));

