// 1. Execution Context kya hota hai?

// Jab bhi JavaScript code run hota hai, JS engine ek environment banata hai jahan code execute hota hai.
// Us environment ko kehte hain Execution Context.
// Socho jaise ek “room” jahan tumhara code temporarily reh kar execute hota hai.

// Types of Execution Context:

// Global Execution Context (GEC)
// Ye automatically create hota hai jab script start hoti hai.
// Isme global variables aur functions hote hain.
// Ye sirf ek hi baar banta hai.
// Function Execution Context (FEC)
// Jab bhi koi function call hota hai, ek naya execution context banta hai us function ke liye.
// Har function ka apna “private room” hota hai — apni variables, arguments waghera ke sath.

// Har Execution Context ke 2 phase hote hain:

// Creation Phase

// JS engine memory allocate karta hai (variables ko undefined deta hai).
// Functions ka pura code memory me store hota hai.
// Execution Phase
// Ab actual code line-by-line execute hota hai.
// Variables ko real values milti hain.

// Example:
var name = "Haseeb";

function greet() {
  var message = "Hello " + name;
  console.log(message);
}

greet();


// Step by Step:

// Global Execution Context banta hai:
// Memory phase:
// name → undefined
// greet → function code
// Execution phase:
// name = "Haseeb"
// greet() call hoti hai → new Function Execution Context create hoti hai
// Function Execution Context (for greet):

// Memory phase:
// message → undefined

// Execution phase:
// message = "Hello Haseeb"
// console.log("Hello Haseeb")

// Jab function ka kaam khatam hota hai → uska context destroy ho jata hai.


// 2. Call Stack kya hota hai?

// Call Stack ek stack data structure hai (LIFO: Last In, First Out)
// Ye track rakhta hai ke kaunsa function currently execute ho raha hai.

// Example:
function one() {
  console.log("One");
  two();
}

function two() {
  console.log("Two");
  three();
}

function three() {
  console.log("Three");
}

one();


// Call Stack flow:

// Step	Action	Stack
// 1	Global Execution Context created	[Global]
// 2	one() called	[Global → one()]
// 3	two() called inside one	[Global → one() → two()]
// 4	three() called inside two	[Global → one() → two() → three()]
// 5	three() finishes	[Global → one() → two()]
// 6	two() finishes	[Global → one()]
// 7	one() finishes	[Global]
// 8	End of program	Stack empty 




// 1. Hoisting kya hota hai?

// Hoisting ka matlab hai:
// JavaScript engine code execute karne se pehle variables aur functions ko memory me “top” par le jaata hai (virtually).
// Yani tum code me variable niche likho, lekin JS uska reference upar bana leti hai creation phase me.

// Jab code run hota hai:
// JS engine pehle Creation Phase me:
// Variables ko memory me rakhta hai aur unhe undefined set karta hai.
// Functions ka pura code memory me store karta hai.
// Phir Execution Phase me actual values assign hoti hain.

console.log(name1);
var name1 = "haseeb";  //Answer Undefined. It is hoisting tha

// console.log(letname);
let letname = "Hamza";  //error
console.log(letname) 
// Explanation:
// Behind the scenes, JS ye karta hai:

// var name2; // hoisted to top → default: undefined
// console.log(name2);
// name = "Haseeb";


//function is hoisted

// Explanation:

// Function declarations poora code ke sath hoist hoti hain —
// is liye tum unhe call kar sakte ho before they appear in code.

greet();
function greet(){
    console.log("Hello bro");
}


// 1. JavaScript ka nature

// JavaScript single-threaded language hai —
// yani ek waqt me sirf ek hi line of code execute hoti hai.

// Lekin phir bhi JS asynchronous kaam (jaise API calls, setTimeout, promises, etc.) handle karti hai —
// aur ye magic Event Loop karta hai. 

// 2. Execution Environment samjho

// JavaScript ke paas ye 4 main parts hote hain:

// Call Stack → jahan synchronous code line-by-line chalta hai.

// Web APIs → browser ke async kaam sambhalte hain (setTimeout, fetch, etc.).

// Task Queues (Macrotask Queue) → async tasks wapas bhejte hain.

// Microtask Queue → Promises aur MutationObserver ke liye special queue.

// Event Loop → ye continuously check karta rehta hai ke call stack khaali hai ya nahi.

// 3. Event Loop ka kaam kya hai?

// Event Loop continuously check karta hai:
// “Agar Call Stack empty ho gaya, to queue me koi pending task hai kya?”
// Agar haan — to us task ko stack me daal kar run kar do 