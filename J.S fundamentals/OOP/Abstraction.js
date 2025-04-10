class  Car{
   #carName;

    constructor(model){
        this.#carName  = model;
    }

    #InjectingFuel(){
        console.log("Injecting Fuel....");
        return;
    }

    #IngEngine(){
        console.log("Igniting Engine....");
        return;
    }

    startCar(){
       this.#InjectingFuel();
    }
}