// •	Function declaration vs expression
// •	Arrow functions
// •	Default/rest parameters
// •	Scope
// ✅ Practice: Factorial function, sum of array function.


// ..........................

//Function Decleratio vs expression


//Fuunction Decleration
obj("haseeb");
function obj(name){
    console.log("my name is", name)
}

     //hoisting can be possible in this type of function

//Function Expression

const obj1 = function (name){
    console.log(`I am a ${name}`)
}

obj1("Function Expression");  //Hoisting can't possible in this type of function

// Arrow Function

let arrow = (x) => console.log(`My name is ${x}`);

arrow("Arrow Function");



//Default parameter

function parameter (name = "no parameter"){
    console.log(`my name is ${name}`)
}

parameter();
parameter("Default Parameter Function");


//rest parameter

function rest(...numbers){
    console.log("I am an rest function where how many parameters are i accept all and gather in array")
    let acc=0;
    for(let i=0 ; i<numbers.length; i++){
        
         acc = acc + numbers[i];
         console.log(numbers[i]);
    }
    return (`Total = ${acc}`);
}

console.log(rest(1, 2, 3, 4,43, 89, 20));


//scope

//there are two types of scope global and local scope

// global scope => can use any where in the code

//local scope => can only use in a block where it is initialize or declare


let globalVar = "I am global"; // global scope

function test() {
    let localVar = "I am local"; // local scope
    console.log(globalVar); // accessible
    console.log(localVar);  // accessible
}

console.log(globalVar); // accessible
// console.log(localVar); // Error: localVar is not defined

//function practice

//factorial function

function factorial(n){
    if(n===0 || n===1){
        return 1;

    }

    return n * factorial(n-1);
}


console.log(factorial(5));

//sum of array function

 let arrayFunction = function(...numbers){
    let allArray = 0;
    for(let i=0 ; i<numbers.length; i++ )
    {
        allArray = allArray + numbers[i];
    }

    return allArray;
}

console.log(arrayFunction([1, 2, 3 , 4, 5]));