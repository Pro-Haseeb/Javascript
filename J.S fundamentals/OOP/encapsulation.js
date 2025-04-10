class Bank{
    #balance;

    constructor(name){
this.#balance = 0;
    this.Name=name;
    }

    getBalance(){
        let bal = this.#balance;

        console.log(this.Name + "'s Balance is " + bal);

    }
    
    deposit(amount){
        this.#balance = amount;
        console.log(this.Name + "'s Balance is updated and now balance is "+ this.#balance); 
    }
}


let obj = new Bank("Haseeb");

let ver = prompt("You want to uppdate  your balance or not : ");

if(ver === "Yes"){
    let upd  = Number(prompt("You want to uppdate  your balance or not : "));
    obj.deposit(upd);
}

 obj.getBalance();  