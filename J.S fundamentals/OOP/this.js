
//   function show() {
 //     console.log(this); 
 //   }
// class BankAccount {
//     constructor(accountHolder, balance) {
//       this.accountHolder = accountHolder;
//       this.balance = balance;
//       this.accountHolder = "Ali";
//       this.accountHolder = "Ahmad";
//     }
  
//     deposit(amount) {
//       this.balance += amount;
//       console.log(`${this.accountHolder} deposited Rs. ${amount}. New Balance: Rs. ${this.balance}`);
//     }
  
//     withdraw(amount) {
//       if (amount > this.balance) {
//         console.log(`${this.accountHolder}, insufficient balance!`);
//       } else {
//         this.balance -= amount;
//         console.log(`${this.accountHolder} withdrew Rs. ${amount}. Remaining Balance: Rs. ${this.balance}`);
//       }
//     }
  
//     checkBalance() {
//       console.log(`Account holder: ${this.accountHolder}, Balance: Rs. ${this.balance}`);
//       console.log(this);
//     }
//   }
  
//   // 🔄 Creating objects
//   const account1 = new BankAccount("Haseeb", 5000);
  
//   account1.checkBalance();     // Rs. 5000
//   account1.deposit(2000);      // Rs. 7000
//   account1.withdraw(1000);     // Rs. 6000
//   account1.withdraw(8000);     // Insufficient balance!
  



class Person {
    constructor(name, acc) {
      this.name = name;
      this.acc= acc;
      console.log("Inside constructor: ", this);
    }
  
    greet() {
      console.log("Inside greet method: ", this);
      console.log("Hi, I’m " + this.name + "....My Account Number is : "+ this.acc);
    }
  }
  
  const p1 = new Person("Haseeb", 1000);
  p1.greet();
  