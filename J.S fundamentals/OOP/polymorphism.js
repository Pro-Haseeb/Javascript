class car{

    InjectingFuel(){
        console.log("Injecting Fuel....");
        return;
    }

    IngEngine(){
        console.log("Igniting Engine....");
        return;
    }
}


class car2{
    

    InjectingFuel(){
        console.log("Injecting Fuel....");
        return;
    }

    IngEngine(){
        console.log("Igniting Engine....");
        return;
    }
}

let obj = new car;
let obj1 = new car2;

obj.IngEngine();
obj1.IngEngine();