// inheritence
//super and Extends Keyword Working

class vehicle{
    constructor(brand, model){
    this.brand = brand;
    }

    start(){
        console.log(`${this.brand} is starting brum brummm.......`);
    }
}

class car extends vehicle{
    constructor( brand, model){
     super(brand);
     this.model = model;
    }

    drive(){
        console.log(`Brand: ${this.brand} Model: ${this.model} is driving`);
    }

}

class bike extends vehicle{
    constructor(brand,cc){
         super(brand);
        this.cc = cc;
       
    }

    ride(){
        console.log(`${this.brand} ${this.cc}cc is Riding`);
    }
}


const carObj = new car("Kia", "Sportage");
const bikeObj = new bike("Honda","150");

carObj.start();
carObj.drive();

bikeObj.start();
bikeObj.ride();


//Encapsulation

class bankAcc{
    #balance =0;

    constructor(owner, balance){
    this.owner=owner;
    this.#balance = balance;
    }

    basicDetail(){
        console.log(`Owner name: ${this.owner} and Balance is ${this.#balance}`);
    }

    deposit(amount){
        if(amount > 0){
            this.#balance += amount;
        }

        console.log(`Total Balance after Deposit = ${this.#balance}`);
    }

    withdraw(amount){
        if(amount<this.#balance){
            this.#balance-=amount;
        }
        else{
            console.log("Insufficent Balance in your Account");
        }

        console.log(`You total Balance after withdrawal ${this.#balance}`);
    }
}

const obj = new bankAcc("Haseeb", 1200000);

obj.basicDetail();
obj.deposit(50000);
obj.withdraw(100000);

//Abstraction
// What is Abstraction?

// Abstraction ka matlab hota hai:

// “User ko sirf simple interface dikhana, aur complex logic chhupa dena.”

// Yani:
// tum sirf kaam karne ka tareeqa dikhate ho (what to do)
// lekin andar ka code (how to do) chhupa dete ho

class payment{
  async pay(amount){

         await this.#connecttoServer();
        const msg = await this.#Process(amount);

        return msg;
     
   }

   #connecttoServer(){
    return new Promise((resolve)=>{
        console.log("Connecting to secure Payment servers .....");
        setTimeout(() => {
            console.log("Connected");
            resolve();
        }, 3000);
      
    })
    
   }

   #Process(amount){
    return new Promise((resolve)=>{
      console.log("Checking and Processing.....");

    setTimeout(()=>{
     if(amount==10000){
    resolve("Payment is been submitted :-)");
    }
    else {
        resolve("Payment is not correct :-( ");
    }
    }, 3000)
   
    })
    
   }

}

const paymentObj = new payment;
paymentObj.pay(10000).then((message)=>{
    console.log(message)
});