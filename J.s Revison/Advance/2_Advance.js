// Promises Recap

// Async code ko handle karne ke liye pehle hum Promises use karte the:
// fetch("https://api.example.com/data")
//   .then(res => res.json())
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// Ye kaam karta hai, lekin .then() chaining lambī aur confusing ho jati hai — isko Promise Hell bhi kehte hain



//  async / await — Modern Solution

// async/await ne Promises ko likhne ka simpler aur readable way diya.
// async function:
// Jab kisi function ke aage async likh dete ho, wo hamesha ek Promise return karta hai.
// Matlab: even if you return "Hello", it becomes Promise.resolve("Hello").

// async function greet() {
//   return "Hello World";
// }
// greet().then(msg => console.log(msg)); // "Hello World"


function signup(email, name){
    return new Promise((resolve, reject)=>{
       console.log(`welcome ${name} and Your Email is ${email}`)
    setTimeout(() => {
        resolve({name : name, email : email});
    }, 3000 );
    })
    
 }

 function enterData(user, studRecord){
    return new Promise((resolve, reject)=>{
        console.log(user.name, " Data Entered successfully :-)");
  
    setTimeout(() => {
        resolve(studRecord)
        console.log("showing your student record");
    }, 3000);
    })
    
 }

 function showData(studRecord, callback){
    
    return new Promise((resolve, reject)=>{
     setTimeout(()=>{
    console.log(studRecord);
    resolve("Your Task has been completed, Welcome to the world of Async J.S");
    }, 3000);
    })
    

 }
async function asyncFunction(){
 const user = await signup("haseeb@gmail.com", "Haseeb");

    const studRecord = {
      stud1: "haseeb",
      stud2: "Hamza"
    };
  const record = await enterData(user, studRecord);
  const message = await showData(record);
      console.log(`Student 1 = ${record.stud1}, Student 2 = ${record.stud2}`);
      console.log(message);
    
  
  
}

asyncFunction();
 



//   signup("haseeb@gmail.com", "Haseeb")
//   .then(user => {
//     const studRecord = {
//       stud1: "haseeb",
//       stud2: "Hamza"
//     };
//     return enterData(user, studRecord);
//   }).then(record => {
//     return showData(record).then(message => {
//       console.log(`Student 1 = ${record.stud1}, Student 2 = ${record.stud2}`);
//       console.log(message);
//     });
//   })
//   .catch(err => console.log("Error:", err));


