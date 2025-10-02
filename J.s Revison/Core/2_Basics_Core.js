// Topics:

// if / else (decision making)

// switch (multiple cases)

// Loops:

// for

// while

// do...while

// for...in vs for...of (object aur array iteration ka difference)

// ............................


// if / else (decision making)

const num1 = 10;
const num2 = 20;

if (num2 > num1) {
    console.log("num2 is greater than num1");
}
else if (num1 === num2) {
    console.log("num1 is equal to num2");
}
else {
    console.log("num1 is greater then num2");
}

//switch (multiple cases)

let days = 1;

switch (days) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid Day");

}



//Loops => for loop, for in, for of, while, do while

//for loop
days = ["monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
for (let i = 0; i < days.length; i++) {
    console.log("Day " + `${i + 1}` + " is " + days[i]);
}

// for in loop

const person = {
    student1: "haseeb",
    student2: "ali",
    student3: "hassan",
    student4: "Asif",
    student5: "Babar"
}

for (let student in person) {
    console.log(`${student} is ${person[student]}`);
}

//for of loop

let string = "haseeb";

for (let char of string) {
    console.log(char);
} //string

for (let day of days) {
    console.log(day);
} //array

let numbers = new Set([1, 2, 3, 4]);

for (let num of numbers) {
    console.log(num);
}//set

let mapp = new Map([
    ["haseeb", 21],
    ["Ali", 12],
    ["hania", 3],
    ["hadi", 2.5],
    ["minha", 1]
]);

for (let [name, age] of mapp) {
    console.log(`my name is ${name} and i am ${age} years old`);
}//map

// while and do while loop
let i = 0
while (i <= 6) {
    console.log(days[i]);
    i++;
}

//i know do while
let a = 1;
do {
    console.log(a);
    a++;
} while (a <= 6)




// Ek program banao jo check kare k number positive, negative ya zero hai.

// Ek program banao jo switch ka use karke week ka din print kare (1 = Monday … 7 = Sunday).

// 1 se 100 tak ke saare even numbers print karo.

// User se ek number lo aur uska multiplication table print karo (1–10).

// Ek program banao jo 1 se 10 tak numbers ka sum nikale using for loop.

// Ek program banao jo factorial calculate kare using while loop.

// Ek program banao jo kam se kam ek baar loop chalaye chahe condition false ho (do while).

// Ek object banao aur uske saare keys aur values print karo using for...in.

// Ek array banao aur uske saare elements print karo using for...of.

// Ek program banao jo check kare k number prime hai ya nahi.


//1. 

// const prompt = require('prompt-sync')();for running in node enviroment we have to install this module
// let qustion1 = Number(prompt("Enter a Number : "));
let qustion1 = 1;

if(qustion1 > 0)
{
    console.log("number is positive", qustion1);
}
else if (qustion1 ==0){
    console.log("Number is Zero", qustion1)
}
else{
    console.log("number is negative", qustion1);
}

//2. 

days = 1;

switch (days) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid Day");

}


//3.

for(let i=1; i<=100 ; i++){
    console.log(i);
}

//4.

// const prompt = require('prompt-sync')();//for running in node enviroment we have to install this module
// const  table = Number(prompt("Enter a Number : "));
const table= 13;
let tab=1;
while(tab<=10){
  console.log(table*tab);
  tab++;
}

//5.
let sum=0;
for(let i=1; i<=10; i++){
     sum = sum + i;
}
console.log("sum of 1 t0 10 = ", sum);

//6.

let factorial  = 5;

let totalafact = 1;
while(factorial>0){
    totalafact = totalafact*factorial;

    --factorial;
}

console.log("factorial of 5 is = ", totalafact);

//7. 

let nam = {
    student1 : "Haseeb",
    student2 : "Ahmad",
    student3 : "Ali"
};
i=7;
do{
    console.log(nam.student1);
    i++;
}while(i<=5); //wrong condition but still runs one time


//8.

for(let stud in nam){
    console.log(`${stud} is ${nam[stud]}`)
}


//9.

for ( let stud of string){
    console.log(stud);
}

//10. 

// ...existing code...

// Prime number check karne wala program
const prompt = require('prompt-sync')();
let number = Number(prompt("Enter a number: "));
let isPrime = true;

if (number <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }
}

if (isPrime) {
    console.log(number + " is a prime number.");
} else {
    console.log(number + " is not a prime number.");
}
// ...existing code...