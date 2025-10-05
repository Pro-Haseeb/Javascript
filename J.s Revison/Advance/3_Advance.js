// Fetch API:
// Fetch API browser ka built-in feature hai jo HTTP requests send karne ke liye use hota hai
// (GET, POST, PUT, DELETE etc.).
// Ye asynchronous hoti hai, yani ye background me request send karti hai
// aur response milne par Promise return karti hai.

// Syntax:
// fetch('https://example.com/data')
//   .then(response => response.json())   // JSON data ko parse karta hai
//   .then(data => console.log(data))     // Data ko console me show karta hai
//   .catch(error => console.log(error)); // Error handle karta hai

// fetch() by default GET request bhejta hai.
// Agar koi error aaye (jaise network fail ya server not found),
// to Promise reject hota hai aur .catch() ya try...catch me handle kar sakte ho.

// async/await:
// async keyword ek function ko asynchronous bana deta hai,
// jisme 'await' use karke Promises ko easy syntax me handle kar sakte hain.
// Await likhne ka matlab hai "wait until this Promise resolves".

// ...........

// try...catch:
// try block ke andar hum wo code likhte hain jahan error aane ka chance ho.
// Agar try ke andar koi error aata hai, to catch block us error ko handle karta hai
// taake program crash na ho aur user ko friendly message dikha sake.




async function fetchApi(){
    try{
 const response = await fetch("https://jsonplaceholder.typicode.com/posts");
 const data = await response.json();
 console.log("posts: ", data);
    }
    catch(error){
        console.log("error : ", error);
    }
}

fetchApi();
