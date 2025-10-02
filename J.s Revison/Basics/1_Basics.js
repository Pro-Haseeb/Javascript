// Array Methods Part 1
//Filtr
//Reduce
//Find
//Map
//Some
// Every
// Today work
// --> J.s Revision

// map

const studentMarks = [70, 23, 100, 45];

let marks = studentMarks.map((e)=>{
    return e*2;
})


console.log(marks);

// The difference between find and filter in JavaScript:

// filter returns a new array containing all elements that match the condition.
// find returns only the first element that matches the condition (or undefined if none found).

//filter
let filArray = studentMarks.filter((e)=> (e%2 ==0))

console.log(filArray);

//find
let search = studentMarks.find((e) => e>70);

console.log("Find = ", search)


//reduce

// reduce() Kya karta hai?

// reduce() ek array ko ek single value me reduce karta hai.
// Ye ek callback function leta hai jisme accumulator aur current value hoti hai.

// Syntax:
// array.reduce((accumulator, currentValue) => {
//   // logic
// }, initialValue);


// accumulator (acc): result store hota rehta hai (pehle initialValue, phir update hota hai).

// currentValue (curr): abhi wala element jo iterate ho raha hai.

// initialValue (optional): accumulator ki starting value (agar na do, to pehla element le leta hai).


let reduceMethod = studentMarks.filter((e)=> e%2==0).reduce((acc , current)=> acc + current, 0);

console.log("reduce", reduceMethod);


//some
// Check karta hai kya array me koi ek element condition pass karta hai (true/false return karta hai)

let someArray = studentMarks.some(num => num%2==1);

console.log("Some Array Method: ",someArray);


//Every

// Check karta hai kya saare elements condition pass karte hain (true/false)

const everyArray = studentMarks.every(num => num%2==1);

console.log("Every Array Method: ",everyArray);