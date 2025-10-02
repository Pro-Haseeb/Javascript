//sort

//  1. sort()

// Array ko sort karta hai (string ya numbers dono).
// By default strings ke hisaab se sort karta hai, is liye numbers sort karte waqt callback dena zaroori hai.

// // Strings
// let names = ["Haseeb", "Ali", "Zara", "Bilal"];
// names.sort();
// console.log(names); // ["Ali", "Bilal", "Haseeb", "Zara"]

// // Numbers
// let numbers = [40, 100, 5, 9];
// numbers.sort((a, b) => a - b); // ascending
// console.log(numbers); // [5, 9, 40, 100]


let names = ["Haseeb", "Ali", "Hamza"];

names.sort();
console.log(names);

let numbers = [12, 11, 34, 32, 2];


// agr negative hoa to b bara hoga or positive hoa to a. negative hoa to a ki value phlay aye gi array ma or Positive hoa to b ki aye gi value phlay
//ascending
let aescending = numbers.sort((a, b) => (a - b));

console.log(aescending);

// descending

let descending = numbers.sort((a, b) => (b - a));
console.log(descending);

//object

let obj = [
    { stud1: "haseeb", RollNo: 42 },
    { stud2: "Ali", RollNo: 12 },
    { stud3: "Hasan", RollNo: 21 }
]

const objSorting = obj.sort((a, b) => {
    return a.RollNo - b.RollNo;
});

console.log("Object Sorting = ", objSorting);

//forEach


// forEach kuch return nahi karta—ye hamesha undefined return karta hai.
// Isliye forEachSorting me kuch bhi store nahi hota

const forEachSorting = obj.forEach((value, index) => {
    console.log(`${index} : ${JSON.stringify(value)}}`)
})

console.log(forEachSorting);



//spread

// Use cases summary:
// String ko todna
// Array ya object copy karna
// Multiple arrays/objects merge karna
// Function arguments pass karna

// 1. string break
let namee = "haseeb";

const arrr = [...namee];

console.log("String Break into Array ", arrr)

// 2. copy array or object
const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 8];
const obj1 = {
    name1: "haseeb",
    rollno1: 3
}
const obj2 = {
    name2: "ahmad",
    rollno2: 12
}

const copyArray = [...arr1];
console.log("Array Copy", copyArray);

const copyObj = { ...obj1 };
console.log("Copy Object : ", copyObj);

// 3. Merged Array or Object 
const mergedArray = [...arr1, ...arr2];
console.log("Mergerd Array ", mergedArray);

const mergerdObj = { ...obj1, ...obj2 };
console.log("Merged Object ", mergerdObj);

//4. Function Argument pass krna
function spreadFunction(a, b, c, d) {
    return a + b + c + d;
}


console.log("sum for spread array method = ", spreadFunction(...arr1));

// Rest
// Rest Operator Kya Hai?

// Rest operator multiple values ko ek single array/object me ikattha kar deta hai.

// Spread = cheezon ko phaila dena

// Rest = cheezon ko jama karna
// Summary:

// Rest function arguments handle karne me useful hai.

// Destructuring (array/object) ke sath baaki values ko collect karne me use hota hai.

// Always last position pe likha jata hai (warna error aata hai).

function rest(...arr) {
    return arr.reduce((acc, current) => acc + current);
}

console.log("Rest Numbers Sum ", rest(1, 2, 3, 4));

// specific + rest 

function rest1(a, b, ...arraay) {
    console.log("a = ", a, "b = ", b, "sum = ", a + b);

    const answer = arraay.reduce((acc, current) => {
        return acc * current
    })
    return answer;
}


rest1(10, 30, 5, 32, 54, 21);
console.log(rest1(10, 30, 5, 32, 54, 21));


// 🔹 Example 3: Array Destructuring me Rest
let arr = [1, 2, 3, 4, 5];

let [first, second, ...restArray] = arr;

console.log(first);  // 1
console.log(second); // 2
console.log(restArray);   // [3, 4, 5]


// 🔹 Example 4: Object Destructuring me Rest
let user = { name: "Ali", age: 22, city: "Lahore", country: "Pakistan" };

let { name, ...restObj } = user;

console.log(name); // "Ali"
console.log(restObj); // { age: 22, city: "Lahore", country: "Pakistan" }


// 1. Object Methods

// JavaScript objects ke sath teen main methods aate hain:

// 1. Object.keys 

let objMethod = { name: "Ali", age: 22, city: "Lahore" };

console.log("object Keys: ", Object.keys(objMethod))

//2. object.values

console.log("object Values: ", Object.values(objMethod));

// 3. Object Enteries

console.log(`Object Enteris: ${Object.entries(objMethod)}`);
// console.log(`Object Enteris: `, Object.entries(objMethod));



// Object Destructing
// Object destructuring ka matlab hota hai object ki properties ko variables me todna (extract karna)
let { fname, age } = objMethod;

console.log("name : ", fname);
console.log("age : ", age);

//rename

let { name: newname } = objMethod;

console.log("New name of objMethod first index value : ", newname);



// 3. Practice Task

// Sort names alphabetically
let students = { s1: "Zara", s2: "Ali", s3: "Bilal", s4: "Kiran" };

const studentsValue = Object.values(students);

studentsValue.sort();

console.log("sort values of object : ", studentsValue);
