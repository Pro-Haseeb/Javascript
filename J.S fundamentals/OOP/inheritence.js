class bank {
    constructor(accNum, accHolder, accAmount){
        this.name = accHolder;
        this.number = accNum; 
        this.amount = accAmount;
    }

    accInfo(){
        console.log(`Account Holder ${this.name} has Account Number is : ${this.number} and amount of ${this.amount}`)
        
    }
}

class update extends bank{

    
    updateAccount()
    {
        // super(accNum, accHolder, accAmount);
        this.name = prompt("Update Name : ");
        this.number = Number(prompt("Update Account Number : "));
        this.amount = Number(prompt("Update Account Amount : "))
        
        
        super.accInfo();
    }
}


const obj = new update(1453, "Haseeb", 2000000);
 obj.accInfo();
 
let verify= prompt("You Want to Update Your Account or not:  ");

if(verify === "Yes"){

    console.log("After Update : ")
     obj.updateAccount();
     
}
