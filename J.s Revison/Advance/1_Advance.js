// Callback Function Kya Hai?
// Callback wo function hota hai jo dusre function ko argument ke taur pe pass kiya jata hai, aur wo function baad me (jab zarurat ho) execute hota hai.

// Simple definition:
// “Callback ek function hai jo ek aur function ko input me diya jata hai, aur wo baad me call hota hai.”


// Callback ka Real Use (Async ka saath)

// JavaScript asynchronous hai (time-wali cheezein turant nahi hoti).
// Callbacks zyada tar async tasks ke liye use hote hain, jaise:

// File read/write

// API call

// Database query

// setTimeout / setInterval

// function login  (email, callback){
//     console.log("login successFull ", email);

//     setTimeout(() => {
//         callback({email: email})
//     }, 3000);


// }

function itemsCart (user, callback){
    console.log("Fetching items cart ", user.email)
    setTimeout(() => {
        callback(["laptop", "mobile", "speaker"]);
    }, 3000);
}

function placeOrder(Items, callback){
    console.log("placing order ..........");
    setTimeout(() => {
        callback("order placed");
    }, 3000);
}

login("haseeb333@gmail.com", function(user){
    console.log("welcome user", user)

    itemsCart(user, function(Items){
    console.log("cart items", Items)
       
         placeOrder(Items, function(message){
            console.log("Final message : ", message)
         })
})
});

//Promise

// 3 states in Promise -> "Fullfilled", "Pending", "Rejected"
 // => Promise Chain

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

//  signup("haseeb@gmail.com", "Haseeb").then(user => {
//     const studRecord= {
//         stud1 : "haseeb",
//         stud2 : "Hamza"
//     }
//      enterData(user, studRecord).then(record =>{
        
//        showData(studRecord).then(message =>{
        
//          console.log(`Student 1 = ${record.stud1}, Student 2 = ${record.stud2}`);
//         console.log(message);
           
//        })
//      })
//  })

 signup("haseeb@gmail.com", "Haseeb")
  .then(user => {
    const studRecord = {
      stud1: "haseeb",
      stud2: "Hamza"
    };
    return enterData(user, studRecord);
  }).then(record => {
    return showData(record).then(message => {
      console.log(`Student 1 = ${record.stud1}, Student 2 = ${record.stud2}`);
      console.log(message);
    });
  })
  .catch(err => console.log("Error:", err));

 //  signup("haseeb@gmail.com", "Haseeb", function(user){
//     const studRecord= {
//         stud1 : "haseeb",
//         stud2 : "Hamza"
//     }
//      enterData(user, studRecord, function(record){
        
//        showData(studRecord, function(message){
        
//          console.log(`Student 1 = ${record.stud1}, Student 2 = ${record.stud2}`);
//         console.log(message);
           
//        })
//      })
//  })