import {add} from "./5_Extra.js"; //named import and export
// Named Export
// Multiple exports ho sakte hain ek file me.
// Curly braces {} lagane zaroori hote hain import karte waqt.
// Naam bilkul same hona chahiye jo export me likha ho.


import minus from "./5_Extra.js";
// Default Export
// Ek hi hota hai per file.
// Curly braces {} use nahi hote import karte waqt.
// Naam apni marzi se rakh sakte ho import karte waqt.


let name = "Haseeb";
console.log(`Hello ${name}, welcome!`);

let msg = `
This is line 1
This is line 2
`;

let user = { id: 1, username: "haseeb", age: 22 };
let { username, age } = user;
console.log(username, age); // haseeb 22


// 3. Spread / Rest (recap)

// Spread (copy/merge arrays/objects):

let arr1 = [1, 2];
let arr2 = [3, 4];
let merged = [...arr1, ...arr2]; 
console.log(merged); // [1,2,3,4]

// Rest (collect remaining values):

function sum(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3, 4)); // 10


//import and Export
add();
minus();



//  Optional Chaining (?.)
// Normally agar tum nested object ka property access karo jo exist nahi karti, JS error throw karta hai:
// 👉 Mostly APIs ya databases se aane wale data me use hota hai jahan property ho bhi sakti hai aur nahi bhi.
let obj = {profile : {name : "Haseeb"}};
//with out optional chaining
// console.log(obj.nam.address);   //ERROR is ma error aye ga kyn ka address undefined ha;

//with optional chaining
console.log(obj?.nam?.adress) //Undefined aye ga error nhi aye ga is ma



// Nullish Coalescing (??)
// Normally agar tum || (OR operator) use karo default value set karne ke liye:

// Problem: "" (empty string), 0, false bhi falsy hote hain aur || unhe bhi replace kar dega.
let input ="";
let answer = input || "DEFAULT VALUE";
console.log(answer);  //answer = default

// Nullish Coalescing (??) ka kaam hai sirf null ya undefined ko check karna.
let input2 =0;
let answer2 = input2 ?? "DEFAULT VALUE";
console.log(answer2);  //answer = default

// Fayda: Tumhari default value sirf tab lagegi jab variable null ya undefined ho.