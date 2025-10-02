// Do numbers ko add karo aur result print karo.

// Ek variable ka data type check karo.

// Ek string number ko number mai convert karke ek normal number ke sath add karo.

// Ek const variable banao aur usay reassign karne ki koshish karo.

// == aur === ka difference dikhane k liye example banao.

// Do numbers ka remainder (%) find karo.

// Logical AND (&&) aur OR (||) ka use dikhane wala example banao.

// Do strings ko concatenate (jornay) karo.

// Alag alag values ko Boolean mai convert karke result check karo.

// undefined aur null ka example dikhayo aur dono ka output check karo
// ....................................................


// 1. Do numbers ko add karo aur result print karo.

let num1= 10;
let num2= 20;

console.log("1 => Addition of Two Numbers is " , num1 + num2)

// 2. Ek variable ka data type check karo.

console.log("2 => ", typeof num1);

// 3. Ek string number ko number mai convert karke ek normal number ke sath add karo.

let strNum = "10";

let num = 10;
 console.log( "3 => ", Number(strNum) + num);

// 4. Ek const variable banao aur usay reassign karne ki koshish karo.

const pi =3.14;

// pi = 3.15;

console.log("4 => Value of pi is ", pi);

// 5. == aur === ka difference dikhane k liye example banao.

let a =5;
let b = "5";
let c = 2;
let d = 2;
if(a == b ){
    console.log("5 => a is equal to b but its type is not same");
}
if (c===d){
    console.log(`5 => ${a}, Type: ${typeof c} is equal to${d}, Type: ${typeof d} and its type is also same`);
}

// 6. Do numbers ka remainder (%) find karo.

let number1 = 10;
let number2 = 3;

console.log("6 => Remainder of two numbers is ", number1 % number2);

// 7. Logical AND (&&) aur OR (||) ka use dikhane wala example banao.

if (number1 == 10 && number2 ===3){
       
    console.log(`7 => Number1 == ${number1} and Number2 === ${number2}. If both condition is true`)
}

if (number1 === 10 || a === b ){
    console.log(`7 => Number1 = ${number1}  and  ${a} = ${b}. if any or both condition are true `)
}

// 8. Do strings ko concatenate (jornay) karo.

const string1 = "Today is Day1 of J.S Revision";
const string2 = "In this Revision we are covering J.S for better Concepts";

console.log("8 => " + string1 + ". " + string2)

// 9. Alag alag values ko Boolean mai convert karke result check karo.

console.log( "9 => " + Boolean(1));
console.log( "9 => " + Boolean("hi"));
console.log( "9 => " + Boolean("   "));
console.log( "9 => " + Boolean(""));
console.log( "9 => " + Boolean(null));
console.log( "9 => " + Boolean(0));

// 10. undefined aur null ka example dikhayo aur dono ka output check karo
 let undefine ;
 let nulVar = null;

 console.log(`10 => Value of undefined variable  is ${undefine} 
    and its type is ${typeof undefined}. Value of null variable is
     ${nulVar} and its type is ${typeof nulVar}`);

