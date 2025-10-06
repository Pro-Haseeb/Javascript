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

    constructor(){
        
    }
}